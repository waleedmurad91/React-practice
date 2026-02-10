import { Globe, Instagram, Linkedin, Twitter, X } from "lucide-react";
import { useSelector } from "react-redux";

function Footer() {
  const show =useSelector(state=> state.animator.value);
  return (
    <div>
      <div className={`${show ? "transition-all duration-1500 translate-y-0 opacity-100" : "translate-y-full opacity-0"} dark:bg-black bg-slate-200   bg-opacity-50`}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:cal-span-2">
              <a className="text-3xl font-extrabold mb-6 inline-block gradient-text mt-5">
                DIgIIO
              </a>
              <p className="dark:text-gray-400 mb-6">
                Pushing the boundaries of digital Innovation to create
                transformative experiences.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="dark:text-gray-400 hover:text-cyan-500 transition"
                >
                    <Twitter/>
                </a>
                <a
                  href="#"
                  className="dark:text-gray-400 hover:text-cyan-500 transition"
                >
                  <Linkedin/>
                </a>
                <a
                  href="#"
                  className="dark:text-gray-400 hover:text-cyan-500 transition"
                >
                  <Globe/>
                </a>
                <a
                  href="#"
                  className="dark:text-gray-400 hover:text-cyan-500 transition"
                >
                  <Instagram/>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6 mt-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="dark:text-gray-400 hover:text-cyan-500 transition"
                  >
                    3D Visualization
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dark:text-gray-400 hover:text-cyan-500 transition"
                  >
                    AI integration
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dark:text-gray-400 hover:text-cyan-500 transition"
                  >
                    Web3 Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dark:text-gray-400 hover:text-cyan-500 transition"
                  >
                    Immersive Apps
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6 mt-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="dark:text-gray-400 hover:text-cyan-500 transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dark:text-gray-400 hover:text-cyan-500 transition"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dark:text-gray-400 hover:text-cyan-500 transition"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dark:text-gray-400 hover:text-cyan-500 transition"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6 mt-6">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="dark:text-gray-400 hover:text-cyan-500 hover:underline transition"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dark:text-gray-400 hover:text-cyan-500 transition"
                  >
                    Terms of Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dark:text-gray-400 hover:text-cyan-500 transition"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dark:text-gray-400 hover:text-cyan-500 transition"
                  >
                    GDPR
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center pb-5">
            <p className="text-gray-500 mb-4 md:mb-0">
              @ 2026 Digiio Digital.All rights reserved.
            </p>
            <div>
              <a
                href="#"
                className="text-gray-500 hover:text-cyan-500 hover:underline transition text-sm mr-6"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-cyan-500 hover:underline text-sm mr-6"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
