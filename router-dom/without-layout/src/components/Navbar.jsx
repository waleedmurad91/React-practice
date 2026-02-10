import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul className="flex flex-row justify-center gap-5 my-10">
       
         <li className="border text-2xl rounded px-5 py-2 bg-slate-500"> <Link to={"/"}>Home</Link></li>
         <li className="border text-2xl rounded px-5 py-2 bg-slate-500"> <Link to={"/about"}>About</Link></li>
         <li className="border text-2xl rounded px-5 py-2 bg-slate-500"> <Link to={"/contact"}>Contact</Link></li>
         <li className="border text-2xl rounded px-5 py-2 bg-slate-500"> <Link to={"/user/abc"}>user</Link></li>
        
      </ul>
    </>
  );
}

export default Navbar;
