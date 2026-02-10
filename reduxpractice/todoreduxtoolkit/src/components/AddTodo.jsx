import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };
  return (
    <>
      <div className="bg-slate-600  p-3 rounded flex gap-2">
        <input
          className="bg-slate-200 text-black px-3 py-1 w-100 text-lg rounded focus:outline-none"
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Enter the todo"
          required
        />
        <button
          className="bg-blue-700 px-3 py-2 rounded cursor-pointer"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default AddTodo;
