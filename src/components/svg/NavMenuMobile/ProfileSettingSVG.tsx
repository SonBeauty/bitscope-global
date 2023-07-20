import { SVGNavMenuProps } from "@/interface/SVG";
import React from "react";

export default function ProfileSettingSVG({ fillOne }: SVGNavMenuProps) {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="17.5" cy="10.9375" r="4.375" fill={fillOne} />
      <ellipse cx="17.5" cy="22.9688" rx="8.75" ry="5.46875" fill={fillOne} />
      <path
        d="M27.9569 14.2169C28.2579 13.8783 28.2274 13.3598 27.8887 13.0588C27.5501 12.7578 27.0316 12.7883 26.7306 13.1269L24.3623 15.7912L23.5175 15.0309C23.1808 14.7278 22.6621 14.7551 22.359 15.0919C22.056 15.4286 22.0833 15.9473 22.42 16.2504L23.8783 17.5629C24.0407 17.709 24.2546 17.7843 24.4727 17.7722C24.6908 17.76 24.8951 17.6614 25.0402 17.4981L27.9569 14.2169Z"
        fill={fillOne}
      />
    </svg>
  );
}
