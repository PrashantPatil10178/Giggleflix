import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../assets/Flix.png";
import FooterImage from "../assets/Footer.png";
import { Youtube, Instagram } from "react-feather";
import ContactForm from "./Form";

function Footer(): JSX.Element {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="font-fredoka bg-gradient-to-b from-black to-gray-900 min-h-screen w-full flex flex-col justify-around p-6 md:p-12">
        <div
          className="w-full flex flex-col md:flex-row items-start justify-around mb-6 md:mb-12"
          data-aos="fade-up"
        >
          <div className="w-64 max-md:w-44 mb-6 md:mb-0" data-aos="fade-right">
            <img src={Logo} alt="Flix Logo" className="w-full" />
          </div>
          <div
            className="flex items-center justify-between gap-4"
            data-aos="fade-left"
          >
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube
                stroke="white"
                size={44}
                className="hover:text-red-500 transition duration-300"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                stroke="white"
                size={44}
                className="hover:text-pink-500 transition duration-300"
              />
            </a>
          </div>
        </div>
        <div
          className="w-full flex flex-col md:flex-row items-center justify-between gap-7"
          data-aos="fade-up"
        >
          <div className="w-full md:w-1/2 h-full lg:mb-10" data-aos="zoom-in">
            <img
              src={FooterImage}
              alt="Footer Illustration"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="w-full h-auto md:w-1/2 mb-6 md:mb-0 flex flex-col items-center gap-4"
            data-aos="zoom-in"
          >
            <h1 className="text-white font-semibold">Contact Us</h1>
            <div className="w-full p-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-15 flex items-center justify-center font-fredoka bg-black text-white font-bold p">
        <p className="m-4 text-center">
          © Giggleflix Studios Pvt Ltd. All Rights Reserved {currentYear}
        </p>
      </div>
    </>
  );
}

export default Footer;
