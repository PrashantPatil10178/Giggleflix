import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Spin, message } from "antd"; // Ant Design for notification
import axios from "axios"; // Import axios

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    botField: "", // Add a botField for the honeypot
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    // Honeypot check: if botField is filled, assume it's a bot and block the submission
    if (formData.botField) {
      message.error({
        content: (
          <p className="font-fredoka">Bot detected! Submission blocked.</p>
        ),
        duration: 3,
      });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://giggleflixstudios.com/api/api.php",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setLoading(false);

      if (response.data.status === "success") {
        message.success({
          content: <p className="font-fredoka">Form submitted successfully!</p>,
          duration: 3,
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          botField: "", // Reset the botField
        });
      } else {
        message.error({
          content: (
            <p className="font-fredoka">
              Error submitting form: {response.data.message}
            </p>
          ),
          duration: 3,
        });
      }
    } catch (error: any) {
      setLoading(false);
      message.error({
        content: (
          <p className="font-fredoka">Error submitting form: {error.message}</p>
        ),
        duration: 3,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto p-4 bg-transparent shadow-md rounded-lg lg:max-w-xl xl:max-w-2xl"
      data-aos="fade-up"
    >
      <div className="mb-6" data-aos="fade-right">
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="firstName"
        >
          First Name<sup>*</sup>
        </label>
        <input
          name="firstName"
          type="text"
          placeholder="Please Enter Your Name"
          required
          value={formData.firstName}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6" data-aos="fade-left">
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="lastName"
        >
          Last Name
        </label>
        <input
          name="lastName"
          type="text"
          placeholder="Enter Your Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6" data-aos="fade-right">
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email<sup>*</sup>
        </label>
        <input
          name="email"
          type="email"
          placeholder="Please Enter Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6" data-aos="fade-left">
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="message"
        >
          Message<sup>*</sup>
        </label>
        <textarea
          name="message"
          placeholder="Type your message here..."
          required
          value={formData.message}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
        />
      </div>

      {/* Honeypot Field (hidden from real users) */}
      <div style={{ display: "none" }}>
        <label>
          Do not fill this field:
          <input
            name="botField"
            type="text"
            value={formData.botField}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="flex justify-center" data-aos="fade-up">
        <button
          type="submit"
          className="bg-gradient-to-r from-[#fdce10] to-[#ffb1d2] text-black p-3 px-8 sm:px-10 rounded-full font-semibold text-lg sm:text-xl flex items-center justify-center"
          disabled={loading} // Disable button when loading
        >
          {loading ? <Spin size="small" /> : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
