import Sectionheading from "./Sectionheading";
import TestimonialCard from "./TestimonialCard";
import Button from "./Button";
import { useSelector } from "react-redux";

function About() {
  const show = useSelector((state) => state.animator.value);

  const testimonails = [
    {
      name: "Sarah Chen",
      designation: "CTO, TechNova",
      review:
        "Nexa's 3D visualization platform transformed our product presentations. The level of detail and interactivity exceeded all expectations.",
      starsCount: 5,
      imgUrl: "https://agency-eta-sage.vercel.app/assets/profile1-buknRkes.jpg",
    },
    {
      name: "Michael Rodriguez",
      designation: "CEO, NeuroLink",
      review:
        "The AI integration Nexa developed for our platform resulted in a 40% increase in user engagement. Their technical expertise is unmatched.",
      starsCount: 4,
      imgUrl: "https://agency-eta-sage.vercel.app/assets/profile2-D9T6oIRs.png",
    },
    {
      name: "Emma Zhang",
      designation: "Director, FutureLabs",
      review:
        "Working with Nexa on our Web3 project was a game-changer. They delivered complex blockchain solutions with remarkable clarity.",
      starsCount: 5,
      imgUrl: "https://agency-eta-sage.vercel.app/assets/profile3-mq0NX2IY.jpg",
    },
  ];
  return (
    <>
      <div
        className={` ${show ? "transition-all duration-1500 traslate-y-0" : "-translate-y-full"}`}
      >
        <Sectionheading
          caption={"Client Testimonials"}
          heading={"Trusted by Visionaries"}
        />
      </div>
      <div
        className={`max-w-5xl flex gap-5 mx-auto ${show ? "transition-all duration-1500 traslate-y-0 opacity-100 visible" : "opacity-0 invisible translate-y-full"}`}
      >
        {testimonails.map((testimonial, index) => (
          <TestimonialCard key={index}
            name={testimonial.name}
            designation={testimonial.designation}
            review={testimonial.review}
            starsCount={testimonial.starsCount}
            imgUrl={testimonial.imgUrl}
          />
        ))}
      </div>
      <div
        className={`max-w-5xl flex justify-center mx-auto py-20 ${show ? "transition-all duration-1500 traslate-x-0 opacity-100 visible" : "opacity-0 invisible translate-x-full"}`}
      >
        <div className="dark:bg-[#ffffff0d] border dark:border-[#ffffff0d] bg-[#00000008] border-[#00000008]  mx-auto rounded-3xl p-16 flex flex-col items-center justify-center">
          <span className="text-cyan-500 font-bold uppercase tracking-widest">
            Ready to Begin?
          </span>
          <h2 className="text-center text-4xl md:text-5xl font-extrabold mt-4 mb-6 max-w-3xl mx-auto">
            Let's Build Something Extraordinary Together
          </h2>
          <p
            className="text-center text-xl dark:text-gray-300 text-gray-500
           mb-10 max-w-2xl mx-auto"
          >
            Schedule a consultation with our team to discuss your project vision
            and requirements.
          </p>
          <Button
            classes={"bg-cyan-400 text-black"}
            text={"Get in Touch"}
          />
        </div>
      </div>
    </>
  );
}

export default About;
