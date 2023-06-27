import { ClsPathProps } from "@/interface/SVG";
import React from "react";

export default function DownloadMobile({ className }: ClsPathProps) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.1021 15.6792V7.56608C19.1021 6.79803 18.8407 6.05286 18.3608 5.45315L16.7354 3.42155C16.0936 2.61933 15.1219 2.15234 14.0945 2.15234H7.19898C6.1716 2.15234 5.19991 2.61933 4.55808 3.42155L2.93264 5.45315C2.45282 6.05286 2.19141 6.79803 2.19141 7.56607V15.6792C2.19141 17.5471 3.70564 19.0614 5.57354 19.0614H15.7199C17.5878 19.0614 19.1021 17.5471 19.1021 15.6792Z"
        fill="#005AE2"
        stroke="#005AE2"
        stroke-width="1.2683"
        stroke-linejoin="round"
      />
      <path
        d="M3.03516 6.37988H18.2548"
        stroke="white"
        stroke-width="1.27154"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.7695 14.232L11.6763 15.3251C11.3461 15.6553 10.8108 15.6553 10.4806 15.3251L9.3874 14.232M11.0785 10.5001V15.0775"
        stroke="white"
        stroke-width="1.2683"
        stroke-linecap="round"
      />
    </svg>
  );
}