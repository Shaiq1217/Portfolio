import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import Socials from "@/components/Socials";
import AboutMe from "./containers/AboutMe";
import Experience from "./containers/Experience";
import Resume from "./containers/Resume";
import Projects from "./containers/Projects";

const App = () => {
  // const targetRef = useRef<HTMLDivElement>(null);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setContentVisible(true);
  }, []);

  // // Function to scroll to the target component
  // const scrollToComponent = () => {
  //   targetRef?.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <>
      <AboutMe />

      <main className="min-h-screen flex flex-col items-center">
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 z-10">
          <Navbar />
        </div>
        <div className="fixed bottom-4 left-3 z-10">
          <Socials />
        </div>
        <div
          className={`flex flex-col justify-center text-white mt-24 mb-20 gap-5 transition-opacity duration-1000 ${
            contentVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Experience />
          <Projects />
          <Resume />
        </div>
      </main>
    </>
  );
};

export default App;
