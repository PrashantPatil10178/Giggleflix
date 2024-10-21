import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

// Assets
import Main from "../assets/Services/serviceMain.png";
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
import Asset1 from "../assets/Services/models2/Assets1.jpg";
import Asset2 from "../assets/Services/models2/Assets2.jpg";
import Asset3 from "../assets/Services/models2/Assets3.png";
import Asset4 from "../assets/Services/models2/Assets4.png";
import Asset5 from "../assets/Services/models2/Assets5.jpg";
import Asset6 from "../assets/Services/models2/Assets6.jpg";
import Asset7 from "../assets/Services/models2/Assets7.jpg";
import Asset8 from "../assets/Services/models2/Assets8.jpg";
import BackgroundVideo from "../assets/Services/Our Services .mp4";
import BackgroundVideoPC from "../assets/Services/Our Services PC.mp4";
import FooterMain from "../assets/Services/footer.png";
import Bubble from "../assets/Services/bubble.png";
import isMobile from "is-mobile";

function OurServices(): JSX.Element {
  const mobile = isMobile();

  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <Nav />
      {/* Main Banner */}
      <div
        className="relative w-full h-[80vh] bg-cover bg-center font-fredoka flex items-center justify-center"
        style={{ backgroundImage: `url(${Main})` }}
      >
        {/* Black overlay filter */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div
          className="absolute w-5/6 md:w-2/4 bottom-8 left-4 md:left-44 text-white z-10 space-y-4 flex flex-col items-start"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#ffc550] drop-shadow-md leading-tight">
            End To End Integrated Offerings
          </h2>
          <p className="text-base md:text-xl leading-relaxed">
            At our animation studio, we specialize in crafting captivating
            content for children. Our services cover the entire creative
            process, from concept design and storyboarding to 2D and 3D
            animation. Our in-house music studio also produces delightful tunes
            for our videos.
          </p>
        </div>
      </div>

      {/* 3D Character Design & Modeling Section */}
      <section className="min-h-screen bg-gradient-to-r from-[#fdcf03] to-[#ffafd9] py-16 font-fredoka">
        <div className="container mx-auto px-4 space-y-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#c9193b]"
            data-aos="fade-up"
          >
            3D Character Design & Modeling
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4">
            {[
              girl2,
              girl,
              Boy,
              GrandMother,
              Tortoise,
              Tiger,
              Bear,
              Elephant,
            ].map((src, index) => (
              <div
                key={index}
                className={`${index === 0 ? "md:rounded-tl-lg" : ""} ${
                  index === 3 ? "md:rounded-tr-lg" : ""
                } ${index === 4 ? "md:rounded-bl-lg" : ""} ${
                  index === 7 ? "md:rounded-br-lg" : ""
                } relative w-full h-80 overflow-hidden shadow-md`}
                data-aos="zoom-in"
              >
                <img
                  src={src}
                  alt={`Model ${index}`}
                  className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-16 bg-gradient-to-r from-[#fdcf03] to-[#ffafd9] font-fredoka">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#c9193b]"
            data-aos="fade-up"
          >
            Our Stunning Models
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {[image1, image2].map((src, index) => (
              <div
                key={index}
                className="relative w-full h-80 overflow-hidden rounded-lg shadow-md"
                data-aos="zoom-in"
              >
                <img
                  src={src}
                  alt={`Image ${index}`}
                  className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Building & BG Creation Section */}
      <section className="min-h-screen bg-gradient-to-r from-[#fdcf03] to-[#ffafd9] py-16 font-fredoka">
        <div className="container mx-auto px-4 space-y-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#c9193b]"
            data-aos="fade-up"
          >
            Asset Building & BG Creation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4">
            {[
              Asset1,
              Asset2,
              Asset3,
              Asset4,
              Asset5,
              Asset6,
              Asset7,
              Asset8,
            ].map((src, index) => (
              <div
                key={index}
                className={`${index === 0 ? "md:rounded-tl-lg" : ""} ${
                  index === 3 ? "md:rounded-tr-lg" : ""
                } ${index === 4 ? "md:rounded-bl-lg" : ""} ${
                  index === 7 ? "md:rounded-br-lg" : ""
                } relative w-full h-80 overflow-hidden shadow-md `}
                data-aos="zoom-in"
              >
                <img
                  src={src}
                  alt={`Model ${index}`}
                  className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#c9193b] mt-16"
            data-aos="fade-up"
          >
            3D Animation
          </h2>
          <div
            className="relative w-full pb-[56.25%] overflow-hidden rounded-xl shadow-lg mt-8"
            data-aos="fade-in"
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={mobile ? BackgroundVideo : BackgroundVideoPC}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div className="bg-gradient-to-r from-[#fdd003] via-[#eea50f] to-[#fdcf03] p-10">
        <footer
          className="relative py-16 bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${Bubble})`,
          }}
        >
          <div className="container mx-auto text-center">
            <img
              src={FooterMain}
              className="w-full mx-auto"
              alt="Footer Main"
              data-aos="zoom-in"
              loading="lazy"
            />
          </div>
        </footer>
      </div>
      <Footer />
    </>
  );
}

export default OurServices;
