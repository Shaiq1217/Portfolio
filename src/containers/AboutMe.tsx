import Skills from "@/components/Skills";
import SpecialText from "@/components/SpecialText";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import BackgroundImage from "../../public/background.jpg";

const AboutMe = () => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="bg-[#000000af] p-16  flex flex-col justify-stretch gap-y-5">
        <div className="text-center text-white my-4">
          Hi, I am <SpecialText> Shaiq e Mustafa </SpecialText>
        </div>
        <div
          id="header-content"
          className="flex md:gap-y-2 md:flex-row flex-col justify-evenly items-stretch gap-x-2 w-full "
        >
          <Card className="bg-transparent text-white border-[#ffffff3a] flex flex-col justify-center items-center hover:shadow-xl hover:shadow-[#ffffff0f] transition-all duration-500 ease-in-out">
            <CardContent className="flex flex-col items-center justify-center gap-y-4 my-5 max-w-md">
              <div className="text-2xl font-semibold my-2 py-2">
                Prominent Skills
              </div>
              <Skills />
            </CardContent>
          </Card>

          <Card className="bg-transparent text-white border-[#ffffff3a] flex flex-col justify-center items-center hover:shadow-xl hover:shadow-[#ffffff0f] transition-all duration-500 ease-in-out">
            <CardContent className="flex flex-col items-center justify-center gap-y-3 my-6 font-light text-md max-w-md">
              <div className="flex flex-row gap-1 text-sm">
                <MapPin size={18} />
                Penang, Malaysia
              </div>
              <div className="text-md my-4 align-middle">
                A passionate Full Stack Developer who loves to code and build
                applications. I have a keen interest in building scalable and
                efficient applications. I have experience working with React,
                Node.js, Express, MongoDB, and TypeScript to develop dynamic web
                applications.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
