import { SVGNavMenuProps } from "@/interface/SVG";
import React from "react";

export default function SettingSVG({ className, fillOne }: SVGNavMenuProps) {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.456 7.65625H18.544C19.6972 7.65625 20.6321 8.53769 20.6321 9.625C20.6321 10.8693 21.9634 11.6603 23.0563 11.0654L23.1672 11.005C24.166 10.4614 25.443 10.784 26.0196 11.7256L27.0637 13.4306C27.6403 14.3723 27.2981 15.5763 26.2994 16.12C25.206 16.7152 25.206 18.2848 26.2994 18.88C27.2981 19.4237 27.6403 20.6277 27.0637 21.5694L26.0196 23.2744C25.443 24.216 24.166 24.5386 23.1673 23.995L23.0563 23.9346C21.9634 23.3397 20.6321 24.1307 20.6321 25.375C20.6321 26.4623 19.6972 27.3438 18.544 27.3438H16.456C15.3027 27.3438 14.3679 26.4623 14.3679 25.375C14.3679 24.1307 13.0366 23.3397 11.9437 23.9346L11.8328 23.995C10.834 24.5386 9.55699 24.216 8.98039 23.2744L7.93635 21.5694C7.35974 20.6277 7.70193 19.4237 8.70064 18.88C9.79399 18.2848 9.794 16.7152 8.70064 16.12C7.70193 15.5763 7.35974 14.3722 7.93635 13.4306L8.98039 11.7256C9.55699 10.784 10.834 10.4614 11.8328 11.005L11.9438 11.0654C13.0366 11.6603 14.3679 10.8693 14.3679 9.625C14.3679 8.53769 15.3027 7.65625 16.456 7.65625ZM17.5 20.7812C19.3122 20.7812 20.7813 19.3122 20.7813 17.5C20.7813 15.6878 19.3122 14.2188 17.5 14.2188C15.6878 14.2188 14.2188 15.6878 14.2188 17.5C14.2188 19.3122 15.6878 20.7812 17.5 20.7812Z"
        fill={fillOne}
      />
    </svg>
  );
}