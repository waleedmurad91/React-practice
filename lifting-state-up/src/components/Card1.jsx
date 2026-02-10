import React from 'react';

const Card1 = ({count,setCount,setText}) => {
      function clicked(){
        setCount(count+1);
        setText('This change happened by Card1 component');
    }
  return (
    <>
       <button onClick={clicked}>Card1</button>
    </>
  );
}

export default Card1;
