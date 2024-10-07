import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbSql } from "react-icons/tb";
import { SiTypescript, SiExpress } from "react-icons/si";

const DEFAULT_ICON_SIZE = 16;

const skills = [
  { name: "React", icon: <FaReact color="white" size={DEFAULT_ICON_SIZE} /> },
  { name: "Node", icon: <FaNodeJs color="white" size={DEFAULT_ICON_SIZE} /> },
  {
    name: "MongoDB",
    icon: <DiMongodb color="white" size={DEFAULT_ICON_SIZE} />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill color="white" size={DEFAULT_ICON_SIZE} />,
  },
  { name: "SQL", icon: <TbSql color="white" size={DEFAULT_ICON_SIZE} /> },
  {
    name: "Typescript",
    icon: <SiTypescript color="white" size={DEFAULT_ICON_SIZE} />,
  },
  {
    name: "Express",
    icon: <SiExpress color="white" size={DEFAULT_ICON_SIZE} />,
  },
];

const Skills = () => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          {skill.icon}
          <p className="text-xs text-white">{skill.name}</p>
        </div>
      ))}
      {[...Array(10 - skills.length)].map((_, idx) => (
        <div key={`empty-${idx}`} className="flex flex-col items-center gap-2">
          <div className="w-4 h-4"></div>{" "}
        </div>
      ))}
    </div>
  );
};

export default Skills;
