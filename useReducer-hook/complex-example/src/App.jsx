import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload.value };
    case "email":
      return { ...state, email: action.payload.value };
    case "password":
      return { ...state, password: action.payload.value };
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e) {
    switch (e.target.name) {
      case "name":
        return dispatch({
          type: "name",
          payload: { value: e.target.value },
        });
      case "email":
        return dispatch({
          type: "email",
          payload: { value: e.target.value },
        });
      case "password":
        return dispatch({
          type: "password",
          payload: { value: e.target.value },
        });
    }
  }
  return (
    <div className="bg-slate-900 h-screen flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center gap-2 bg-gray-700 p-10 rounded-2xl">
        <input
          className="bg-gray-300 text-black p-2 rounded-md text-xl focus:outline-none"
          type="text"
          placeholder="Name"
          name="name"
          value={state.name}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          className="bg-gray-300 text-black p-2 rounded-md text-xl focus:outline-none"
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          className="bg-gray-300 text-black p-2 rounded-md text-xl focus:outline-none"
          type="password"
          placeholder="Password"
          name="password"
          value={state.password}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button
          className=" text-white font-bold bg-green-500 px-4 py-2 rounded text-lg "
          onClick={() => {
            console.log({ state });
          }}
        >
          Submit
        </button>
      </div>
     
    </div>
  );
}

export default App;
