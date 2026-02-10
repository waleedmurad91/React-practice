import React, { useState } from "react";
import {
  ArrowLeft,
  Divide,
  Equal,
  Minus,
  Percent,
  Plus,
  X,
} from "lucide-react";
import Calculatorbtn from "./Calculatorbtn";
import Calculatorbtnnum from "./Calculatorbtnnum";
const Calculatorcard = () => {
  const [input, setInput] = useState("0");
 const [operatorclick, setOperatorclick] = useState(false);
  function numClicked(num) {
      setInput(input + `${num}`);
  }
  function operatorClicked(operator) {
    if(operatorclick == false){
    setInput(input + `${operator}`);
    }
    setOperatorclick(true);
  }
  function handleClear() {
    setInput(0);
    setOperatorclick(false);
  }
  function handleBack(){
    const data = input.slice(0 , -1 );
    setInput(data);

  }
  function handleEquals(){
    console.log('clicked');
    const removeFirstZero = (value) => {
    return value.replace(/^0+(?=\d)/, '');
    };

    const data = eval(removeFirstZero(input));
    setInput(data);
    setOperatorclick(false);
  }
  return (
    <div>
      <div className=" h-screen w-full bg-slate-800 flex justify-center items-center">
        <div className=" bg-black text-white rounded-m overflow-hidden rounded-3xl py-5">
          <div className="max-w-100 container p-2 flex gap-3 flex-col items-center justify-center">
            <div className="w-full flex justify-end bg-gray-500 rounded-2xl text-black">
              <input
                type="text"
                className=" p-2 w-max focus:outline-0 text-7xl font-bold text-right"
                value={input}
                readOnly
              />
            </div>
            <div className="flex flex-row flex-wrap justify-between gap-2">
              <Calculatorbtn value={ArrowLeft} color="bg-slate-600" onClick={handleBack}/>
              <Calculatorbtnnum
                value="AC"
                color="bg-slate-600"
                onClick={handleClear}
              />
              <Calculatorbtn value={Percent} color="bg-slate-600" />
              <Calculatorbtn
                value={Divide}
                onClick={() => {
                  operatorClicked("/");
                }}
              />
              <Calculatorbtnnum
                value={7}
                onClick={() => {
                  numClicked(7);
                }}
              />
              <Calculatorbtnnum
                value={8}
                onClick={() => {
                  numClicked(8);
                }}
              />
              <Calculatorbtnnum
                value={9}
                onClick={() => {
                  numClicked(9);
                }}
              />
              <Calculatorbtn
                value={X}
                onClick={() => {
                  operatorClicked("*");
                }}
              />
              <Calculatorbtnnum
                value={4}
                onClick={() => {
                  numClicked(4);
                }}
              />
              <Calculatorbtnnum
                value={5}
                onClick={() => {
                  numClicked(5);
                }}
              />
              <Calculatorbtnnum
                value={6}
                onClick={() => {
                  numClicked(6);
                }}
              />
              <Calculatorbtn
                value={Minus}
                onClick={() => {
                  operatorClicked("-");
                }}
              />
              <Calculatorbtnnum
                value={1}
                onClick={() => {
                  numClicked(1);
                }}
              />
              <Calculatorbtnnum
                value={2}
                onClick={() => {
                  numClicked(2);
                }}
              />
              <Calculatorbtnnum
                value={3}
                onClick={() => {
                  numClicked(3);
                }}
              />
              <Calculatorbtn
                value={Plus}
                onClick={() => {
                  operatorClicked("+");
                }}
              />
              <Calculatorbtnnum value="+/-" />
              <Calculatorbtnnum
                value={0}
                onClick={() => {
                  numClicked(0);
                }}
              />
              <Calculatorbtnnum value="." />
              <Calculatorbtn
                value={Equal}
                onClick={handleEquals}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculatorcard;
