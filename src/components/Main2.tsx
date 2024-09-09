import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import videoSource from "../assets/bg.mp4";
import { Play } from "react-feather";

function Main2() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="relative h-[80vh] md:h-screen w-full bg-yellow-400 flex items-center justify-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-1/2 left-0 right-0 text-center z-20 px-4 md:px-0">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg md:p-10 shadow-lg flex flex-col items-center justify-center gap-6"
        >
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="bg-gradient-to-r from-[#fdce10] to-[#ffb1d2] rounded-full p-4 md:p-6 flex items-center justify-center"
          >
            <Play fill="#39afaf" stroke="#39afaf" size={70} />
          </div>

          <p className="text-[#ffb1d2] font-bold text-4xl md:text-5xl font-fredoka">
            Explore Our Work
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main2;
