import { useState, useEffect } from "react";
import Logo from "../assets/Flix.png";
import * as Icons from "react-feather";
import "./Nav.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

function Nav(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full z-50">
      <div
        className={`w-full bg-gradient-to-r from-[#fdce10] to-[#ffb1d2] flex items-end justify-end text-white h-1 transition-all duration-300 ${
          isScrolled ? "hidden" : "block"
        }`}
      >
        {/* <p className="font-bold m-1 mr-[8%] font-fredoka">
          We see a bright future
        </p> */}
      </div>
      <div className="flex items-center justify-around bg-transparent p-2">
        <div className="flex items-center">
          <img src={Logo} className="h-20 max-md:h-14" alt="Logo" />
        </div>
        <div className="hidden md:flex items-center font-fredoka font-semibold text-2xl text-white">
          <ul className="flex items-center list-none gap-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-2 rounded-full font-bold text-lg sm:text-xl ${
                  isActive
                    ? "bg-gradient-to-r from-[#fdce10] to-[#ffb1d2] text-black"
                    : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `p-2 rounded-full font-bold text-lg sm:text-xl ${
                  isActive
                    ? "bg-gradient-to-r from-[#fdce10] to-[#ffb1d2] text-black"
                    : ""
                }`
              }
            >
              Our Services
            </NavLink>
            <NavLink
              to="/channels"
              className={({ isActive }) =>
                `p-2 rounded-full font-bold text-lg sm:text-xl ${
                  isActive
                    ? "bg-gradient-to-r from-[#fdce10] to-[#ffb1d2] text-black"
                    : ""
                }`
              }
            >
              All Channels
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `p-2 rounded-full font-bold text-lg sm:text-xl ${
                  isActive
                    ? "bg-gradient-to-r from-[#fdce10] to-[#ffb1d2] text-black"
                    : ""
                }`
              }
            >
              About
            </NavLink>
          </ul>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Icons.Youtube
            strokeWidth={1.5}
            style={{ fill: "transparent" }}
            size={30}
            stroke="white"
            data-aos="fade-up"
            data-aos-delay="400"
          />
          <Icons.Instagram
            strokeWidth={1.5}
            stroke="white"
            style={{ fill: "transparent" }}
            size={30}
            data-aos="fade-up"
            data-aos-delay="500"
          />
          <Icons.Facebook
            strokeWidth={1.5}
            stroke="white"
            style={{ fill: "transparent" }}
            size={30}
            data-aos="fade-up"
            data-aos-delay="600"
          />
        </div>
        <div className="md:hidden flex items-center relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-white p-2 rounded-full"
          >
            <Icons.Menu strokeWidth={1.5} stroke="black" size={20} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden w-full flex flex-col items-center bg-gradient-to-r from-[#fdce10] to-[#ffb1d2] p-4">
          <ul className="flex flex-col items-center list-none">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-2 rounded-full font-bold text-lg sm:text-xl ${
                  isActive
                    ? "bg-gradient-to-r from-[#fdce10] to-[#ffb1d2] text-black"
                    : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `p-2 rounded-full font-bold text-lg sm:text-xl ${
                  isActive
                    ? "bg-gradient-to-r from-[#fdce10] to-[#ffb1d2] text-black"
                    : ""
                }`
              }
            >
              Our Services
            </NavLink>
            <NavLink
              to="/channels"
              className={({ isActive }) =>
                `p-2 rounded-full font-bold text-lg sm:text-xl ${
                  isActive
                    ? "bg-gradient-to-r from-[#fdce10] to-[#ffb1d2] text-black"
                    : ""
                }`
              }
            >
              All Channels
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `p-2 rounded-full font-bold text-lg sm:text-xl ${
                  isActive
                    ? "bg-gradient-to-r from-[#fdce10] to-[#ffb1d2] text-black"
                    : ""
                }`
              }
            >
              About
            </NavLink>
          </ul>
          <div className="flex items-center gap-6 mt-4">
            <Icons.Youtube
              strokeWidth={1.5}
              style={{ fill: "transparent" }}
              size={30}
              stroke="white"
              data-aos="fade-up"
              data-aos-delay="400"
            />
            <Icons.Instagram
              strokeWidth={1.5}
              stroke="white"
              style={{ fill: "transparent" }}
              size={30}
              data-aos="fade-up"
              data-aos-delay="500"
            />
            <Icons.Facebook
              strokeWidth={1.5}
              stroke="white"
              style={{ fill: "transparent" }}
              size={30}
              data-aos="fade-up"
              data-aos-delay="600"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
