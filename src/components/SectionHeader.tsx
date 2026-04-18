interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="relative flex py-7 gap-x-20 items-center w-[100%]">
      <div className="flex-grow border-t border-gray-400"></div>
      <h1 className="text-4xl flex-shrink mx-4">{title}</h1>
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
};

export default SectionHeader;
