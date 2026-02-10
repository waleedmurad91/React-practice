import "./App.css";
import Login from "./components/login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UsercontextProvider";

function App() {
  return (
    <UserContextProvider>
      <Profile />
      <Login />
    </UserContextProvider>
  );
}

export default App;
