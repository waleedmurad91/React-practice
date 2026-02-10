import { Trophy } from "lucide-react";
import hero from "../assets/hero.jpg";
import Button from "./Button";
import { useSelector } from "react-redux";

function Home() {
  const show = useSelector((state) => state.animator.value);
  return (
    <>
      <div
        className={` container mx-auto flex flex-col gap-5 justify-center items-center `}
      >
        <div
          className={`${show ? "pt-10 transition-all duration-2000 ease-out opacity-100 translate-x-0 " : "opacity-0 -translate-x-full"}`}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-center">
            <span className="text-stroke">WE BUILD</span>
            <br />
            <span className="gradient-text">DIGITAL FUTURE</span>
          </h1>
        </div>
        <div
          className={` ${show ? "transition-all duration-2000 ease-out opacity-100 translate-y-0 " : "opacity-0 translate-y-full"}`}
        >
          <p className="text-lg dark:text-gray-300 md:text-xl text-muted mb-10 max-w-3xl mx-auto items-center text-center">
            We are a cutting-edge digital agency dedicated to crafting
            innovative solutions that propel businesses into the future.
          </p>
        </div>
        <div
          className={`${show ? "transition-all duration-2000 ease-out opacity-100 translate-y-0 " : "opacity-0 translate-y-full"} flex gap-10 justify-center items-center mb-16 `}
        >
          <Button
            classes={"bg-cyan-400 text-black"}
            text={"Start your Project"}
          />
          <Button
            classes={"bg-transparent border border-2 text-cyan-400"}
            text={"View Our Work"}
          />
        </div>
        <div
          className={`${show ? "transition-all duration-2000 ease-out opacity-100 translate-y-0 visible" : "opacity-0 translate-y-full invisible"} hero-image relative w-full max-w-4xl`}
        >
          <img className="rounded-2xl shadow-2xl w-full" src={hero} alt="" />
          <div className="absolute -bottom-6 -right-6 bg-slate-900  p-6 rounded-2xl shadow-xl border border-gray-800 w-3/4">
            <div className="flex items-center">
              <div className="bg-cyan-800 bg-opacity-20 p-3 rounded-lg mr-4">
                <Trophy className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Award Winning</h3>
                <p className="text-gray-400">
                  Recognized for excellence in digital innovation and
                  creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 relative z-10">
          <div className="container max-auto px-6">
            <p className="text-center text-gray-400 uppercase tracking-widest text-sm mb-10">
              Trusted by innovative companies worldwide:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              <div className="text-gray-400 h-8 text-xl font-bold">NVIDA</div>
              <div className="text-gray-400 h-8 text-xl font-bold">ADIDS</div>
              <div className="text-gray-400 h-8 text-xl font-bold">TESLA</div>
              <div className="text-gray-400 h-8 text-xl font-bold">GOOGLE</div>
              <div className="text-gray-400 h-8 text-xl font-bold">
                MICROSOFT
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
