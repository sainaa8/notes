import Image from "next/image";
import React from "react";
import { PiUploadSimpleBold } from "react-icons/pi";
import { motion } from "framer";

const mockData = [
  {
    projectImage: "/ss.png",
    title: "Fiskil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. ",
    stacks: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    projectImage: "/ss.png",
    title: "Fiskil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. ",
    stacks: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    projectImage: "/ss.png",
    title: "Fiskil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. ",
    stacks: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
];
const Text = () => {
  return (
    <div className="mx-auto  flex flex-col items-center gap-[48px]">
      {mockData.map(({ description, projectImage, stacks, title }, index) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          key={index}
          className={`flex items-center rounded-lg shadow-2xl flex-col 
            ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
            
            
          `}
        >
          <div className="flex px-[48px] py-[48px] bg-gray-50 dark:bg-gray-600 ">
            <div className="w-[480px] h-[384px] relative flex ">
              <Image
                className="rounded-lg "
                src={projectImage}
                alt={title}
                fill
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col px-[48px] py-[48px] gap-[30px] w-[576px] h-[480px] dark:bg-gray-800">
              <h3 className="text-[20px]">{title}</h3>
              <p className="text-[16px] text-gray-400">{description}</p>
              <div className="w-[480px] h-[100px] flex flex-wrap gap-x-[19px] gap-y-[10px] ">
                {stacks.map((stack, idx) => (
                  <div
                    className="px-[20px] py-[3px] flex bg-slate-300 dark:bg-gray-600 rounded-lg"
                    key={idx}
                  >
                    {stack}
                  </div>
                ))}
              </div>
              <PiUploadSimpleBold className="text-[30px]" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
export default Text;
