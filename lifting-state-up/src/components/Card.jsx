import React from 'react';

const Card = ({setCount,count,setText}) => {
    function clicked(){
        setCount(count+1);
        setText('This change happened by Card component');
    }
  return (
    <>
      <button onClick={clicked}>Card</button>
    </>
  );
}

export default Card;
