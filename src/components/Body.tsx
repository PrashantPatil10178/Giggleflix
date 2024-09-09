import { useEffect, useState } from "react";
import videoSource from "../assets/Home.mp4";
import { Play } from "react-feather";

function Body(): JSX.Element {
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
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-[url('https://a2.storyblok.com/f/260537/1728x1024/20a3aadcfe/pattern-curve-bottom.svg')] bg-cover bg-bottom">
        <div className="text-center duration-1000 px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold mb-4 text-white">
            Get On a Star Gazing Adventure
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            New Adventure as Avi, Riddhu and Ayra get on a Camping <br />
            adventure in the Zoo Jungle Watching stars!
          </p>
        </div>
        <button className="flex flex-row items-center justify-start text-center text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-[#fdce10] to-[#ffb1d2] px-6 py-3 sm:px-8 sm:py-4 rounded-full border-2 border-orange-300 mt-2 font-semibold">
          <Play
            fill="orange"
            stroke="orange"
            className="rounded-full"
            size={30}
          />
          Coming Soon
        </button>
      </div>
    </div>
  );
}

export default Body;
