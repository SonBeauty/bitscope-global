import useSidebar from "@/hooks/useSidebar";
import useSkin from "@/hooks/useSkin";
import Image from "next/image";
import Link from "next/link";
const SidebarLogo = ({ menuHover }: any) => {
  const [collapsed, setMenuCollapsed] = useSidebar();
  const [skin] = useSkin();
  return (
    <div
      className={` logo-segment relative flex h-[64.5px] border-b border-[#E5E9EE] border-x-0 justify-between items-center bg-white dark:bg-slate-800 z-[9] px-4
      ${menuHover ? "logo-hovered" : ""}
      ${
        skin === "bordered"
          ? " border-b border-slate-200 dark:border-slate-700"
          : ""
      }
      `}
    >
      <div className="w-1 h-[63px] absolute bg-white top-0 -right-[2px] z-[9999999999999] " />
      <Link href="/dashboard">
        <p className="flex items-center space-x-4">
          <p className="logo-icon">
            {collapsed && !menuHover && (
              <Image
                width={180}
                height={80}
                alt="logo"
                src="/image/400X400-SVG-NONBACKGROUND.png"
                className="mx-auto relative -mt-1"
              />
            )}
            {(!collapsed || menuHover) && (
              <Image
                width={180}
                height={80}
                alt="logo"
                src="/image/1200X628-SVG-NONBACKGROUND.png"
                className="mx-auto relative -mt-1 -ml-[14px]"
              />
            )}
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
