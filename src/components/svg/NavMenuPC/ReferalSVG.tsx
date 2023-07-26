import { SVGNavMenuProps } from "@/interface/SVG";
import React from "react";

export default function ReferalSVG({ fillOne }: SVGNavMenuProps) {
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
        d="M24.6778 9.84375H26.25C27.4581 9.84375 28.4375 10.8231 28.4375 12.0312V13.125C28.4375 14.3331 27.4581 15.3125 26.25 15.3125H8.75C7.54188 15.3125 6.5625 14.3331 6.5625 13.125V12.0312C6.5625 10.8231 7.54188 9.84375 8.75 9.84375H10.3222C10.1898 9.50476 10.1172 9.13587 10.1172 8.75C10.1172 7.08883 11.4638 5.74219 13.125 5.74219C14.9619 5.74219 16.5762 6.69553 17.5 8.13442C18.4238 6.69552 20.0381 5.74219 21.875 5.74219C23.5362 5.74219 24.8828 7.08883 24.8828 8.75C24.8828 9.13587 24.8102 9.50476 24.6778 9.84375ZM12.3046 9.84375H16.5082C16.0469 8.41571 14.7066 7.38281 13.125 7.38281C12.3699 7.38281 11.7578 7.99492 11.7578 8.75C11.7578 9.19723 11.9726 9.59431 12.3046 9.84375ZM22.6954 9.84375C23.0274 9.59431 23.2422 9.19723 23.2422 8.75C23.2422 7.99492 22.6301 7.38281 21.875 7.38281C20.2934 7.38281 18.9531 8.41571 18.4918 9.84375H22.6954ZM26.25 16.9531H8.75V26.25C8.75 27.4581 9.72938 28.4375 10.9375 28.4375H24.0625C25.2706 28.4375 26.25 27.4581 26.25 26.25V16.9531Z"
        fill={fillOne}
      />
    </svg>
  );
}