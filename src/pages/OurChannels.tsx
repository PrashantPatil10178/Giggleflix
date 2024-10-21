import Nav from "../components/Nav";

import darkLogo from "../assets/OurChannels/darklogo.png";

import Main from "../assets/OurChannels/Main.png";
import HindiChannel from "../assets/OurChannels/HindiChannel.png";
import HindiButton from "../assets/OurChannels/HindiButton.png";
import MarathiChannel from "../assets/OurChannels/MarathiChannel.png";
import MarathiButton from "../assets/OurChannels/MarathiButton.png";
import BlurBG from "../assets/OurChannels/BlurBG.png";
import water from "../assets/OurChannels/water.png";
import frog from "../assets/OurChannels/frog.png";

import EnglishChannel from "../assets/OurChannels/English.png";
import EnglishButton from "../assets/OurChannels/EnglishButton.png";
import SpanishChannel from "../assets/OurChannels/Spanish.png";
import SpanishButton from "../assets/OurChannels/SpanishButton.png";

import Avi from "../assets/OurChannels/Avi.png";
import AviBG from "../assets/OurChannels/AviBg.webp";

import Riddhu from "../assets/OurChannels/Riddhu.png";
import RiddhuBG from "../assets/OurChannels/RiddhuBG.png";

import Ayra from "../assets/OurChannels/Ayra.png";
import AyraBg from "../assets/OurChannels/AyraBG.png";

import "./ourChannels.css";

function OurChannels() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Nav />
      <div
        className="relative w-full h-3/4 md:h-[75vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${Main})` }}
      >
        <div
          className="absolute sm:w-5/6 md:w-3/6 bottom-4 left-4 md:left-32 text-white z-10"
          data-aos="fade-up" // This will animate the div on scroll
          data-aos-duration="1000" // Animation duration in milliseconds
          data-aos-easing="ease-in-out" // Animation easing function
          data-aos-delay="200" // Delay before animation starts
        >
          <h2 className="font-fredoka mb-3 text-3xl md:text-5xl text-[#ffc550] font-bold">
            Our Channels
          </h2>
          <p className="text-base md:text-lg font-fredoka">
            We are available on YouTube in multiple languages
          </p>
        </div>
      </div>

      <div className="bg-orange-500 text-white p-8">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Logo and Text Section */}
          <div className="h-full flex flex-col justify-center items-start">
            <img
              src={darkLogo}
              alt="Giggle Flix Studios"
              className="mx-auto mb-4 w-60"
              data-aos="fade-right" // Animation for the logo
              data-aos-duration="1000"
            />
            <div className="bg-orange-500 text-white p-8">
              <h1
                className="text-7xl font-bold tracking-wide font-banger leading-tight text-center lg:text-left"
                data-aos="fade-up" // Animation for the heading
                data-aos-duration="1000"
              >
                <span className="block outline-text">Our</span>
                <span className="block outline-text">Regional</span>
                <span className="block outline-text">Language</span>
                <span className="block text-black text-7xl font-extrabold outline-black">
                  Channels
                </span>
              </h1>
            </div>
          </div>

          {/* Hindi Channel Section */}
          <div
            className="text-center flex flex-col items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <img
              src={HindiChannel}
              alt="Hindi Characters"
              className="w-96 h-auto mx-auto mt-5"
            />
            <a href="http://www.youtube.com/@KacchaNimboo_gflix">
              {" "}
              <img
                src={HindiButton}
                alt="Kaccha Nimboo Hindi"
                className="mx-auto w-64 mb-2"
              />
            </a>
          </div>

          {/* Marathi Channel Section */}
          <div
            className="text-center flex flex-col items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <img
              src={MarathiChannel}
              alt="Marathi Characters"
              className="w-96 h-auto mx-auto"
            />
            <a href="http://www.youtube.com/@KacchaNimbooMarathi_gflix">
              <img
                src={MarathiButton}
                alt="Kaccha Nimboo Marathi"
                className="mx-auto w-60 mb-2"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-teal-500 text-white p-8">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Logo and Text Section */}
          <div className="h-full flex flex-col justify-center items-start">
            <img
              src={darkLogo}
              alt="Giggle Flix Studios"
              className="mx-auto mb-4 w-60"
              data-aos="fade-right" // Animation for the logo
              data-aos-duration="1000"
            />
            <div className="bg-teal-500 text-white p-8">
              <h1
                className="text-7xl font-bold tracking-wide font-banger leading-tight text-center lg:text-left"
                data-aos="fade-up" // Animation for the heading
                data-aos-duration="1000"
              >
                <span className="block outline-text">Our</span>
                <span className="block outline-text">Global</span>
                <span className="block outline-text">Language</span>
                <span className="block text-black text-7xl font-extrabold outline-black">
                  Channels
                </span>
              </h1>
            </div>
          </div>

          {/* English Channel Section */}
          <div
            className="text-center flex flex-col items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <img
              src={EnglishChannel}
              alt="English Characters"
              className="w-96 h-auto mx-auto"
            />
            <a href="http://www.youtube.com/@LalaLemon_gflixstudios">
              {" "}
              <img
                src={EnglishButton}
                alt="Kaccha Nimboo English"
                className="mx-auto w-64 mb-2"
              />
            </a>
          </div>

          {/* Spanish Channel Section */}
          <div
            className="text-center flex flex-col items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <img
              src={SpanishChannel}
              alt="Spanish Characters"
              className="w-96 h-auto mx-auto mt-11"
            />
            <img
              src={SpanishButton}
              alt="Kaccha Nimboo Spanish"
              className="mx-auto w-64 mb-2"
            />
          </div>
        </div>
      </div>

      <div
        className="w-full h-auto bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row justify-center items-center gap-10 max-md:gap-0 p-4"
        style={{ backgroundImage: `url(${BlurBG})` }}
      >
        {/* First Column */}
        <div
          className="relative flex flex-col items-center"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          {/* Hindi Channel Image */}
          <img
            src={HindiChannel}
            alt="Hindi Characters"
            className="w-80 lg:w-96 h-auto mx-auto"
            data-aos="zoom-in" // Animation for Hindi Channel Image
            data-aos-duration="1000"
          />
          {/* Water Image with Overlap */}
          <img
            src={water}
            alt="Water Characters"
            className="-mt-8 lg:-mt-12 w-80 lg:w-96 h-auto mx-auto"
            data-aos="fade-up" // Animation for Water Image
            data-aos-duration="1000"
          />
        </div>

        {/* Second Column */}
        <div
          className="flex flex-col items-center mt-10 lg:mt-0"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h1
            className="text-4xl lg:text-7xl font-bold tracking-wide font-banger leading-tight text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="block outline-text">Meet</span>
            <span className="block outline-text">Our</span>
            <span className="block outline-text">Characters</span>
          </h1>
          <img
            src={frog}
            alt="Frog Character"
            className="w-60 lg:w-[500px] h-auto mt-6"
            data-aos="fade-up" // Animation for Frog Character Image
            data-aos-duration="1000"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#ff7c12] to-[#ff7c12] h-auto flex flex-col md:flex-row justify-center items-center gap-4">
        <div
          className="flex flex-col md:flex-row items-center justify-center w-11/12 md:w-3/4 h-auto p-4 md:p-8 text-center text-white"
          style={{
            backgroundImage: `url(${AviBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src={Avi}
            alt="Frog Character"
            className="w-full md:w-[26rem] h-auto mt-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          />
          <div className="ml-0 md:ml-6 font-fredoka text-center md:text-left">
            <h1
              className="text-5xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-lg font-blueberry"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Avi{" "}
              <span className="text-4xl md:text-5xl font-extrabold text-yellow-300 ">
                (The Prankster)
              </span>
            </h1>
            <p
              className="text-2xl md:text-3xl font-semibold font-blueberry text-outline m-4"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Fun Loving, Energetic Adventurer
            </p>

            <p
              className="mt-4 text-2xl md:text-3xl text-black font-light font-caveat max-w-lg mx-auto drop-shadow-md"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Avi always finds a way to bring fun in the moment with his pranks.
              He has a bittersweet relationship with Riddu and troubles her with
              his pranks. He loves watching stars with his friends.
            </p>
            <p
              className="mt-4 text-2xl md:text-3xl font-blueberry text-yellow-400 font-bold drop-shadow-lg"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Birthday: August 31st
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#11b5b7] h-auto flex flex-col md:flex-row justify-center items-center gap-4">
        <div
          className="flex flex-col md:flex-row items-center justify-center w-11/12 md:w-3/4 h-auto p-4 md:p-8 text-center text-white"
          style={{
            backgroundImage: `url(${RiddhuBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src={Riddhu}
            alt="Frog Character"
            className="w-full md:w-[26rem] h-auto mt-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          />
          <div className="font-fredoka text-center md:text-left">
            <h1
              className="text-5xl md:text-7xl font-extrabold text-pink-300 drop-shadow-lg font-blueberry"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Riddhu
              <span className="text-4xl md:text-5xl font-extrabold text-pink-300 ">
                (The Foodie)
              </span>
            </h1>
            <p
              className="text-2xl md:text-3xl font-semibold font-blueberry text-outline m-4"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Caring, Adorable Explorer
            </p>

            <p
              className="mt-4 text-2xl md:text-3xl text-white font-light font-caveat max-w-lg mx-auto drop-shadow-md"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Riddhu loves to groove to any song and is a big foodie. She has
              always curious to try new things however her plans are spoiled by
              Avi’s pranks. She is a big animal lover and loves to watch
              elephants play with her friends.
            </p>
            <p
              className="mt-4 text-2xl md:text-3xl font-blueberry text-pink-300 font-bold drop-shadow-lg"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Birthday: October 27th
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#ff7c12] to-[#ff7c12] h-auto flex flex-col md:flex-row justify-center items-center gap-4">
        <div
          className="flex flex-col md:flex-row items-center justify-center w-11/12 md:w-3/4 h-auto p-4 md:p-8 text-center text-white"
          style={{
            backgroundImage: `url(${AyraBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src={Ayra}
            alt="Frog Character"
            className="w-full md:w-[26rem] h-auto mt-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          />
          <div className="ml-0 md:ml-6 font-fredoka text-center md:text-left">
            <h1
              className="text-5xl md:text-7xl font-extrabold text-[#031a8c] drop-shadow-lg font-blueberry"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Ayra{" "}
              <span className="text-4xl md:text-5xl font-extrabold text-[#031a8c] ">
                (The Savior)
              </span>
            </h1>
            <p
              className="text-2xl md:text-3xl font-semibold font-blueberry text-outline m-3"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Natural Charismatic Leader
            </p>

            <p
              className="mt-4 text-2xl md:text-3xl text-black font-light font-caveat max-w-lg mx-auto drop-shadow-md"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Ayra is the leader of this squad and keeps everyone together. She
              is cool as a cucumber and always finds a way to make new
              interesting plans for the squad. She is a social butterfly yet the
              guardian of Avi & Riddhu.
            </p>
            <p
              className="mt-4 text-2xl md:text-3xl font-blueberry text-[#031a8c] font-bold drop-shadow-lg"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Birthday: June 21st
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-20 flex items-center justify-center font-fredoka bg-black text-white font-bold p-4">
        <p className="text-center">
          © Giggleflix Studios Pvt Ltd. All Rights Reserved {currentYear}
        </p>
      </div>
    </>
  );
}

export default OurChannels;
