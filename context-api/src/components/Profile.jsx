import { useContext } from "react";
import UserContext from "../context/Usercontext";
const Profile = () => {
  const { user } = useContext(UserContext);

  if (user === null || user === "") {
    return <div>Please Login</div>;
  } else {
    return <div>Welcome to our site {user}</div>;
  }
};

export default Profile;
