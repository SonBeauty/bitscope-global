import { SVGNavMenuProps } from "@/interface/SVG";
import React from "react";

export default function CompanySettingSVG({ fillOne }: SVGNavMenuProps) {
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
        d="M21.234 5.25H23.4317C25.5037 5.25 26.5397 5.25 27.1834 5.91695C27.827 6.5839 27.827 7.65734 27.827 9.80422V27.1672H28.9259C29.381 27.1672 29.75 27.5495 29.75 28.0211C29.75 28.4927 29.381 28.875 28.9259 28.875H6.94913C6.49397 28.875 6.125 28.4927 6.125 28.0211C6.125 27.5495 6.49397 27.1672 6.94913 27.1672H8.04797V13.2199C8.04797 11.073 8.04797 9.99956 8.69165 9.33261C9.33533 8.66566 10.3713 8.66566 12.4433 8.66566H16.8387C18.9107 8.66566 19.9466 8.66566 20.5903 9.33261C21.234 9.99956 21.234 11.073 21.234 13.2199V27.1672H22.8823V13.2199L22.8823 13.118C22.8824 12.1324 22.8825 11.2288 22.7871 10.4937C22.6821 9.68424 22.435 8.82867 21.7558 8.12499C21.0767 7.42131 20.251 7.16526 19.4697 7.05643C18.7703 6.95899 17.9127 6.95772 16.9771 6.95782C17.0698 6.51692 17.2243 6.18428 17.4823 5.91695C18.126 5.25 19.162 5.25 21.234 5.25ZM10.5203 12.0813C10.5203 11.6097 10.8893 11.2274 11.3445 11.2274H17.9375C18.3927 11.2274 18.7616 11.6097 18.7616 12.0813C18.7616 12.5529 18.3927 12.9352 17.9375 12.9352H11.3445C10.8893 12.9352 10.5203 12.5529 10.5203 12.0813ZM10.5203 15.497C10.5203 15.0254 10.8893 14.6431 11.3445 14.6431H17.9375C18.3927 14.6431 18.7616 15.0254 18.7616 15.497C18.7616 15.9686 18.3927 16.3509 17.9375 16.3509H11.3445C10.8893 16.3509 10.5203 15.9686 10.5203 15.497ZM10.5203 18.9127C10.5203 18.441 10.8893 18.0587 11.3445 18.0587H17.9375C18.3927 18.0587 18.7616 18.441 18.7616 18.9127C18.7616 19.3843 18.3927 19.7666 17.9375 19.7666H11.3445C10.8893 19.7666 10.5203 19.3843 10.5203 18.9127ZM14.641 23.7515C15.0961 23.7515 15.4651 24.1338 15.4651 24.6054V27.1672H13.8169V24.6054C13.8169 24.1338 14.1858 23.7515 14.641 23.7515Z"
        fill={fillOne}
      />
    </svg>
  );
}
