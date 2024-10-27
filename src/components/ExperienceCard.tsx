import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import React from "react";

interface ExperienceCardProps {
  company: string;
  position: string;
  date: string;
  details: string[];
  index: number;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const ExperienceCard = ({
  company,
  position,
  date,
  details,
  index,
  activeIndex,
  setActiveIndex,
}: ExperienceCardProps) => {
  const showDetails = activeIndex === index;

  return (
    <div className="flex flex-col justify-center items-center px-2">
      <div
        className={`flex ${
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        } items-center justify-between px-2 w-[100%] py-12 mb-4`}
      >
        <div className="flex flex-col gap-y-1 ">
          <span className="font-extralight text-4xl">{company}</span>
        </div>
        <div className="flex flex-col justify-center gap-y-2">
          <span className="font-semibold">{position}</span>
          <span className="font-extralight text-sm italic">{date}</span>
          <a
            className="flex flex-row gap-x-2 items-center hover:cursor-pointer"
            onClick={() => setActiveIndex(showDetails ? null : index)}
          >
            {showDetails ? (
              <>
                <ArrowUpCircle size={16} />
                Less Details
              </>
            ) : (
              <>
                <ArrowDownCircle size={16} />
                More details
              </>
            )}
          </a>
        </div>
      </div>
      <div
        className={`${
          showDetails ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-700 transform ease-in-out ${
          showDetails ? "translate-y-0" : "-translate-y-4"
        }`}
      >
        <ul className="text-md font-light leading-relaxed list-disc py-5">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
