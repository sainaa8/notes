import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import { RiGithubLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FiFigma } from "react-icons/fi";

const First_header = () => {
  return (
    <div className="mx-auto flex flex-col-reverse md:flex-row items-center md:items-start max-w-screen-xl mt-12 ">
      <div className="px-20 py-4">
        <div>
          <strong className="text-7xl">Hi I'm Vegeta &#128075;</strong>
        </div>
        <br />
        <br />
        <div className="text-gray-400">
          <p>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) <br /> exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even <br /> though I have been creating web applications
            for over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div className="mt-10 text-gray-400">
          <div className="flex items-center gap-2">
            <IoLocationOutline />
            Ahmedabad, India
          </div>
          <div className="flex items-center gap-2">
            <GoDotFill className="text-green" />
            Available for new projects
          </div>
        </div>
        <div className="flex text-[40px] gap-4 mt-10 ">
          <RiGithubLine />
          <FiTwitter />
          <FiFigma />
        </div>
      </div>
      <div className="relative  z-10 ">
        <div className="w-64 md:w-72 h-72 md:h-80 bg-gray-300" />
        <div className="absolute -top-5 md:-top-10 left-1/2 md:-left-10 -translate-x-1/2 md:translate-x-0">
          <div className=" w-60 md:w-72 h-72 md:h-80">
            <Image
              fill
              src="/novi.jpeg"
              className="border-l-8 border-b-8 border-r-8 border-white"
            />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
export default First_header;
