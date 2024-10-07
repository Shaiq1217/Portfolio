import Navbar from "@/components/Navbar";
import { navigationLinks } from "@/common/navigationLinks";
import { useState, useEffect } from "react";
import { Navigation } from "@/types/shared";
import Socials from "@/components/Socials";

const Main = () => {
  const [render, setRender] = useState<Navigation>(navigationLinks[0]);
  return (
    <main className="m-3">
      <Navbar setRender={setRender} />
      <div className="flex justify-center my-10 text-white ">
        <div className={`transition-opacity duration-500`}>
          <render.Component />
        </div>
      </div>
      <Socials />
    </main>
  );
};

export default Main;
