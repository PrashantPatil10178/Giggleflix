import Nav from "../components/Nav";
import Logo from "../assets/Flix.png";

import darkLogo from "../assets/OurChannels/darklogo.png";

import Main from "../assets/OurChannels/Main.png";
import HindiChannel from "../assets/OurChannels/HindiChannel.png";
import HindiButton from "../assets/OurChannels/HindiButton.png";
import MarathiChannel from "../assets/OurChannels/MarathiChannel.png";
import MarathiButton from "../assets/OurChannels/MarathiButton.png";
import BlurBG from "../assets/OurChannels/BlurBG.png";
import water from "../assets/OurChannels/water.png";
import frog from "../assets/OurChannels/frog.png";

import Avi from "../assets/OurChannels/Avi.png";
import AviBG from "../assets/OurChannels/AviBg.webp";

import "./ourChannels.css";

function OurChannels() {
  return (
    <>
      <Nav />
      <div
        className="relative w-full h-3/4 md:h-[75vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${Main})` }}
      >
        <div
          className="absolute sm:w-5/6 md:w-3/6 bottom-4 left-4 md:left-32 text-white z-10"
          data-aos="fade-up"
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
            />
            <div className="bg-orange-500 text-white p-8">
              <h1 className="text-7xl font-bold tracking-wide font-banger  leading-tight text-center lg:text-left">
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
          <div className="text-center flex flex-col items-center">
            <img
              src={HindiChannel}
              alt="Hindi Characters"
              className=" w-96 h-auto mx-auto"
            />

            <img
              src={HindiButton}
              alt="Kaccha Nimboo Hindi"
              className="mx-auto w-96 mb-2"
            />
          </div>

          {/* Marathi Channel Section */}
          <div className="text-center flex flex-col items-center">
            <img
              src={MarathiChannel}
              alt="Marathi Characters"
              className="w-96 h-auto mx-auto"
            />

            <img
              src={MarathiButton}
              alt="Kaccha Nimboo Marathi"
              className="mx-auto w-96 mb-2"
            />
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
            />
            <div className="bg-teal-500 text-white p-8">
              <h1 className="text-7xl font-bold tracking-wide font-banger  leading-tight text-center lg:text-left">
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
          <div className="text-center flex flex-col items-center">
            <img
              src={HindiChannel}
              alt="Hindi Characters"
              className=" w-96 h-auto mx-auto"
            />

            <img
              src={HindiButton}
              alt="Kaccha Nimboo Hindi"
              className="mx-auto w-96 mb-2"
            />
          </div>

          {/* Marathi Channel Section */}
          <div className="text-center flex flex-col items-center">
            <img
              src={MarathiChannel}
              alt="Marathi Characters"
              className="w-96 h-auto mx-auto"
            />

            <img
              src={MarathiButton}
              alt="Kaccha Nimboo Marathi"
              className="mx-auto w-96 mb-2"
            />
          </div>
        </div>
      </div>
      <div
        className="w-full h-auto bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row justify-center items-center gap-10 max-md:gap-0 p-4"
        style={{ backgroundImage: `url(${BlurBG})` }}
      >
        {/* First Column */}
        <div className="relative flex flex-col items-center">
          {/* Hindi Channel Image */}
          <img
            src={HindiChannel}
            alt="Hindi Characters"
            className="w-80 lg:w-96 h-auto mx-auto"
          />
          {/* Water Image with Overlap */}
          <img
            src={water}
            alt="Water Characters"
            className="-mt-8 lg:-mt-12 w-80 lg:w-96 h-auto mx-auto"
          />
        </div>

        {/* Second Column */}
        <div className="flex flex-col items-center mt-10 lg:mt-0">
          <h1 className="text-4xl lg:text-7xl font-bold tracking-wide font-banger leading-tight text-center">
            <span className="block outline-text">Meet</span>
            <span className="block outline-text">Our</span>
            <span className="block outline-text">Characters</span>
          </h1>
          <img
            src={frog}
            alt="Frog Character"
            className="w-60 lg:w-[500px] h-auto mt-6"
          />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#ff7c12] to-[#ff7c12] h-auto flex flex-col md:flex-row justify-center items-center gap-2">
        <div
          className="flex flex-row items-center justify-center w-3/4 h-auto p-8 text-center text-white" // Adjusted for side by side layout
          style={{
            backgroundImage: `url(${AviBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src={Avi}
            alt="Frog Character"
            className="w-[26rem] h-auto mt-6"
          />
          <div className="ml-6 font-fredoka">
            {/* Added margin to create space between image and text */}
            <h1 className="text-7xl font-extrabold text-yellow-400 drop-shadow-lg font-blueberry">
              Avi{" "}
              <span className="text-5xl font-extrabold text-yellow-300 ">
                (The Prankster)
              </span>
            </h1>
            <p
              className="text-3xl font-semibold font-blueberry text-outline"
              data-text="Fun Loving Energetic Adventurer"
            >
              Fun Loving, Energetic Adventurer
            </p>

            <p className="mt-8 text-3xl text-black font-light font-caveat max-w-lg mx-auto drop-shadow-md">
              Avi always finds a way to bring fun in the moment with his pranks.
              He has a bittersweet relationship with Riddu and troubles her with
              his pranks. He loves watching stars with his friends.
            </p>
            <p className="mt-8 text-3xl font-blueberry text-yellow-400 font-bold drop-shadow-lg">
              Birthday: August 31st
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurChannels;
