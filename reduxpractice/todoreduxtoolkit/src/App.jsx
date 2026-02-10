import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";
function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="rounded flex gap-4 flex-col">
          <AddTodo />
          <TodosList />
        </div>
      </div>
    </>
  );
}

export default App;
