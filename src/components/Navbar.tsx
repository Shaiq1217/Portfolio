import { navigationLinks } from "@/common/navigationLinks";
import { Navigation } from "@/types/shared";
import { Bot, SunMoon } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const iconSize = 20;
  const [isScrolled, setIsScrolled] = useState(false);
  const [color, setColor] = useState("white");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
      setColor(window.scrollY > 25 ? "black" : "white");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`rounded-2xl transition-all duration-500 ${
        isScrolled ? "bg-[#ffffffd0]" : "bg-[#ffffff11]"
      } hover:bg-[#ffffffff]  scale-100 hover:scale-105`}
    >
      <nav className="flex justify-between gap- px-4  text-xs items-center gap-x-10">
        <div
          // onClick={() => setRender && setRender(navigationLinks[0])}
          className="hover:cursor-pointer"
        >
          <Bot
            className={`text-${color} transition-all 
                    duration-700 ease-in-out `}
          />
        </div>
        <div>
          <ul className="inline-flex items-center">
            {navigationLinks.map((Link, index) => (
              <li key={index}>
                <button
                  // onClick={() => setRender && setRender(Link)}
                  className={`flex flex-row 
                    font-extralight transition-all 
                    duration-700 ease-in-out 
                    text-${color}
                    ${
                      isScrolled
                        ? "hover:bg-[#a0a0a0a0]  font-semibold"
                        : "hover:bg-[#ffffff2a]"
                    } hover:text-${color} 
                    px-8 py-4`}
                >
                  {Link.Name}
                </button>
              </li>
            ))}
            <li className="px-4">
              <SunMoon
                className={`text-${color} transition-all 
                    duration-700 ease-in-out`}
                size={iconSize}
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
