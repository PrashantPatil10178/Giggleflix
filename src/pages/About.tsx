import { useEffect } from "react";
import Nav from "../components/Nav";
import AboutUs from "../assets/AboutUs.jpg";
import newBG from "../assets/mainDivBg.png";
import AOS from "aos";
import rohan from "../assets/About-Us/rohan.jpg";
import Jitendra from "../assets/About-Us/Jitendra.jpg";
import Sanjiv from "../assets/About-Us/Sanjiv.jpg";
import Anuruddh from "../assets/About-Us/Anuruddh.jpg";
import Kshity from "../assets/About-Us/ks.png";
import Tanay from "../assets/About-Us/Tanay.png";
import Anyokti from "../assets/About-Us/Anyoki.png";
import Shubham from "../assets/About-Us/Shubham.png";
import Pankaj from "../assets/About-Us/Pankaj.jpg";
import Amaldo from "../assets/About-Us/Amaldo.png";
import David from "../assets/About-Us/David.png";
import Amid from "../assets/About-Us/Avid.png";
import { Card, Col, Row } from "antd";
import "aos/dist/aos.css";
import "antd/dist/reset.css";
import bg from "../assets/About-Us/bg.svg";
import Footer from "../components/Footer";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const founders = [
    { name: "Rohan", role: "Chief Creative Officer", image: rohan },
    { name: "Jitendra", role: "Chief Operating Officer", image: Jitendra },
    { name: "Sanjiv", role: "Chief of Business Development", image: Sanjiv },
  ];

  const ManagementTeam = [
    {
      name: "Anuruddh Reddy",
      role: "Head of Music",
      operation: "Music Director & Producer",
      image: Anuruddh,
    },
    {
      name: "Kshity Chandigoankar",
      role: "Head of Projects",
      operation: "Operations Management",
      image: Kshity,
    },
    {
      name: "Tanay Pawar",
      role: "Lead Modeler",
      operation: "3D Asset & Compositing",
      image: Tanay,
    },
    {
      name: "Anyokti Fulse",
      role: "Lead Animator",
      operation: "3D Animation & Render Expert",
      image: Anyokti,
    },
    {
      name: "Shubham Kulkarni",
      role: "3D Model Expert",
      operation: "Character Modeling & Rigging",
      image: Shubham,
    },
    {
      name: "Pankaj Deore",
      role: "Storyboard Expert",
      operation: "Art & Character Design",
      image: Pankaj,
    },
  ];

  const Network = [
    {
      name: "Amaldo Amal",
      role: "Network Partner",
      country: "USA",
      image: Amaldo,
    },
    {
      name: "David Tesone",
      role: "Network Partner",
      country: "Colombia",
      image: David,
    },
    {
      name: "Amid Hendricks",
      role: "Network Partner",
      country: "Netherlands",
      image: Amid,
    },
  ];

  return (
    <>
      <Nav />
      <div className="relative w-full h-[70vh] overflow-hidden font-fredoka">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${AboutUs})`, height: "100%" }}
        ></div>
        <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 p-4 sm:p-6 lg:p-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-yellow-300 font-bold mb-4 font-fredoka">
              About Giggleflix Studios
            </h2>
            <p className="text-lg sm:text-xl text-white font-fredoka">
              Giggleflix Studios is an animation studio based out of Mumbai,
              India. Founded out of passion and curiosity, our team aims to
              bring magic and joy to every little heart. We create songs and
              stories that educate, entertain, and elevate every dream.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#EA9A12] to-[#EC9F11] flex items-center justify-center w-full font-fredoka py-16 px-4">
        <div
          className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-8"
          data-aos="fade-up"
        >
          <div
            className="bg-no-repeat bg-cover bg-center w-full flex items-center justify-center"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="w-full flex flex-col gap-4 p-6 md:p-8 text-center lg:text-left">
              <h2 className="text-[#C9193B] text-4xl md:text-5xl font-bold">
                Our Vision & Mission
              </h2>
              <h3 className="text-2xl md:text-3xl mb-2 font-semibold">
                Learn, Giggle & Grow
              </h3>
              <p className="text-lg md:text-xl">
                We envision a world where children learn, laugh, and grow
                through our delightful stories and rhymes, fostering creativity
                and cultural understanding.
              </p>
              <h3 className="text-2xl md:text-3xl mb-2 font-semibold">
                Educate, Entertain & Inspire
              </h3>
              <p className="text-lg md:text-xl">
                Our mission is to inspire kids by creating fun, educational, and
                imaginative content, laying the foundation for a brighter
                future.
              </p>
            </div>
          </div>
          <div className="w-full p-6 md:p-8" data-aos="fade-left">
            <img src={newBG} alt="Background" className="max-w-full h-auto " />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#EC9F11] to-[#FDCF04] py-16 px-4 font-fredoka">
        <h1 className="text-center text-5xl font-bold text-[#C9193B] mb-12">
          Our Founders
        </h1>
        <Row gutter={[24, 24]} justify="center">
          {founders.map((founder, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={8}
              data-aos={
                index === 0
                  ? "fade-right"
                  : index === 1
                  ? "fade-up"
                  : "fade-left"
              }
              data-aos-delay={index * 300}
            >
              <Card
                hoverable
                cover={<img alt={founder.name} src={founder.image} />}
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                <Card.Meta
                  title={<p className="text-[#C9193B] font-xl">Co-founder</p>}
                  description={
                    <span className="text-black">{founder.role}</span>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div className="bg-gradient-to-r from-[#FDD004] via-[#EFAA0D] to-[#FDD004] py-16 px-4 font-fredoka">
        <h1 className="text-center text-5xl font-bold text-[#C9193B] mb-12">
          Our Management Team
        </h1>
        <Row gutter={[24, 24]} justify="center">
          {ManagementTeam.map((member, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={8}
              data-aos={
                index % 2 === 0
                  ? "fade-right"
                  : index % 3 === 0
                  ? "fade-up"
                  : "fade-left"
              }
              data-aos-delay={index * 200}
            >
              <Card
                hoverable
                cover={<img alt={member.name} src={member.image} />}
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                <Card.Meta
                  title={<p className="text-[#C9193B]">{member.role}</p>}
                  description={
                    <span className="text-black">{member.operation}</span>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div className="bg-gradient-to-r from-[#FDD004] via-[#EFAA0D] to-[#FDD004] py-16 px-4 font-fredoka">
        <h1 className="text-center text-5xl font-bold text-[#C9193B] mb-12">
          Collaborator & Network Partners
        </h1>
        <Row gutter={[24, 24]} justify="center">
          {Network.map((member, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={8}
              data-aos={
                index % 2 === 0
                  ? "fade-right"
                  : index % 3 === 0
                  ? "fade-up"
                  : "fade-left"
              }
              data-aos-delay={index * 300}
            >
              <Card
                hoverable
                cover={<img alt={member.name} src={member.image} />}
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                <Card.Meta
                  title={
                    <p className="text-[#C9193B]">
                      {member.role} ({member.country})
                    </p>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default About;
