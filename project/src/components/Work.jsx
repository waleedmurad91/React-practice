import { useSelector } from "react-redux";
import Sectionheading from "./Sectionheading";
import WorkCard from "./WorkCard";
import Button from "./Button";
import { MoveRight } from "lucide-react";
import Stats from "./Stats";

function Work() {
  const show = useSelector((state) => state.animator.value);
  const headingData = {
    caption: "Our Portfolio",
    heading: "Selected Case Studies",
    description:
      "Explore our award-winning projects that push the bounderies of digital innovation.",
  };

  const cardData = [
    {
      imgUrl:
        "https://agency-eta-sage.vercel.app/assets/projectImg1-DZXYjXeE.avif",
      caption: "Metaverse Experience",
      heading: "NexaVerse Platform",
      desc: "A groundbreaking metaverse platform for virtual commerce and social interaction.",
      btnText: "View Case Study",
      iconColor: "text-cyan-500",
    },
    {
      imgUrl:
        "https://agency-eta-sage.vercel.app/assets/projectImg2-C51uJfvI.avif",
      caption: "AI Solution",
      heading: "NeuroLink Analytics",
      desc: "Predictive analytics platform powered by neural networks and machine learning.",
      btnText: "View Case Study",
      iconColor: "text-[#ff2d75]",
    },
    {
      imgUrl:
        "https://agency-eta-sage.vercel.app/assets/projectImg3-Da2XA7yR.avif",
      caption: "AR Experience",
      heading: "AR Commerce Hub",
      desc: "Augmented reality shopping experiences that drive engagement and conversions.",
      btnText: "View Case Study",
      iconColor: "text-[#001aff]",
    },
    {
      imgUrl:
        "https://agency-eta-sage.vercel.app/assets/projectImg4-B6MENMNI.avif",
      caption: "Data Visualization",
      heading: "SmartCity Dashboard",
      desc: "Interactive dashboards visualizing real-time smart city metrics and analytics.",
      btnText: "View Case Study",
      iconColor: "text-[#00f0ff]",
    },
    {
      imgUrl:
        "https://agency-eta-sage.vercel.app/assets/projectImg5-BrqXdRlu.avif",
      caption: "Web3 Solution",
      heading: "Virtual Event Platform",
      desc: "A decentralized platform for hosting and managing virtual events globally.",
      btnText: "View Case Study",
      iconColor: "text-[#ff2d75]",
    },
    {
      imgUrl:
        "https://agency-eta-sage.vercel.app/assets/projectImg6-C2VeTYg6.avif",
      caption: "AI Tool",
      heading: "AI Design Assistant",
      desc: "An intelligent assistant that helps designers generate creative concepts instantly.",
      btnText: "View Case Study",
      iconColor: "text-[#001aff]",
    },
  ];

  return (
    <div className="pb-10">
      <div
        className={` ${show ? "transition-all duration-1500 translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        <Sectionheading
          caption={headingData.caption}
          heading={headingData.heading}
          description={headingData.description}
        />
      </div>
      <div
        className={`flex max-w-5xl flex-wrap mx-auto gap-8 ${show ? "transition-all duration-1500 visible translate-y-0 opacity-100" : "translate-y-full opacity-0 invisible"}`}
      >
        {cardData.map((card, index) => {
          return <WorkCard cardData={card} key={index} />;
        })}
      </div>
      <div className={`w-full my-10 flex justify-center`}>
        <Button
          classes={
            " flex items-center gap-2 bg-transparent border border-2 text-cyan-400"
          }
          text={"View Our Work"}
          icon={<MoveRight />}
        />
      </div>
      <div className="">
        <Stats />
      </div>
    </div>
  );
}

export default Work;
