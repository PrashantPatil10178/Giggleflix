import { useEffect, useState } from "react";
import videoSource from "../assets/Home.mp4";
import { Play } from "react-feather";
import isMobile from "is-mobile";
import MobileBG from "../assets/MobileBG.webm";

function Body(): JSX.Element {
  const mobile = isMobile();

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen font-fredoka bg-black overflow-hidden">
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        autoPlay
        loop
        muted
      >
        <source src={mobile ? MobileBG : videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-[url('https://a2.storyblok.com/f/260537/1728x1024/20a3aadcfe/pattern-curve-bottom.svg')] bg-cover bg-bottom">
        {mobile ? (
          <div className="text-center duration-1000 px-4">
            <h1 className="text-3xl lg:text-5xl xl:text-5xl font-semibold mb-4 text-[#fdd003]">
              A Thrilling Expedition Through a Prehistoric Realm
            </h1>
            <p className="sm:text-xl md:text-xl lg:text-xl xl:text-xl">
              Join Riddhu and Avi as they step through Doctor Strange's portal
              into a breathtaking world filled with towering dinosaurs and
              ancient mysteries waiting to be uncovered.
            </p>
          </div>
        ) : (
          <div className="text-center duration-1000 px-4">
            <h1 className="text-3xl lg:text-5xl xl:text-5xl font-semibold mb-4 text-[#fdd003]">
              A Family's Journey Through the Heart of Nature
            </h1>
            <p className="sm:text-xl md:text-xl lg:text-xl xl:text-xl">
              Join Avi, Riddhu, and Ayra as they embark on a magical rainy day
              adventure exploring the lush greenery and fascinating wildlife.
            </p>
          </div>
        )}
        <a
          href={
            mobile
              ? "https://www.youtube.com/shorts/k5kMtp-7OPo"
              : "https://www.youtube.com/watch?v=mp1B2afjXgM&feature=youtu.be"
          }
        >
          <button className="flex flex-row items-center justify-start text-center text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-[#fdce10] to-[#ffb1d2] px-6 py-3 sm:px-8 sm:py-4 rounded-full border-2 border-orange-300 mt-2 font-semibold">
            <Play
              fill="orange"
              stroke="orange"
              className="rounded-full"
              size={30}
            />
            Watch Now
          </button>
        </a>
      </div>
    </div>
  );
}

export default Body;
