import { useEffect } from "react";
import Logo from "../assets/Flix.png";
import LogoGif from "../assets/bg-logo.gif";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Cloud from "../assets/cloud.webp";
import Cloud2 from "../assets/cloud 2.webp";

const Main = () => {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 800, // Increased duration for smoother animation
      easing: "ease-out", // Added easing for a smoother transition
      once: true, // Animation occurs only once
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="bg-black w-full font-fredoka p-4 sm:p-10">
      <div
        data-aos="fade-left"
        className="flex flex-col items-center justify-center pt-5 px-4 sm:px-6 lg:px-8 relative"
      >
        <h3 className="text-3xl sm:text-6xl font-semibold text-[#ffd700] m-4 text-center">
          Welcome to
        </h3>
        <div
          className="relative p-6 sm:p-10 rounded-lg bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${LogoGif})`, backgroundSize: "50%" }}
        >
          <img
            data-aos="fade-down"
            src={Cloud}
            alt="Cloud"
            className="absolute top-0 left-0 w-16 sm:w-24"
          />

          <img
            data-aos="fade-up-right" // AOS animation type
            data-aos-duration="1500" // AOS animation duration
            data-aos-delay="500" // AOS animation delay
            src={Cloud2}
            alt="Cloud 2"
            className="absolute bottom-0 right-0 w-16 sm:w-24 transform translate-x-8 -translate-y-8"
          />

          <div className="flex flex-row items-center justify-center">
            <img
              src={Logo}
              alt="Giggleflix Logo"
              className="h-24 sm:h-40 mx-auto"
            />
          </div>
        </div>
        <h3
          data-aos="fade-right"
          className="text-2xl sm:text-5xl m-3 font-medium text-center text-[#ffd700]"
        >
          Giggleflix Studios is where imagination takes flight! 🚀
        </h3>
        <p
          data-aos="fade-up"
          className="text-base sm:text-lg m-2 text-white sm:w-3/4 text-center font-poppins"
        >
          We are driven by our passion to craft delightful and educational
          content for children. <br />
          From whimsical adventures to heartwarming characters, we bring magic
          to every little heart.
        </p>
        <p
          data-aos="fade-down"
          className="text-lg sm:text-2xl m-2 text-[#ffafda] text-center font-semibold"
        >
          So buckle up, little adventurers! 🌟
        </p>
        <button
          data-aos="fade-up"
          className="bg-gradient-to-r from-[#fdce10] to-[#ffb1d2] text-black p-3 px-8 sm:px-10 rounded-full font-bold text-lg sm:text-xl m-5"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Main;
