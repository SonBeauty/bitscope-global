import { ClsPathProps } from "@/interface/SVG";
import React from "react";

export default function OverviewReferral({
  className,
  classNamePath,
}: ClsPathProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21 13C21 14.9778 20.4135 16.9112 19.3147 18.5557C18.2159 20.2002 16.6541 21.4819 14.8268 22.2388C12.9996 22.9957 10.9889 23.1937 9.0491 22.8079C7.10929 22.422 5.32746 21.4696 3.92893 20.0711C2.53041 18.6725 1.578 16.8907 1.19215 14.9509C0.806295 13.0111 1.00433 11.0004 1.7612 9.17317C2.51808 7.3459 3.79981 5.78412 5.4443 4.6853C7.08879 3.58649 9.02219 3 11 3V13H21Z"
        fill="#005AE2"
      />
      <path
        d="M23 11C23 9.68678 22.7413 8.38642 22.2388 7.17317C21.7362 5.95991 20.9997 4.85752 20.0711 3.92893C19.1425 3.00035 18.0401 2.26375 16.8268 1.7612C15.6136 1.25866 14.3132 1 13 1V11H23Z"
        fill="#007DFF"
      />
    </svg>
  );
}
