import { ExperienceList } from "@/common/experience";
import ExperienceCard from "@/components/ExperienceCard";
import SectionHeader from "@/components/SectionHeader";
import { useState } from "react";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col justify-center items-center divide-slate-400">
      <SectionHeader title="Experience" />
      <div className="w-[100%] flex flex-col">
        {ExperienceList.map((experience, index: number) => (
          <>
            <ExperienceCard
              {...experience}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
            {index !== ExperienceList.length - 1 && (
              <hr className="bg-gray-200 border-gray-500" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Experience;
