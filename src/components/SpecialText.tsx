export interface SpecialTextProps {
  children: React.ReactNode;
}

const SpecialText = ({ children }: SpecialTextProps) => {
  return (
    <div className="hover:cursor-none text-8xl font-semibold">{children}</div>
  );
};

export default SpecialText;
