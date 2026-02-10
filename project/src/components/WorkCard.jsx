import { MoveRight } from "lucide-react";
import { useSelector } from "react-redux";

function WorkCard({cardData}) {
const show = useSelector((state) => state.animator.value);
  return (
    <>
      <div className={`transition-opacity duration-5000 ease ${show ? "opacity-100":"opacity-0"} group relative rounded-3xl overflow-hidden h-96 lg:h-94 w-[calc(33.33%-32px)] `}>
        <div className="absolute inset-0 bg-linear-to-t from-black to-transparent z-10 opacity-90"></div>
        <img
          alt="NexaVerse Platform"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          src={cardData.imgUrl}
        />
        <div className="absolute bottom-0 left-0 p-10 z-20">
          <span className={`${cardData.iconColor} font-bold`}>{cardData.caption}</span>
          <h3 className="text-3xl font-bold mt-2 mb-4 text-white">{cardData.heading}</h3>
          <p className="text-gray-300 mb-6">
            {cardData.desc}
          </p>
          <a href="" className={`text-primary font-bold flex items-center group gap-2 ${cardData.iconColor}`}>
            <span>{cardData.btnText}</span>
           <MoveRight className={`${cardData.iconColor} w-4 h-4 font-extrabold`} />
          </a>
        </div>
      </div>
    </>
  );
}

export default WorkCard;
