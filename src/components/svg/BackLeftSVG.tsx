import { ClsPathProps } from "@/interface/SVG";
import React from "react";

export default function BackLeftSVG({
  className,
  classNamePath,
}: ClsPathProps) {
  return (
    <svg
      width="9"
      height="15"
      viewBox="0 0 9 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.38627 0.174746C8.75066 0.435616 8.79285 0.893817 8.48053 1.19817L2.01348 7.5L8.48053 13.8018C8.79285 14.1062 8.75066 14.5644 8.38627 14.8253C8.02189 15.0861 7.47331 15.0509 7.16098 14.7465L0.209199 7.97235C-0.0697331 7.70054 -0.0697331 7.29946 0.209199 7.02765L7.16098 0.253471C7.47331 -0.0508783 8.02189 -0.0861245 8.38627 0.174746Z"
        fill="white"
        className={classNamePath}
      />
    </svg>
  );
}