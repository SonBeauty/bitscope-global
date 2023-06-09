import clsx from "clsx";
interface CheckQualityProps {
  color: string;
  className?: string;
  src: React.ReactNode;
  border: string;
  title: string;
  content: string;
  classNameSRC?: string;
}
export default function CheckQuality({
  color,
  className,
  src,
  border,
  title,
  content,
  classNameSRC,
}: CheckQualityProps) {
  return (
    <div
      className={clsx(
        color,
        className,
        border,
        "bg-[#e9f5f9] px-6 py-4 rounded-2xl flex items-center gap-4 sm:flex-row flex-col shadow-md"
      )}
    >
      <div
        className={`${classNameSRC} border-2 py-3 px-7 border-[#DADADA] rounded-3xl`}
      >
        {src}
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-semibold text-2xl">{title}</span>
        <span className="font-normal text-sm">{content}</span>
      </div>
    </div>
  );
}
