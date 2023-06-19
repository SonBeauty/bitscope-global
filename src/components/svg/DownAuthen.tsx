import React from "react";

interface DownAuthenProps {
  className?: string;
  classNamePath?: string;
}

export default function DownAuthen({
  className,
  classNamePath,
}: DownAuthenProps) {
  return (
    <svg
      width="12"
      height="6"
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.135742 0.207342C0.338386 -0.0416327 0.694315 -0.0704665 0.930733 0.142941L5.82598 4.56173L10.7212 0.142941C10.9577 -0.070467 11.3136 -0.0416331 11.5162 0.207342C11.7189 0.456316 11.6915 0.83115 11.4551 1.04456L6.1929 5.79456C5.98176 5.98515 5.6702 5.98515 5.45907 5.79456L0.196895 1.04456C-0.0395224 0.831151 -0.0669016 0.456317 0.135742 0.207342Z"
        fill="white"
        className={classNamePath}
      />
    </svg>
  );
}
