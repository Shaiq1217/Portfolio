import AboutMe from "@/containers/AboutMe";
import Projects from "@/containers/Projects";
import Resume from "@/containers/Resume";
import { Navigation } from "@/types/shared";

export const navigationLinks : Navigation[] = [
  {Name: "About Me",  Component: AboutMe},
  {Name: "Projects",  Component: Projects},
  {Name: "Resume",  Component: Resume},
];