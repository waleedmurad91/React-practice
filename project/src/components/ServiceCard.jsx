import { ArrowBigRight} from "lucide-react";

function ServiceCard({card}) {
  return (
    <>
      <div
        className="lg:w-[calc(33.33%-20px)] w-[calc(33.33%-10px)] border-2 border-gray-500 p-8 rounded-2xl service-card transition duration-500 hover:border-cyan-500 hover:border-opacity-30 hover:translate-y-2 cursor-pointer"
      >
        <div className={ `text-5xl mb-6`}>
            {card.icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{card.heading}</h3>
        <p className="text-gray-400 mb-6">
          {card.desc}
        </p>
        <a href="#" className="text-primary font-bold flex items-center group gap-2 ">
          {card.buttonTitle}
          <ArrowBigRight className={`w-6 h-6 ${card.iconColor}`} />
        </a>
      </div>
    </>
  );
}

export default ServiceCard;
