import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todoSlice";
import { Trash } from "lucide-react";
const TodosList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <>
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className="bg-gray-600 p-3 rounded flex justify-between items-center"
            >
              <span className="text-lg font-semibold capitalize">
                {todo.text}
              </span>
              <button
                className="bg-red-600 px-2 py-1 rounded cursor-pointer flex justify-center items-center"
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                <Trash className="w-[16px]" />
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodosList;
