import Logo from "../assets/Kaccha.png";

function Contact(): JSX.Element {
  return (
    <div className=" flex items-center justify-center flex-col gap-2 bg-gradient-to-b from-black via-[#fef10d] to-black bg-opa">
      <img src={Logo} className="w-3/4 h-auto" />
      <a href="/channels">
        <button
          data-aos="fade-up"
          className="bg-gradient-to-r from-[#fdce10] to-[#ffb1d2] text-black p-3 px-8 sm:px-10 rounded-full font-semibold text-lg sm:text-xl mb-10"
        >
          Our Channels
        </button>
      </a>
    </div>
  );
}

export default Contact;
