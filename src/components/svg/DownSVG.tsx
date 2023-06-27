import { ClsPathProps } from "@/interface/SVG";
import React from "react";

export default function DownSVG({ className }: ClsPathProps) {
  return (
    <svg
      width="15"
      height="9"
      viewBox="0 0 15 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.174746 0.303669C0.435616 -0.0607138 0.893817 -0.102913 1.19817 0.209415L7.5 6.67646L13.8018 0.209415C14.1062 -0.102914 14.5644 -0.0607144 14.8253 0.303668C15.0861 0.668051 15.0509 1.21663 14.7465 1.52896L7.97235 8.48074C7.70054 8.75967 7.29946 8.75967 7.02765 8.48074L0.25347 1.52896C-0.0508786 1.21663 -0.0861248 0.668052 0.174746 0.303669Z"
        fill="#1C1C1C"
      />
    </svg>
  );
}