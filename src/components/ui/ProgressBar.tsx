import React from "react";
import Bar from "./Bar";
interface ProgressBarProps {
  title?: string;
  children?: React.ReactNode;
  value?: number;
  backClass?: string;
  className?: string;
  titleClass?: string;
  striped?: string;
  animate?: string;
  showValue?: boolean;
}
export default function ProgressBar({
  title,
  children,
  value,
  backClass = "rounded-[999px]",
  className = "bg-slate-900 dark:bg-slate-900",
  titleClass = "text-base font-normal",
  striped,
  animate,
  showValue,
}: ProgressBarProps) {
  return (
    <div className="relative">
      {title && (
        <span
          className={`block text-slate-500 tracking-[0.01em] mb-2 ${titleClass}`}
        >
          {title}
        </span>
      )}
      {!children && (
        <div
          className={`w-full overflow-hidden bg-opacity-10 progress  ${backClass}`}
        >
          <Bar
            value={value}
            className={className}
            striped={striped}
            animate={animate}
            showValue={showValue}
          />
        </div>
      )}
      {children && (
        <div
          className={`w-full overflow-hidden bg-opacity-10 flex progress  ${backClass}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
