import AboutMe from "@/containers/AboutMe";
import Experience from "@/containers/Experience";
import Projects from "@/containers/Projects";
import Resume from "@/containers/Resume";
import { Navigation } from "@/types/shared";

export const navigationLinks : Navigation[] = [
  {Name: "About Me",  Component: AboutMe},
  {Name: "Resume",  Component: Resume},
  {Name: "Experience",  Component: Experience},
  {Name: "Projects",  Component: Projects},
];