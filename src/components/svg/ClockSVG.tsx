import { ClsPathProps } from "@/interface/SVG";
import React from "react";
export default function ClockSVG({ className, classNamePath }: ClsPathProps) {
  return (
    <svg
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10.75 5C10.75 4.58579 10.4142 4.25 10 4.25C9.58579 4.25 9.25 4.58579 9.25 5V10C9.25 10.3228 9.45657 10.6094 9.76283 10.7115L12.7628 11.7115C13.1558 11.8425 13.5805 11.6301 13.7115 11.2372C13.8425 10.8442 13.6301 10.4195 13.2372 10.2885L10.75 9.45943V5Z"
        fill="white"
        className={classNamePath}
      />
    </svg>
  );
}
