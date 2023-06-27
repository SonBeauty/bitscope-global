import { ClsPathProps } from "@/interface/SVG";
import React from "react";

export default function TrashMobile({ className }: ClsPathProps) {
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
        d="M4.22818 7.22505V15.6796C4.22818 17.5473 5.74241 19.0614 7.61031 19.0614H12.6835C14.5514 19.0614 16.0656 17.5473 16.0656 15.6796V7.22505M11.838 9.7614V14.8341M8.45584 9.7614L8.45584 14.8341M13.529 4.68869L12.34 2.9053C12.0264 2.4349 11.4984 2.15234 10.9329 2.15234H9.36088C8.79546 2.15234 8.26746 2.43489 7.95382 2.9053L6.76478 4.68869M13.529 4.68869H6.76478M13.529 4.68869H17.7567M6.76478 4.68869H2.53711"
        stroke="#FF1010"
        stroke-width="1.2683"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.46094 7.15381H15.6148V14.9615C15.6148 17.4255 13.6173 19.423 11.1532 19.423H8.92248C6.45844 19.423 4.46094 17.4255 4.46094 14.9615V7.15381Z"
        fill="#FF1010"
      />
      <path
        d="M8.92188 9.38477V14.9617"
        stroke="white"
        stroke-width="1.11538"
        stroke-linecap="round"
      />
      <path
        d="M12.8262 9.38477V14.9617"
        stroke="white"
        stroke-width="1.11538"
        stroke-linecap="round"
      />
    </svg>
  );
}