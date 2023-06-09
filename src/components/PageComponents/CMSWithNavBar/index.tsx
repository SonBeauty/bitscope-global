import Image from "next/image";
import React from "react";
interface CMSWithNavBarProp {
  className: string;
  classNameIMG: string;
  title: string;
}
export default function CMSWithNavBar({
  className,
  classNameIMG,
  title,
}: CMSWithNavBarProp) {
  return (
    <div className={className + "flex items-center flex-col py-8 relative"}>
      <Image
        width={800}
        height={100}
        src="/image/cms2.svg"
        alt="cms"
        className={classNameIMG + " mx-auto"}
      />
      <span className="absolute bottom-1/4 font-bold text-3xl text-[#005AE2]">
        {title}
      </span>
    </div>
  );
}
