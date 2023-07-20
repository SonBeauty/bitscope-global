import { SVGNavMenuProps } from "@/interface/SVG";
import React from "react";

export default function BitSpyingSVG({ fillOne, fillTwo }: SVGNavMenuProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4107_96689)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.2657 8.46526C26.7034 8.58252 26.9631 9.03232 26.8458 9.46993L26.4455 10.964C26.3282 11.4016 25.8784 11.6613 25.4408 11.5441C25.0032 11.4268 24.7435 10.977 24.8607 10.5394L25.2611 9.04531C25.3783 8.6077 25.8281 8.348 26.2657 8.46526ZM21.731 10.3205C20.9951 9.04587 19.2359 8.84703 18.2341 9.9252L11.181 17.5159C11.427 17.7391 11.6431 18.0038 11.8181 18.3069L14.5525 23.043C14.7275 23.3461 14.8487 23.6656 14.919 23.9903L25.0193 21.6776C26.4539 21.3491 27.1613 19.7261 26.4255 18.4515L21.731 10.3205ZM12.9587 23.7641L10.2243 19.0281C9.77127 18.2434 8.76788 17.9745 7.98318 18.4275C7.19849 18.8806 6.92963 19.884 7.38267 20.6687L10.117 25.4048C10.5701 26.1895 11.5735 26.4583 12.3582 26.0053C13.1429 25.5522 13.4117 24.5488 12.9587 23.7641ZM19.3693 28.5981L17.2875 24.9922L20.634 24.2259L22.211 26.9574C22.664 27.7421 22.3952 28.7455 21.6105 29.1986C20.8258 29.6516 19.8224 29.3828 19.3693 28.5981ZM28.0529 13.7483C27.6153 13.631 27.1655 13.8907 27.0482 14.3283C26.931 14.7659 27.1907 15.2158 27.6283 15.333L29.1224 15.7334C29.56 15.8506 30.0098 15.5909 30.127 15.1533C30.2443 14.7157 29.9846 14.2659 29.547 14.1486L28.0529 13.7483Z"
          fill={fillOne}
        />
      </g>
      <defs>
        <clipPath id="clip0_4107_96689">
          <rect
            width="26.25"
            height="26.25"
            fill="white"
            transform="translate(4.375 5.46875)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
