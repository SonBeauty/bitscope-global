import { ClsPathProps } from "@/interface/SVG";
import React from "react";

export default function TrashAuthenSVG({ className }: ClsPathProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 7.99941V17.9984C5 20.2074 6.79086 21.998 9 21.998H15C17.2091 21.998 19 20.2074 19 17.9984V7.99941M14 10.9991V16.9985M10 10.9991L10 16.9985M16 4.99971L14.5937 2.89051C14.2228 2.33417 13.5983 2 12.9296 2H11.0704C10.4017 2 9.7772 2.33417 9.40627 2.89051L8 4.99971M16 4.99971H8M16 4.99971H21M8 4.99971H3"
        stroke="#28303F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}