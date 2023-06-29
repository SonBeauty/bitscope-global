import { ClsPathProps } from "@/interface/SVG";
import React from "react";

export default function CalendarSVG({ className }: ClsPathProps) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="19" height="19" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_3230_58425" transform="scale(0.0104167)" />
        </pattern>
        <image
          id="image0_3230_58425"
          width="96"
          height="96"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}
