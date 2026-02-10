import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-slate-900 py-4 text-white">
      <ul className="flex flex-row gap-5  justify-center">
        <li className="text-2xl border px-5 py-2 rounded bg-slate-700">
          {" "}
          <Link to={"/"}>Home</Link>
        </li>
        <li className="text-2xl border px-5 py-2 rounded bg-slate-700">
          {" "}
          <Link to={"/about"}>About</Link>
        </li>
        <li className="text-2xl border px-5 py-2 rounded bg-slate-700">
          {" "}
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
