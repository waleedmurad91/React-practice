import Sectionheading from "./Sectionheading";
import ServiceCard from "./ServiceCard";
import { Bot, Box, Brain, ChartArea, Globe, Smartphone } from "lucide-react";
import { useSelector } from "react-redux";

function Services() {
  const show = useSelector((state) => state.animator.value);
  const headingData = {
    caption: "Our Expertise",
    heading: "Permium Digital Services",
    description:
      " Discover our premium digital services designed to elevate your brand and drive growth in the digital landscape.",
  };
  const cardData = [
    {
      heading: "3D Product Visualization",
      desc: "Immersive 3D models and AR experiences that showcase your products in stunning detail.",
      buttonTitle: "Explore Services",
      iconColor: "text-cyan-500",
      icon: <Box className={`w-15 h-15 text-cyan-500`} />,
    },
    {
      heading: "AI Integration",
      desc: "Custom AI solutions that automate processes and deliver intelligent user experiences.",
      buttonTitle: "Explore Services",
      iconColor: "text-[#ff2d75]",
      icon: <Brain className={`w-15 h-15 text-[#ff2d75]`} />,
    },
    {
      heading: "Web3 Development",
      desc: "Blockchain-based solutions and decentralized applications for the new internet era",
      buttonTitle: "Explore Services",
      iconColor: "text-[#001aff]",
      icon: <Globe className={`w-15 h-15 text-[#001aff] `} />,
    },
    {
      heading: "Immersive Apps",
      desc: "Next-generation mobile experiences with AR, VR, and spatial computing capabilities.",
      buttonTitle: "Explore Services",
      iconColor: "text-cyan-500",
      icon: <Smartphone className={`w-15 h-15 text-cyan-500`} />,
    },
    {
      heading: "Data Visualization",
      desc: "Interactive dashboards and data stories that make complex information accessible.",
      buttonTitle: "Explore Services",
      iconColor: "text-[#ff2d75]",
      icon: <ChartArea className={`w-15 h-15 text-[#ff2d75]`} />,
    },
    {
      heading: "Automation Systems",
      desc: "Custom workflows and intelligent automation that streamline your operations.",
      buttonTitle: "Explore Services",
      iconColor: "text-[#001aff]",
      icon: <Bot className={`w-15 h-15 text-[#001aff] `} />,
    },
  ];
  return (
    <>
      <div className={` flex flex-col py-10   mx-auto`}>
        <div
          className={` ${show ? "transition-all duration-1500 translate-x-0 opacity-100 visible" : "-translate-x-full opacity-0 invisible"}`}
        >
          <Sectionheading
            caption={headingData.caption}
            heading={headingData.heading}
            description={headingData.description}
          />
        </div>
        <div
          className={` ${show ? "transition-all duration-1500 translate-y-0 visible opacity-100" : "translate-y-100 invisible opacity-0"} flex flex-wrap lg:gap-6 gap-2.5 w-full max-w-5xl`}
        >
          {cardData.map((card, index) => {
            return <ServiceCard card={card} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Services;
