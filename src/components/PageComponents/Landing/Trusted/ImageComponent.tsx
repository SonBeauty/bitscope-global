import Image from "next/image";
import React from "react";
interface ImageComponentProps {
  src: string;
}
export default function ImageComponent({ src }: ImageComponentProps) {
  return (
    <div className="item">
      <div className="logo">
        <Image width={160} height={80} alt="trust" src={src} />
      </div>
    </div>
  );
}
