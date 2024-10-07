import Skills from "@/components/Skills";
import SpecialText from "@/components/SpecialText";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Card className="bg-transparent text-white border-[#ffffff3a] col-span-2">
        <CardHeader className="items-center">
          Hi, I am
          <SpecialText> Shaiq e Mustafa </SpecialText>
        </CardHeader>
      </Card>

      <div className="flex gap-2">
        <Card className="bg-transparent text-white border-[#ffffff3a] flex-1">
          <CardContent className="flex flex-col items-center justify-center gap-y-4 my-5 max-w-md">
            <div className="text-2xl font-semibold my-2 py-2">
              Prominent Skills
            </div>
            <Skills />
          </CardContent>
        </Card>

        <Card className="bg-transparent text-white border-[#ffffff3a] flex-1">
          <CardContent className="flex flex-col items-center justify-center gap-y-4 my-5 font-light text-md max-w-md">
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
  );
};

export default AboutMe;
