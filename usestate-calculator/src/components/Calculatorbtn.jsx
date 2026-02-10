import React from "react";

const Calculatorbtn = (props) => {
  return (
    <>
      <div className="w-[calc(25%-12px)] flex justify-center items-center grow">
        <button
          className={ ` w-20 h-20 p-2 cursor-pointer rounded-full flex justify-center items-center ${props.color ? props.color: 'bg-orange-500'} `}
          onClick={props.onClick}
        >
          <props.value />
        </button>
      </div>
    </>
  );
};

export default Calculatorbtn;
