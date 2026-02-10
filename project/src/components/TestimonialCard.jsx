import { Star } from "lucide-react";

function TestimonialCard({review,name,designation,starsCount,imgUrl}) {
    const stars = Array(starsCount).fill(null);
  return (
    <>
      <div className="w-[calc(33.3%-10px)] p-8 rounded-2xl hover:scale border dark:bg-[#ffffff0d] dark:border-[#ffffff0d] bg-[#00000008] border-[#00000008] ">
        <div className="flex items-center mb-6">
          <img
            className="w-14 h-14 rounded-full mr-4 object-cover"
            alt="Sarah Chen"
            src={imgUrl}
          />
          <div>
            <h4 className="font-bold text-lg">{name}</h4>
            <p className="text-gray-400 text-sm">{designation}</p>
          </div>
        </div>
        <p className="text-sm tracking-wider mb-6">
          {review}
        </p>
        <div className="flex">
            {stars.map((star,index)=>(
                <Star key={index} className="text-yellow-500" />
        ))}
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;
