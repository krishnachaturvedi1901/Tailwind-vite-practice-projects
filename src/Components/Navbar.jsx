import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
const Navbar = () => {
  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate();
  const updateVisibility = () => {
    setVisibility(!visibility);
  };
  useEffect(() => {
    if (!visibility) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [visibility]);

  useEffect(() => {
    const mediaQList=window.matchMedia('(prefers-color-scheme: dark)')
    if(mediaQList.matches){
      document.body.classList.add("dark");
    }
  },[])
  
  const classes =
    "px-3 border-1 border-gray-300 rounded-full p-1 hover:bg-white bg-gray-400 hover:text-slate-950 hover:cursor-pointer";
  return (
    <>
      <div className="h-14 flex justify-center items-center font-bold text-3xl min-[320px]:text-center max-[600px]:bg-sky-300 bg-yellow-600 dark:text-slate-100 dark:bg-slate-700 " >
        Tailwind-css basic projects
      </div>
      <div className=" h-14 p-2 flex justify-around relative items-center border-1 bg-slate-800 text-slate-50">
        <h3 className={classes} onClick={() => navigate("/project1")}>
          P-1
        </h3>
        <h3 className={classes} onClick={() => navigate("/project2")}>
          P-2
        </h3>
        <h3 className={classes} onClick={() => navigate("/project3")}>
          P-3
        </h3>
        <div
          onClick={() => updateVisibility()}
          className="border-l border-red-100 py-1  px-2 absolute right-3 cursor-pointer "
        >
          {visibility ? <BsFillSunFill size={30} /> : <MdDarkMode size={30} />}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
