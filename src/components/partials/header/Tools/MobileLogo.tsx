import Link from "next/link";
import React from "react";
import Image from "next/image";
const MobileLogo = () => {
  return (
    <Link href="/">
      <Image
        width={100}
        height={80}
        alt="logo"
        src="/image/1200X628-SVG-NONBACKGROUND.png"
      />
    </Link>
  );
};
export default MobileLogo;