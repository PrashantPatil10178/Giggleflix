import "aos/dist/aos.css";
import AOS from "aos";
import BGcard from "../assets/bg-cards.png";

AOS.init();

function Cards() {
  return (
    <div
      className="min-h-screen bg-black flex flex-col items-center justify-center w-full font-fredoka p-4 sm:p-4 bg-cover bg-no-repeat bg-bottom"
      style={{ backgroundImage: `url(${BGcard})` }}
    >
      <h3
        data-aos="fade-down"
        className="text-[#fdd002] text-6xl text-center font-semibold mb-5 sm:mb-10"
      >
        Our Services
      </h3>
      <p
        data-aos="fade-right"
        className="text-2xl text-white text-center mb-6 sm:mb-8 max-w-2xl"
      >
        We have built in-house capability to write original songs, develop
        music, build storyboards, develop 3D models and assets, and animate to
        bring everything to life.
      </p>
      <iframe
        src="https://giggleflix.parthmomaya.com/Slider/"
        className="w-full h-[75vh] max-md:h-screen mb-5"
      />
      <button
        data-aos="fade-up"
        className="bg-gradient-to-r from-[#fdce10] to-[#ffb1d2] text-black p-3 px-8 sm:px-10 rounded-full font-semibold text-lg sm:text-xl mb-10"
      >
        Explore All Services
      </button>
    </div>
  );
}

export default Cards;
