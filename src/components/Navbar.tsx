import { navigationLinks } from "@/common/navigationLinks";
import { Navigation } from "@/types/shared";
import { Bot, SunMoon } from "lucide-react";

interface NavbarProps {
  setRender?: React.Dispatch<React.SetStateAction<Navigation>>;
}

const Navbar = ({ setRender }: NavbarProps) => {
  const iconSize = 20;

  return (
    <div className="flex justify-center">
      <div className="rounded-2xl bg-[#ffffff11] px-4">
        <nav className="flex justify-between gap-2 text-white px-4  text-xs items-center gap-x-10">
          <div>
            <Bot />
          </div>
          <div>
            <ul className="inline-flex items-center">
              {navigationLinks.map((Link, index) => (
                <li key={index}>
                  <button
                    onClick={() => setRender && setRender(Link)}
                    className="flex flex-row 
                    font-extralight transition-all 
                    duration-700 ease-in-out 
                    hover:bg-[#ffffff2a] hover:text-white 
                    px-8 py-4"
                  >
                    {Link.Name}
                  </button>
                </li>
              ))}
              <li className="px-4">
                <SunMoon color="white" size={iconSize} />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
