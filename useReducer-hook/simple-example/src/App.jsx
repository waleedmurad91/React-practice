import { useReducer } from "react";

function App() {
  const initialState = {
    count: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  }

  return (
    <div className="flex justify-center items-center h-screen  bg-slate-800">
      <div className="flex justify-center items-center bg-slate-700 p-20 rounded-2xl  text-white flex-col gap-3">
        <div className="text-5xl font-bold">Count is: {state.count}</div>
        <button
          className=" cursor-pointer py-2 px-5 bg-slate-500 text-xl font-bold rounded tracking-wider"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          className=" cursor-pointer py-2 px-5 bg-slate-500 text-xl font-bold rounded tracking-wider"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
        <button
          className="cursor-pointer py-2 px-5 bg-slate-500 text-xl font-bold rounded tracking-wider"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
