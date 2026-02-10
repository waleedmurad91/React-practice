import { Mail, MapPin, Phone } from "lucide-react";
import Form from "./Form";
import { useSelector } from "react-redux";

function Contact() {
  const show = useSelector((state) => state.animator.value);
  return (
    <div
      className={`${show ? "transition-all duration-3000 opacity-100 visible" : " opacity-0 invisible"} lg:max-w-5xl mx-auto w-full max-w-full  mb-20 rounded-2xl lg:flex`}
    >
      <div className="lg:w-1/2 md:16 lg:mb-0 lg:pr-12 pl-5 py-10">
        <span className="text-cyan-500 font-bold uppercase tracking-widest text-sm">
          Contact Us
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6">
          Get In Touch
        </h2>
        <p className="text-base dark:text-gray-300 text-gray-500 mb-10">
          Have a project in mind or want to learn more about our Service? Reach
          out to our team.
        </p>
        <div className="space-y-8">
          <div className="flex items-center">
            <div className="bg-cyan-800 bg-opacity  p-4 rounded-xl mr-6">
              <MapPin className="text-white" />
            </div>
            <div>
              <h4 className="font-blod text-xl mb-2">Our Headquarter</h4>
              <p className="dark:text-gray-400 text-gray-500">
                Innovation District, 250 new delhi
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-cyan-800 bg-opacity  p-4 rounded-xl mr-6">
              <Mail className="text-white" />
            </div>
            <div>
              <h4 className="font-blod text-xl mb-2">Email Us</h4>
              <p className="dark:text-gray-400 text-gray-500">
                contact@digiio.com support@digiio.com
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-cyan-800 bg-opacity  p-4 rounded-xl mr-6">
              <Phone className="text-white" />
            </div>
            <div>
              <h4 className="font-blod text-xl mb-2">Call Us</h4>
              <p className="dark:text-gray-400 text-gray-500">
                +92 123-789-01239am-6pm PST
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <Form />
      </div>
    </div>
  );
}

export default Contact;
