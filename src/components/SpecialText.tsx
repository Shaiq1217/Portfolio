export interface SpecialTextProps {
  children: React.ReactNode;
}

const SpecialText = ({ children }: SpecialTextProps) => {
  return <div className="text-8xl font-bold">{children}</div>;
};

export default SpecialText;
