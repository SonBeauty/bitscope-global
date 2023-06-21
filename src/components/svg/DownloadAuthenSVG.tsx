import { ClsPathProps } from "@/interface/SVG";
import React from "react";

export default function DownloadAuthenSVG({ className }: ClsPathProps) {
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
        d="M14 15.4129L12.7071 16.7057C12.3166 17.0962 11.6834 17.0962 11.2929 16.7057L10 15.4129M12 10.9991V16.4128"
        stroke="#28303F"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M22 17.998V8.40274C22 7.49439 21.6908 6.61309 21.1234 5.90381L19.201 3.50107C18.4419 2.5523 17.2927 2 16.0776 2H7.92238C6.70731 2 5.55812 2.5523 4.79903 3.50107L2.87664 5.90381C2.30917 6.61309 2 7.49439 2 8.40274V17.998C2 20.2072 3.79086 21.998 6 21.998H18C20.2091 21.998 22 20.2072 22 17.998Z"
        stroke="#28303F"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M3 6.99951H21"
        stroke="#28303F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}