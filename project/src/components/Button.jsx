import React from "react";

function Button({ classes, text, onClick,icon }) {
  return (
    <>
      <button
        onClick={onClick}
        className={`${classes} text-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-80 transition-all hover:scale-105 duration-300 cursor-pointer`}
      >
        {text} {icon}
      </button>
    </>
  );
}

export default Button;
