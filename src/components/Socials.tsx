import { Github, Linkedin, Mail } from "lucide-react";
import { FaDev } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex justify-center gap-20 text-white mt-20">
      <a
        href="https://github.com/Shaiq1217"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <Github className="hover:text-gray-400 transition-colors duration-300" />
      </a>
      <a
        href="https://linkedin.com/in/shaiqi"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <Linkedin className="hover:text-gray-400 transition-colors duration-300" />
      </a>
      <a href="mailto:shaiqi2001@gmail.com" title="Email">
        <Mail className="hover:text-gray-400 transition-colors duration-300" />
      </a>
      <a
        href="https://app.daily.dev/shaiqmustafa"
        target="_blank"
        rel="noopener noreferrer"
        title="App.Daily"
      >
        <FaDev
          className="hover:text-gray-400 transition-colors duration-300"
          size={22}
        />
      </a>
    </div>
  );
};

export default Socials;
