import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

// Assets
import Main from "../assets/Services/serviceMain.png";

// Models
import Bear from "../assets/Services/models/Bear.jpg";
import Boy from "../assets/Services/models/boy.jpg";
import Elephant from "../assets/Services/models/Elephant.jpg";
import girl from "../assets/Services/models/girl.jpg";
import girl2 from "../assets/Services/models/girl2.jpg";
import GrandMother from "../assets/Services/models/grandMother.jpg";
import Tiger from "../assets/Services/models/Tiger.jpg";
import Tortoise from "../assets/Services/models/tortoise.jpg";
import image1 from "../assets/Services/i1.jpg";
import image2 from "../assets/Services/i2.jpg";

// Models2
import Asset1 from "../assets/Services/models2/Assets1.jpg";
import Asset2 from "../assets/Services/models2/Assets2.jpg";
import Asset3 from "../assets/Services/models2/Assets3.png";
import Asset4 from "../assets/Services/models2/Assets4.png";
import Asset5 from "../assets/Services/models2/Assets5.jpg";
import Asset6 from "../assets/Services/models2/Assets6.jpg";
import Asset7 from "../assets/Services/models2/Assets7.jpg";
import Asset8 from "../assets/Services/models2/Assets8.jpg";

// Video
import BackgroundVideo from "../assets/Services/Our Services .mp4";
import BackgroundVideoPC from "../assets/Services/Our Services PC.mp4";
import Logo from "../assets/Flix.png";
import FooterMain from "../assets/Services/footer.png";
import Bubble from "../assets/Services/bubble.png";

import isMobile from "is-mobile";

function OurServices(): JSX.Element {
  const mobile = isMobile();

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <Nav />
      {/* Main Banner */}
      <div
        className="relative w-full h-3/4 md:h-[75vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${Main})` }}
      >
        {/* Black overlay filter */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute sm:w-5/6 md:w-3/6 bottom-4 left-4 md:left-32 text-white z-10"
          data-aos="fade-up"
        >
          <h2 className="font-fredoka mb-3 text-3xl md:text-5xl text-[#ffc550] font-bold">
            End To End Integrated Offerings
          </h2>
          <p className="text-base md:text-lg font-fredoka">
            At our animation studio, we specialize in crafting captivating
            content for children. Our services cover the entire creative
            process, from concept design and storyboarding to 2D and 3D
            animation. Additionally, our in-house music studio produces
            delightful tunes for our videos.
          </p>
        </div>
      </div>

      {/* 3D Character Design & Modeling Section */}
      <div className="bg-gradient-to-r from-[#fdcf03] to-[#ffafd9] min-h-screen flex flex-col gap-6 justify-center items-center p-8">
        <h2 className="text-4xl md:text-5xl font-bold font-fredoka text-[#c9193b] mb-8 text-center">
          3D Character Design & Modeling
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
          {[girl2, girl, Boy, GrandMother, Tortoise, Tiger, Bear, Elephant].map(
            (src, index) => (
              <div
                key={index}
                className={`${index === 0 ? "md:rounded-tl-lg" : ""} ${
                  index === 3 ? "md:rounded-tr-lg" : ""
                } ${index === 4 ? "md:rounded-bl-lg" : ""} ${
                  index === 7 ? "md:rounded-br-lg" : ""
                }  relative w-full h-60 sm:h-80 md:h-80 lg:h-96 overflow-hidden`}
                data-aos="zoom-in"
              >
                <img
                  src={src}
                  alt={`Model ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* Additional Section */}
      <div className="bg-gradient-to-r from-[#fdcf03] to-[#ffafd9] min-h-screen flex flex-col gap-6 justify-center items-center p-8">
        <h2 className="text-4xl md:text-5xl font-bold font-fredoka text-[#c9193b] mb-8 text-center">
          3D Character Design & Modeling
        </h2>
        <div className="grid w-full sm:w-3/4 md:w-3/5 grid-cols-1 sm:grid-cols-2 gap-0">
          {[image1, image2].map((src, index) => (
            <div key={index} className="relative w-full h-full overflow-hidden">
              <img
                src={src}
                alt={`Image ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Asset Building & BG Creation Section */}
      <div className="bg-gradient-to-r from-[#fdcf03] to-[#ffafd9] min-h-screen flex flex-col gap-6 justify-center items-center p-8">
        <h2 className="text-4xl md:text-5xl font-bold font-fredoka text-[#c9193b] mb-8 text-center">
          Asset Building & BG Creation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
          {[Asset1, Asset2, Asset3, Asset4, Asset5, Asset6, Asset7, Asset8].map(
            (src, index) => (
              <div
                key={index}
                className={`${index === 0 ? "md:rounded-tl-lg" : ""} ${
                  index === 3 ? "md:rounded-tr-lg" : ""
                } ${index === 4 ? "md:rounded-bl-lg" : ""} ${
                  index === 7 ? "md:rounded-br-lg" : ""
                }  relative w-full h-60 sm:h-80 md:h-80 lg:h-96 overflow-hidden`}
                data-aos="zoom-in"
              >
                <img
                  src={src}
                  alt={`Model ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )
          )}
        </div>

        <h2
          className="text-4xl md:text-5xl text-center font-bold font-fredoka text-[#c9193b] m-10"
          data-aos="fade-up"
        >
          3D Animation
        </h2>
        <div
          className="relative w-full pb-[56.25%] h-full overflow-hidden rounded-xl"
          data-aos="fade-in"
        >
          {/* Aspect Ratio Container */}
          <div className="absolute inset-0 w-full h-full">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={mobile ? BackgroundVideo : BackgroundVideoPC}
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div
        className="flex flex-col items-center justify-center p-10"
        style={{
          backgroundImage: `url(${Bubble}), linear-gradient(to right, #fdd003, #eea50f, #fdcf03)`,
          backgroundSize: "contain, cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <img
          src={Logo}
          className="w-1/3 md:w-1/4 lg:w-1/5 mb-8 object-contain"
          alt="Logo"
          data-aos="fade-down"
        />
        <img
          src={FooterMain}
          className="w-1/2 md:w-2/3 lg:w-3/4 object-contain"
          alt="Footer Main"
          data-aos="zoom-in"
        />
      </div>
      <Footer />
    </>
  );
}

export default OurServices;
