import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm();
  const onSubmit = async(data) => {
    await new Promise((resolve)=>{setTimeout(resolve,2000)})
    console.log(data);
  };
  return (
    <div className="bg-slate-800 text-white w-full h-screen flex flex-col gap-2 items-center justify-center">
    {isSubmitting ? <p>Loading...</p>:''}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 items-center bg-slate-600 p-20 rounded-3xl">
        <input className="border px-3 py-2 text-lg rounded-xl focus:bg-transparent focus:outline-none"
          placeholder="Username"
          {...register("username", {
            required: {value:true, message: 'this field is required'},
            minLength: {
              value: 5,
              message: "Username must be 5 or more characters",
            },
          })}
        />
        {errors.username ? <p>{errors.username.message}</p> : ""}
        <input className="border px-3 py-2 text-lg rounded-xl focus:bg-transparent focus:outline-none" placeholder="Password" {...register("password")} />
        <input className="px-10 py-2 rounded-xl text-lg bg-blue-600 w-fit" type="submit" disabled={isSubmitting} />
      </form>
    </div>
  );
}

export default App;
