import React from "react";

import Icon from "@/components/ui/Icon";
import Link from "next/link";

const MobileFooter = () => {
  return (
    <div className="bg-white bg-no-repeat custom-dropshadow footer-bg dark:bg-slate-700 flex justify-around items-center backdrop-filter backdrop-blur-[40px] fixed left-0 w-full z-[9999] bottom-0 py-[12px] px-4">
      <Link href="chat">
        <div>
          <span className="relative cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center mb-1 dark:text-white text-slate-900">
            <Icon icon="heroicons-outline:mail" />
            <span className="absolute right-[5px] lg:top-0 -top-2 h-4 w-4 bg-red-500 text-[8px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-[99]">
              10
            </span>
          </span>
          <span className="block text-[11px] text-slate-600 dark:text-slate-300">
            Messages
          </span>
        </div>
      </Link>
      <Link
        href="/user"
        className="relative bg-white bg-no-repeat backdrop-filter backdrop-blur-[40px] rounded-full footer-bg dark:bg-slate-700 h-[65px] w-[65px] z-[-1] -mt-[40px] flex justify-center items-center"
      >
        <div className="h-[50px] w-[50px] rounded-full relative left-[0px] top-[0px] custom-dropshadow">
          <picture>
            <img
              src="data:image/png;base64,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"
              alt=""
              className="w-full h-full rounded-full border-2 border-slate-100"
            />
          </picture>
        </div>
      </Link>
      <Link href="notifications">
        <div>
          <span className="relative cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center mb-1 dark:text-white text-slate-900">
            <Icon icon="heroicons-outline:bell" />
            <span className="absolute right-[17px] lg:top-0 -top-2 h-4 w-4 bg-red-500 text-[8px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-[99]">
              2
            </span>
          </span>
          <span className="block text-[11px] text-slate-600 dark:text-slate-300">
            Notifications
          </span>
        </div>
      </Link>
    </div>
  );
};

export default MobileFooter;
