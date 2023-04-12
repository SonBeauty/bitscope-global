import clsx from "clsx";
interface CheckQualityProps {
  color: string;
  className?: string;
  src: React.ReactNode;
  border: string;
  title: string;
  content: string;
}
export default function CheckQuality({
  color,
  className,
  src,
  border,
  title,
  content,
}: CheckQualityProps) {
  return (
    <div
      className={clsx(
        color,
        className,
        border,
        "bg-green-200 p-8 rounded-2xl flex items-center gap-4 sm:flex-row flex-col border-2"
      )}
    >
      {src}
      <div className="flex flex-col gap-3">
        <span className="font-semibold text-2xl">{title}</span>
        <span className="font-normal text-sm">{content}</span>
      </div>
    </div>
  );
}