import { GoDotFill } from "react-icons/go";
import { motion } from "framer";

import Image from "next/image";
const Upwork = (props) => {
  const { header, date, text = [] } = props;
  return (
    <motion.div
      className="flex bg-white px-[20px] md:px-[10px] dark:bg-gray-500 rounded-lg shadow-2xl justify-center pb-24 pt-16 "
      whileHover={{ scale: 1.1 }}
    >
      <div className="flex  gap-[5px] md:gap-[90px] flex-col md:flex-row">
        <div>
          <Image src="/logo.svg" width={102} height={28} />
        </div>
        <div className=" text-xl">
          <h1>
            <strong>{header}</strong>
          </h1>
          <br />
          <div className="flex flex-col-reverse md:flex-row  gap-[80px]  text-gray-600 dark:text-white">
            <ul className="list-disc list-outside ml-[19px]  dark:text-[#D1D5DB]">
              {text.map((com, i) => {
                return (
                  <li key={i} className="mb-[10px]">
                    {com}
                  </li>
                );
              })}
            </ul>
            <div className="mt-[-1px] md:mt-[-50px]">
              <div> {date}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export const FourtPage = () => {
  return (
    <div className=" mx-auto   px-[4px] md:px-20 pt-[4px] md:pt-16 pb-16 bg-slate-50 dark:bg-gray-700">
      <div className="flex flex-col gap-4 mt-20  items-center ">
        <div className="w-[115px] h-[28px] bg-slate-300 dark:bg-gray-500 rounded-lg flex justify-center">
          <p>Experience</p>
        </div>
        <div className="w-[346px] md:w-[576px] flex justify-center items-center">
          <p className="flex justify-center items-center">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
      </div>
      <div className="mt-[30px] flex flex-col gap-[48px]">
        <Upwork
          header={"Sr. Frontend Developer"}
          date={"Nov 2021 - Present"}
          text={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Ut pretium arcu et massa semper, id fringilla leo semper.",
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ]}
        />
        <Upwork
          header={"Team Lead"}
          date={"Jul 2017 - Oct 2021"}
          text={[
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ]}
        />
        <Upwork
          header={"Full Stack Developer"}
          date={"Dec 2015 - May 2017"}
          text={[
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit   consectetur adipiscing.`,
            "fuck off",
          ]}
        />
      </div>
    </div>
  );
};
