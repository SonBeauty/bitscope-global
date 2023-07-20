import { SVGNavMenuProps } from "@/interface/SVG";
import React from "react";

export default function BitAuthentionSVG({ fillOne }: SVGNavMenuProps) {
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
        d="M8.06916 9.93388C7.65625 10.5222 7.65625 12.2709 7.65625 15.7682V17.4905C7.65625 23.6572 12.2926 26.6497 15.2016 27.9205C15.9906 28.2652 16.3852 28.4375 17.5 28.4375C18.6148 28.4375 19.0094 28.2652 19.7984 27.9205C22.7074 26.6498 27.3438 23.6572 27.3438 17.4905V15.7682C27.3438 12.2709 27.3438 10.5222 26.9308 9.93388C26.5179 9.34559 24.8737 8.78277 21.5853 7.65712L20.9587 7.44266C19.2446 6.85589 18.3875 6.5625 17.5 6.5625C16.6125 6.5625 15.7554 6.85589 14.0413 7.44266L13.4147 7.65712C10.1263 8.78277 8.48207 9.34559 8.06916 9.93388ZM20.8463 15.8588C21.148 15.5209 21.1187 15.0023 20.7807 14.7006C20.4428 14.3989 19.9242 14.4282 19.6225 14.7662L16.3281 18.4558L15.3775 17.3912C15.0758 17.0532 14.5572 17.0239 14.2193 17.3256C13.8813 17.6273 13.852 18.1459 14.1537 18.4838L15.7162 20.2338C15.8719 20.4082 16.0944 20.5078 16.3281 20.5078C16.5618 20.5078 16.7844 20.4082 16.94 20.2338L20.8463 15.8588Z"
        fill={fillOne}
      />
    </svg>
  );
}
