import { SVGNavMenuProps } from "@/interface/SVG";
import React from "react";

export default function BitMonitorSVG({ fillOne }: SVGNavMenuProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5625 6.5625C8.35336 6.5625 6.5625 8.35336 6.5625 10.5625V21.1562C6.5625 23.3654 8.35336 25.1562 10.5625 25.1562H16.6797V27.6172H14.2188C13.7657 27.6172 13.3984 27.9845 13.3984 28.4375C13.3984 28.8905 13.7657 29.2578 14.2188 29.2578H20.7812C21.2343 29.2578 21.6016 28.8905 21.6016 28.4375C21.6016 27.9845 21.2343 27.6172 20.7812 27.6172H18.3203V25.1562H24.4375C26.6466 25.1562 28.4375 23.3654 28.4375 21.1562V10.5625C28.4375 8.35336 26.6466 6.5625 24.4375 6.5625H10.5625ZM17.5 10.9375C18.7081 10.9375 19.6875 11.9169 19.6875 13.125C19.6875 14.3331 18.7081 15.3125 17.5 15.3125C16.2919 15.3125 15.3125 14.3331 15.3125 13.125C15.3125 11.9169 16.2919 10.9375 17.5 10.9375ZM13.125 19.1406C13.125 18.2345 13.8595 17.5 14.7656 17.5H20.2344C21.1405 17.5 21.875 18.2345 21.875 19.1406C21.875 20.0467 21.1405 20.7812 20.2344 20.7812H14.7656C13.8595 20.7812 13.125 20.0467 13.125 19.1406Z"
        fill={fillOne}
      />
    </svg>
  );
}