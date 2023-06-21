import { ClsPathProps } from "@/interface/SVG";
import React from "react";

export default function TwitterHistorySVG({
  className,
  classNamePath,
}: ClsPathProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse cx="12" cy="11.9988" rx="12" ry="11.9988" fill="#0A89FF" />
      <path
        d="M17.9258 8.98659C17.9346 9.11677 17.9346 9.24694 17.9346 9.37832C17.9346 13.3815 14.9627 17.9983 9.52856 17.9983V17.9959C7.92329 17.9983 6.35137 17.5268 5 16.6378C5.23342 16.6665 5.46801 16.6809 5.70318 16.6815C7.03349 16.6827 8.32578 16.225 9.37236 15.3822C8.10815 15.3576 6.99956 14.5123 6.61229 13.2783C7.05514 13.3659 7.51144 13.3479 7.94611 13.2261C6.56782 12.9405 5.57623 11.6987 5.57623 10.2566C5.57623 10.2434 5.57623 10.2308 5.57623 10.2182C5.98691 10.4528 6.44673 10.5829 6.91708 10.5973C5.61894 9.70767 5.21879 7.93676 6.00271 6.55218C7.50267 8.44487 9.71576 9.59549 12.0915 9.71727C11.8534 8.66504 12.1786 7.56242 12.9462 6.82274C14.1361 5.67572 16.0075 5.73451 17.1261 6.95412C17.7877 6.82034 18.4219 6.57138 19.0022 6.21863C18.7816 6.91992 18.3201 7.51562 17.7035 7.89416C18.2891 7.82337 18.8612 7.6626 19.4 7.41724C19.0034 8.02674 18.5038 8.55766 17.9258 8.98659Z"
        fill="white"
        className={classNamePath}
      />
    </svg>
  );
}
