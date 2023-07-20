import { SVGNavMenuProps } from "@/interface/SVG";
import React from "react";

export default function DashBoardSVG({
  className,
  fillOne,
  fillTwo,
}: SVGNavMenuProps) {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M27.3438 24.3592V16.069C27.3438 14.7846 26.7535 13.5682 25.7361 12.7558L20.2673 8.38914C18.6569 7.1032 16.3431 7.1032 14.7327 8.38914L9.26391 12.7558C8.24649 13.5682 7.65625 14.7846 7.65625 16.069V24.3592C7.65625 26.7217 9.615 28.6368 12.0312 28.6368H22.9688C25.385 28.6368 27.3438 26.7217 27.3438 24.3592Z"
        fill={fillOne}
      />
      <rect
        x="12.3423"
        y="24.6971"
        width="10.9375"
        height="1.59091"
        rx="0.795455"
        fill={fillTwo}
      />
    </svg>
  );
}
