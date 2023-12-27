import { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export const Header = ({ children }) => {
  const [open, setOpen] = useState(false);
  const Click = () => {
    setOpen(!open);
  };
  const routes = ["About", "Work", "Testioials", "Contact"];
  return (
    <div className="mx-auto mt-7 max-w-screen-xl">
      <div className=" px-20 py-4 flex justify-between items-center">
        <h2 className="text-[40px]">
          <strong>{"<SS />"}</strong>
        </h2>

        <div className="hidden md:flex  divide-x-2 gap-6">
          <div className="flex gap-6">
            {routes.map((route, index) => (
              <p key={index}>{route}</p>
            ))}
          </div>
          <div className=" flex gap-4 items-center">
            <IoSunnyOutline />
            <button className="rounded-xl bg-black text-white px-4 py-1.5">
              Download CV
            </button>
          </div>
        </div>
        <div className="block md:hidden text-4xl " onClick={Click}>
          {open ? <IoClose /> : <IoMenu />}
        </div>
      </div>
      <div className={`${open} md:${!open} `}>
        {open && (
          <div className="text-slate-500 mx-auto px-5 mt-10 mb-20 text-[30px]">
            
            <div className="flex-col flex scroll-py-[16px] gap-6 border-b-4 border-t-4 border-gray-200">
              {routes.map((route, index) => (
                <p key={index}>{route}</p>
              ))}
            </div>
            <br />
            <div className="  ">
              <div className="flex justify-between">
                <p>Switch Theme</p>

                <IoSunnyOutline className="text-black" />
              </div>
              <br />
              <button className=" rounded-xl bg-black text-white w-[700px] h-[70px]">
                Download CV
              </button>
            </div>
          </div>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};
