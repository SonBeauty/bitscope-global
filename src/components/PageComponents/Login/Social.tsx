import React from "react";
import Image from "next/image";
const Social = () => {
  return (
    <ul className="flex">
      <li className="flex-1">
        <a
          href="#"
          className="inline-flex h-10 w-10 bg-[#1C9CEB] text-white text-2xl flex-col items-center justify-center rounded-full"
        >
          <Image height={26} width={26} alt="social" src="/image/tw.svg" />
        </a>
      </li>
      <li className="flex-1">
        <a
          href="#"
          className="inline-flex h-10 w-10 bg-[#395599] text-white text-2xl flex-col items-center justify-center rounded-full"
        >
          <Image height={26} width={26} alt="social" src="/image/fb.svg" />
        </a>
      </li>
      <li className="flex-1">
        <a
          href="#"
          className="inline-flex h-10 w-10 bg-[#0A63BC] text-white text-2xl flex-col items-center justify-center rounded-full"
        >
          <Image height={26} width={26} alt="social" src="/image/in.svg" />
        </a>
      </li>
      <li className="flex-1">
        <a
          href="#"
          className="inline-flex h-10 w-10 bg-[#EA4335] text-white text-2xl flex-col items-center justify-center rounded-full"
        >
          <Image height={26} width={26} alt="social" src="/image/gp.svg" />
        </a>
      </li>
    </ul>
  );
};

export default Social;
