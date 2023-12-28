import Image from "next/image";
import React from "react";
import { PiUploadSimpleBold } from "react-icons/pi";

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
        <div
          key={index}
          className={`flex items-center rounded-lg shadow-2xl flex-col md:flex-row ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="flex px-[48px] py-[48px] bg-gray-50 ">
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
            <div className="flex flex-col px-[48px] py-[48px] gap-[30px] w-[576px] h-[480px] ">
              <h3 className="text-[20px]">{title}</h3>
              <p className="text-[16px] text-gray-400">{description}</p>
              <div className="w-[480px] h-[100px] flex flex-wrap gap-x-[19px] gap-y-[10px] ">
                {stacks.map((stack, idx) => (
                  <p
                    className="px-[20px] py-[3px] flex bg-slate-300 rounded-lg"
                    key={idx}
                  >
                    {stack}
                  </p>
                ))}
              </div>
              <PiUploadSimpleBold className="text-[30px]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Text;
