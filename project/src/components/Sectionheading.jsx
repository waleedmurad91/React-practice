
function Sectionheading({ caption, heading, description }) {
 
  return (
    <>
      <div
        className={` text-center mb-20`}
      >
        <span className="text-cyan-500 font-bold uppercase tracking-widest">
          {caption}
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6">{heading}</h2>
        <p className="max-w-2xl mx-auto dark:text-gray-400 text-xl">
          {description}
        </p>
      </div>
    </>
  );
}

export default Sectionheading;
