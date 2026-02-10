import { useContext } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../context/Usercontext";
const Login = () => {
  const { setUser } = useContext(UserContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setUser(data.username);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Username" {...register("username")} />
        <br />
        <input type="submit" />
      </form>
      {/* <input type="text" onChange={(e)=>{setUser(e.target.value)}} /> */}
    </div>
  );
};

export default Login;
