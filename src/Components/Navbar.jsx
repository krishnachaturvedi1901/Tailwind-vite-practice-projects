import React from "react";
import { Outlet, useNavigate } from "react-router";
const Navbar = () => {
  const navigate = useNavigate();
  const classes =
    "px-3 border-1 border-gray-300 rounded-full p-1 hover:bg-white bg-gray-400 hover:text-slate-950 hover:cursor-pointer";
  return (
    <>
      <div className="h-14 flex justify-center items-center font-bold text-3xl min-[320px]:text-center max-[600px]:bg-sky-300 bg-yellow-600">
        Tailwind-css basic projects
      </div>
      <div className=" h-14 p-2 flex justify-around items-center border-1 bg-slate-800 text-slate-50">
        <h3 className={classes} onClick={() => navigate("/project1")}>
          P-1
        </h3>
        <h3 className={classes} onClick={() => navigate("/project2")}>
          P-2
        </h3>
        <h3 className={classes} onClick={() => navigate("/project3")}>
          P-3
        </h3>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
