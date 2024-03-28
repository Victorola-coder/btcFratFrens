import { CheckMark } from "./svg";

interface FeaturesContentProps {
  className?: string;
  content: React.ReactNode;
  contentClass?: string;
}

export default function FeaturesContent({
  className,
  content,
  contentClass,
}: FeaturesContentProps) {
  return (
    <div className={`${className} flex flex-row items-center gap-[31px]`}>
      <CheckMark />
      <h4
        className={`${contentClass} text-white leading-[81.67px] font-eagle-lake text-[50px] font-normal`}
      >
        {content}
      </h4>
    </div>
  );
}
