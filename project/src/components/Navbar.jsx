import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { animate, reset } from "../animationSlice";

function Navbar() {
  const [dark, setDark] = useState(true);
  function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  }

  const show = useSelector((state) => state.animator.value);
  return (
    <div className="sticky top-0 z-20 ">
      <div className=" overflow-hidden pointer-events-none ">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-cyan-500 opacity-10 blur-3xl animate-bounce"></div>
        <div
          className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-[#ff2d75] opacity-10 blur-3xl animate-bounce"
          style={{animationDelay:"2s"}}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-500 opacity-10 blur-3xl animate-bounce"
          style={{animationDelay: '4s'}}
        ></div>
      </div>
      <div
        className={`transition-all duration-1500 
        ${show ? "opacity-100 translate-y-0 " : "opacity-0 -translate-y-full"} w-full max-w-350 px-6 py-4 mx-auto`}
      >
        <ul className="flex gap-2.5 justify-between items-center ">
          <li className="text-3xl font-bold text-blue-500">
            <h1 className="gradient-text">DIGIIO</h1>
          </li>
          <li>
            <ul className="flex gap-7 ">
              <li className="transition-transform hover:text-cyan-500 hover:-translate-y-2.5 duration-200 ease-in cursor-pointer">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `text-lg font-bold ${isActive ? "text-cyan-500" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="transition-transform hover:text-cyan-500 hover:-translate-y-2.5 duration-200 ease-in cursor-pointer">
                <NavLink
                  to={"/services"}
                  className={({ isActive }) =>
                    `text-lg font-bold ${isActive ? "text-cyan-500" : ""}`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li className="transition-transform hover:text-cyan-500 hover:-translate-y-2.5 duration-200 ease-in cursor-pointer">
                <NavLink
                  to={"/work"}
                  className={({ isActive }) =>
                    `text-lg font-bold ${isActive ? "text-cyan-500" : ""}`
                  }
                >
                  Work
                </NavLink>
              </li>
              <li className="transition-transform hover:text-cyan-500 hover:-translate-y-2.5 duration-200 ease-in cursor-pointer">
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    `text-lg font-bold ${isActive ? "text-cyan-500" : ""}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="transition-transform hover:text-cyan-500 hover:-translate-y-2.5 duration-200 ease-in cursor-pointer">
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    `text-lg font-bold ${isActive ? "text-cyan-500" : ""}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <button className="cursor-pointer" onClick={toggleDarkMode}>
              {dark ? <Sun /> : <Moon />}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
