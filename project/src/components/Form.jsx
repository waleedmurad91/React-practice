import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    console.log(data);
    reset();
    alert("Message sent!");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}
         className="dark:bg-[#ffffff0d] border dark:border-[#ffffff0d] bg-[#00000008] border-[#00000008] p-10 rounded-2xl"
      >
        <div
           className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
        >
          <div>
            <label
              htmlFor="name"
               className="block dark:text-gray-300 text-gray-500 font-medium mb-2"
            >
              Your Name
            </label>
            <input
              id="name"
               className="w-full  dark:bg-black border border-gray-700 px-5 py-3 rounded-lg focus:outline-none placeholder:text-sm"
              placeholder="Enter your name"
              type="text"
              {...register("name")}
            />
          </div>
          <div>
            <label
              htmlFor="email"
               className="block dark:text-gray-300 text-gray-500 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
               className="w-full  dark:bg-black border border-gray-700 px-5 py-3 rounded-lg focus:outline-none placeholder:text-sm"
              placeholder="Enter your email"
              type="email"
              {...register("email")}
            />
          </div>
        </div>
        <div  className="mb-6"  >
          <label
            htmlFor="service"
             className="block font-medium dark:text-gray-300 text-gray-500 mb-2"
          >
            Service Interested In
          </label>
          <select
            id="service"
             className="w-full  dark:bg-black border border-gray-700 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
            {...register("service")}
          >
            <option value="">Select a Service</option>
            <option value="3d">3D Visualization</option>
            <option value="ai">AI Integration</option>
            <option value="web3">Web3 Development</option>
            <option value="apps">Immersive Apps</option>
            <option value="data">Data Visualization System</option>
          </select>
        </div>
        <div  className="mb-6"  >
          <label
            htmlFor="message"
             className="block dark:text-gray-300 text-gray-500 font-medium mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows="5"
             className="w-full  dark:bg-black border border-gray-700 px-5 py-3
                rounded-lg focus:outline-none focus:ring-2 focus:ring-primary
                focus:border-transparent placeholder:text-sm"
            placeholder="Tell us about your project.."
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <button
          type="submit"
           className="w-full bg-cyan-500 text-black py-4 px-6 rounded-lg font-bold hover:bg-opacity-80  cursor-pointer mt-4"
        >
          Send Message
        </button>
      </form>
    </>
  );
}

export default Form;
