import LayoutDashBoard from "@/components/layout/Layout";
import Card from "@/components/ui/Card";
import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
interface LayoutProfileProps {
  title: string;
  name: string;
  username?: string;
  children: React.ReactNode;
}
const LayoutProfile = ({
  title,
  name,
  username,
  children,
}: LayoutProfileProps) => {
  return (
    <LayoutDashBoard>
      <Card title={title}>
        <div>
          <div className="space-y-5 profile-page">
            <div className="profiel-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]">
              <div className="bg-slate-900 dark:bg-slate-700 absolute left-0 top-0 md:h-1/2 h-[150px] w-full z-[-1] rounded-t-lg"></div>
              <div className="profile-box flex-none md:text-start text-center">
                <div className="md:flex items-end md:space-x-6">
                  <div className="flex-none">
                    <div className="md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100 relative">
                      <picture>
                        <img
                          src="https://dashboard.zen-s.com/assets/user-1.ad58ce72.jpg"
                          alt="avatar"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </picture>
                      <Link
                        href="#"
                        className="absolute right-2 h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center justify-center md:top-[140px] top-[100px]"
                      >
                        <PencilIcon className="h-6 w-6 text-gray-500" />
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]">
                      {name}
                    </div>
                    {username && (
                      <div className="text-sm font-light text-slate-600 dark:text-slate-400">
                        @{username}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </Card>
    </LayoutDashBoard>
  );
};
export default LayoutProfile;