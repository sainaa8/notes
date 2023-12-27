import { GoDotFill } from "react-icons/go";

import Image from "next/image";
const Upwork = (props) => {
  const { header, date } = props;
  return (
    <div className="flex bg-white rounded-lg shadow-2xl justify-center pb-24 pt-16">
      <div className="flex  gap-[90px] flex-col md:flex-row">
        <div>
          <Image src="/up.png" width={102} height={28} />
        </div>
        <div className="w-[384px] h-[224px] text-xl">
          <h1>
            <strong>{header}</strong>
          </h1>
          <br />
          <div className="flex flex-col gap-2 text-gray-600">
            <p className="flex">
              <GoDotFill />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className="flex">
              <GoDotFill />
              Ut pretium arcu et massa semper, id fringilla leo semper.
            </p>
            <p className="flex">
              <GoDotFill />
              Sed quis justo ac magna.
            </p>
            <p className="flex">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
export const FourtPage = () => {
  return (
    <div className=" mx-auto   px-20 pt-16 pb-16 bg-slate-50">
      <div className="flex flex-col gap-4 mt-20  items-center ">
        <div className="w-[115px] h-[28px] bg-slate-300  rounded-lg flex justify-center">
          <p>Experience</p>
        </div>
        <div className="w-[346px] md:w-[576px] flex justify-center items-center">
          <p className="flex justify-center items-center">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
      </div>
      <div className="mt-[30px] flex flex-col gap-[48px]">
        <Upwork header={"Sr. Frontend Developer"} date={"Nov 2021 - Present"} />
        <Upwork header={"Team Lead"} date={"Jul 2017 - Oct 2021"} />
        <Upwork header={"Full Stack Developer"} date={"Dec 2015 - May 2017"} />
      </div>
    </div>
  );
};
