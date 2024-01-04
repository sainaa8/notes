import { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useTheme } from "next-themes";
import { CiCloudMoon } from "react-icons/ci";
import { motion, AnimatePresence } from "framer";

export const Header = ({ children }) => {
  const [onMenu, setOnMenu] = useState(false);
  const HandleClick = () => setOnMenu((prev) => !prev);
  const { theme, setTheme } = useTheme();
  console.log(theme);


  const routes = [
    { sectionID: "aboutMe", label: "About" },
    { sectionID: "work", label: "Work" },
    { sectionID: "testimonials", label: "Testimonials" },
    { sectionID: "contact", label: "Contact" },
  ];

  const scrollToSection = (element_id) => {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="mx-auto mt-7 max-w-screen-xl">
      <div className="sticky top-0 z-30 px-4 py-4 flex justify-between items-center  shadow-2xl rounded-lg ">
        <h2 className="text-[40px]">
          <strong>{"<SS />"}</strong>
        </h2>

        <div className="hidden md:flex  divide-x-2 gap-6">
          <div className="flex gap-6">
            {routes.map(({ label, sectionID }, index) => (
              <p
                style={{ cursor: "pointer" }}
                id={index}
                key={index}
                onClick={() => scrollToSection(sectionID)}
              >
                {label}
              </p>
            ))}
          </div>
          <div className="  w-[200px] flex justify-end gap-4 items-center">
            <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? (
                <IoSunnyOutline className="text-3xl font-extrabold hover:text-yellow-400 active:text-4xl cursor-pointer" />
              ) : (
                <CiCloudMoon className="text-3xl hover:text-blue-700 active:text-4xl cursor-pointer" />
              )}
            </div>

            <button className="rounded-xl bg-black dark:bg-white text-white dark:text-black px-4 py-1.5">
              Download CV
            </button>
          </div>
        </div>
        <div className="block md:hidden text-4xl " onClick={HandleClick}>
          {onMenu ? (
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.6 }}>
              <IoClose />
            </motion.div>
          ) : (
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.6 }}>
              <IoMenu />
            </motion.div>
          )}
        </div>
      </div>
      <div>
        <div className="fixed z-20 ">
          <AnimatePresence>
            {onMenu && (
              <motion.div
                initial={{ scale: 0, x: 0, rotate: 0 }}
                animate={{ scale: 1, transition: { duration: 1 } }}
                exit={{ scale: 0, transition: { duration: 1 } }}
              >
                <div className="block md:hidden text-black  pb-[20px] dark:text-white mx-auto px-5 mt-10 mb-20 text-[30px]  rounded-lg shadow-2xl ">
                  <div className="flex-col flex scroll-py-[16px] gap-6 border-b-4 border-t-4 border-gray-200">
                    {routes.map((route, index) => (
                      <div key={index}>{route}</div>
                    ))}
                  </div>
                  <br />
                  <div className="  ">
                    <div className="flex justify-between">
                      <div>Switch Theme</div>

                      <div
                        onClick={() =>
                          setTheme(theme === "dark" ? "light" : "dark")
                        }
                      >
                        {theme === "dark" ? (
                          <IoSunnyOutline className="text-3xl font-extrabold hover:text-yellow-400 active:text-4xl" />
                        ) : (
                          <CiCloudMoon className="text-3xl hover:text-blue-700 active:text-4xl" />
                        )}
                      </div>
                    </div>
                    <br />
                    <button className=" rounded-xl bg-black dark:bg-white text-white dark:text-black w-[700px] h-[70px]">
                      Download CV
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
