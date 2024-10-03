import Nav from "../components/Nav";
import Logo from "../assets/Flix.png";

import darkLogo from "../assets/OurChannels/darklogo.png";

import Main from "../assets/OurChannels/Main.png";
import HindiChannel from "../assets/OurChannels/HindiChannel.png";
import HindiButton from "../assets/OurChannels/HindiButton.png";
import MarathiChannel from "../assets/OurChannels/MarathiChannel.png";
import MarathiButton from "../assets/OurChannels/MarathiButton.png";
import BlurBG from "../assets/OurChannels/BlurBG.png";

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

      <div className="" style={{}}></div>
    </>
  );
}

export default OurChannels;
