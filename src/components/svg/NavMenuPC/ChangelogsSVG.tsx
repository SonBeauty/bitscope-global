import { SVGNavMenuProps } from "@/interface/SVG";
import React from "react";

export default function ChangelogsSVG({ fillOne }: SVGNavMenuProps) {
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
        d="M6.5625 7.92969C6.10945 7.92969 5.74219 8.29695 5.74219 8.75C5.74219 9.20305 6.10945 9.57031 6.5625 9.57031H20.7812C21.2343 9.57031 21.6016 9.20305 21.6016 8.75C21.6016 8.29695 21.2343 7.92969 20.7812 7.92969H6.5625ZM21.875 13.9453C18.7037 13.9453 16.1328 16.5162 16.1328 19.6875C16.1328 22.8588 18.7037 25.4297 21.875 25.4297C25.0463 25.4297 27.6172 22.8588 27.6172 19.6875C27.6172 16.5162 25.0463 13.9453 21.875 13.9453ZM14.4922 19.6875C14.4922 15.6101 17.7976 12.3047 21.875 12.3047C25.9524 12.3047 29.2578 15.6101 29.2578 19.6875C29.2578 21.4307 28.6537 23.0327 27.6434 24.2958L29.0176 25.67C29.3379 25.9903 29.3379 26.5097 29.0176 26.8301C28.6972 27.1504 28.1778 27.1504 27.8575 26.8301L26.4833 25.4559C25.2202 26.4662 23.6182 27.0703 21.875 27.0703C17.7976 27.0703 14.4922 23.7649 14.4922 19.6875ZM6.5625 18.8672C6.10945 18.8672 5.74219 19.2345 5.74219 19.6875C5.74219 20.1405 6.10945 20.5078 6.5625 20.5078H12.0312C12.4843 20.5078 12.8516 20.1405 12.8516 19.6875C12.8516 19.2345 12.4843 18.8672 12.0312 18.8672H6.5625ZM5.74219 14.2188C5.74219 13.7657 6.10945 13.3984 6.5625 13.3984H12.0312C12.4843 13.3984 12.8516 13.7657 12.8516 14.2188C12.8516 14.6718 12.4843 15.0391 12.0312 15.0391H6.5625C6.10945 15.0391 5.74219 14.6718 5.74219 14.2188Z"
        fill={fillOne}
      />
    </svg>
  );
}
