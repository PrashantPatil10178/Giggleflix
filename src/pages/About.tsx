import { useEffect } from "react";
import Nav from "../components/Nav";
import AboutUs from "../assets/AboutUs.jpg";
import newBG from "../assets/mainDivBg.png";
import AOS from "aos";

// founders
import rohan from "../assets/About-Us/rohan.jpg";
import Jitendra from "../assets/About-Us/Jitendra.jpg";
import Sanjiv from "../assets/About-Us/Sanjiv.jpg";

// Management Team
import Anuruddh from "../assets/About-Us/Anuruddh.jpg";
import Kshity from "../assets/About-Us/ks.png";
import Tanay from "../assets/About-Us/Tanay.png";
import Anyokti from "../assets/About-Us/Anyoki.png";
import Shubham from "../assets/About-Us/Shubham.png";
import Pankaj from "../assets/About-Us/Pankaj.jpg";

//networks
import Amaldo from "../assets/About-Us/Amaldo.png";
import David from "../assets/About-Us/David.png";
import Amid from "../assets/About-Us/Avid.png";

import { Card, Col, Row } from "antd";
import "aos/dist/aos.css";
import "antd/dist/reset.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true, // Ensure animations only happen once as you scroll
    });
  }, []);

  const founders = [
    {
      name: "Rohan",
      role: "Chief Creative Officer",
      image: rohan,
    },
    {
      name: "Jitendra",
      role: "Chief Operating Officer",
      image: Jitendra,
    },
    {
      name: "Sanjiv",
      role: "Chief of Business Development",
      image: Sanjiv,
    },
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
      operation: "Netherlands",
      image: Amid,
    },
  ];

  return (
    <>
      <Nav />
      <div className="relative w-full h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${AboutUs})`,
            height: "100vh",
          }}
        ></div>
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundSize: "50%", // Adjust the size as needed
            backgroundPosition: "bottom left", // Adjust the position as needed
            marginBottom: "20px",
          }}
        >
          <div className="absolute bottom-0 left-0 flex items-start p-4">
            <div className="text-white max-w-4xl bg-black bg-opacity-50 rounded-md p-6">
              <h2 className="text-6xl  text-yellow-300 font-fredoka font-bold mb-2">
                About Giggleflix Studios
              </h2>
              <p className="font-fredoka text-xl">
                Giggleflix Studios is an animation studio based out of Mumbai,
                India. Founded out of passion and curiosity, our team aims to
                bring magic and joy to every little heart. We aim to create
                songs and stories that educate, entertain, and elevate every
                dream.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#EA9A12] to-[#EC9F11] flex items-center justify-center w-full font-fredoka py-16 px-4">
        <div
          className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-start gap-8 w-full lg:w-1/2 text-center lg:text-left p-8">
            <h2 className="text-[#C9193B] text-5xl font-bold">
              Our Vision & Mission
            </h2>
            <div>
              <h2 className="text-5xl mb-2 font-semibold">
                Learn, Giggle & Grow
              </h2>
              <p>
                We envision a world where children learn, laugh, and grow by
                immersing themselves in our delightful stories and rhymes. We
                aim to foster curiosity, creativity, and cultural understanding
                among kids worldwide. 🌟
              </p>
            </div>
            <div>
              <h2 className="text-5xl mb-2 font-semibold">
                Educate, Entertain & Inspire
              </h2>
              <p>
                Our mission is to entertain, educate, and inspire children. We
                achieve this by creating original content that combines fun,
                learning, and imagination. Through our animated characters,
                catchy songs, and engaging stories, we lay the foundation for a
                brighter future.
              </p>
            </div>
          </div>
          <div
            className="w-full lg:w-1/2 flex justify-center p-8"
            data-aos="fade-left"
          >
            <img src={newBG} alt="Background" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#EC9F11] to-[#FDCF04] py-16 px-4">
        <h1 className="text-center text-5xl font-fredoka font-bold text-[#C9193B] mb-12">
          Our Founders
        </h1>
        <Row gutter={[24, 24]} justify="center">
          {founders.map((founder, index) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              key={index}
              data-aos={
                index === 0
                  ? "fade-right"
                  : index === 1
                  ? "fade-up"
                  : "fade-left"
              }
              data-aos-delay={index * 300} // Delay for each card
            >
              <Card
                hoverable
                cover={<img alt={founder.name} src={founder.image} />}
                style={{
                  textAlign: "center",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
                bodyStyle={{ padding: "16px" }}
              >
                <Card.Meta
                  title={<p className="text-[#C9193B]">Co-founder</p>}
                  description={
                    <span className="text-[black]">{founder.role}</span>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="bg-gradient-to-r from-[#FDD004] via-[#EFAA0D] to-[#FDD004] py-16 px-4">
        <h1 className="text-center text-4xl font-fredoka font-bold text-[#C9193B] mb-12">
          Our Management Team
        </h1>
        <Row gutter={[24, 24]} justify="center">
          {ManagementTeam.map((member, index) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              key={index}
              data-aos={
                index % 2 === 0
                  ? "fade-right"
                  : index % 3 === 0
                  ? "fade-up"
                  : "fade-left"
              }
              data-aos-delay={index * 200} // Stagger animations more
            >
              <Card
                hoverable
                cover={<img alt={member.name} src={member.image} />}
                style={{
                  textAlign: "center",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
                bodyStyle={{ padding: "16px" }}
              >
                <Card.Meta
                  title={<p className="text-[#C9193B]">{member.role}</p>}
                  description={
                    <span className="text-[black]">{member.operation}</span>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="bg-gradient-to-r from-[#FDD004] via-[#EFAA0D] to-[#FDD004] py-16 px-4">
        <h1 className="text-center text-4xl font-fredoka font-bold text-[#C9193B] mb-12">
          Collaborator & Network Partners
        </h1>
        <Row gutter={[24, 24]} justify="center">
          {Network.map((member, index) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              key={index}
              data-aos={
                index % 2 === 0
                  ? "fade-right"
                  : index % 3 === 0
                  ? "fade-up"
                  : "fade-left"
              }
              data-aos-delay={index * 200} // Stagger animations more
            >
              <Card
                hoverable
                cover={<img alt={member.name} src={member.image} />}
                style={{
                  textAlign: "center",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
                bodyStyle={{ padding: "16px" }}
              >
                <Card.Meta
                  title={<p className="text-[#C9193B]">{member.role}</p>}
                  description={
                    <span className="text-[black]">{member.operation}</span>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default About;
