import useSidebar from "@/hooks/useSidebar";
import useSkin from "@/hooks/useSkin";
import Image from "next/image";
import Link from "next/link";
const SidebarLogo = ({ menuHover }: any) => {
  const [collapsed, setMenuCollapsed] = useSidebar();
  const [skin] = useSkin();
  return (
    <div
      className={` logo-segment flex justify-between items-center bg-white dark:bg-slate-800 z-[9] px-4
      ${menuHover ? "logo-hovered" : ""}
      ${
        skin === "bordered"
          ? " border-b border-r-0 border-slate-200 dark:border-slate-700"
          : " border-none"
      }
      `}
    >
      <Link href="/dashboard">
        <p className="flex items-center space-x-4">
          <p className="logo-icon">
            <Image
              width={180}
              height={80}
              alt="logo"
              src="/image/1200X628-SVG-NONBACKGROUND.png"
              className="mx-auto relative -mt-4"
            />
          </p>
        </p>
      </Link>
      {(!collapsed || menuHover) && (
        <div
          onClick={() => setMenuCollapsed(!collapsed)}
          className={`h-4 w-4 border-[1.5px] border-slate-900 dark:border-slate-700 rounded-full transition-all duration-150
          ${
            collapsed
              ? ""
              : "ring-2 ring-inset ring-offset-4 ring-black-900 dark:ring-slate-400 bg-slate-900 dark:bg-slate-400 dark:ring-offset-slate-700"
          }
          `}
        ></div>
      )}
    </div>
  );
};
export default SidebarLogo;