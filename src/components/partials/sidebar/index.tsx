import { menuItems } from "@/constant/data";
import useSemiDark from "@/hooks/useSemiDark";
import useSidebar from "@/hooks/useSidebar";
import useSkin from "@/hooks/useSkin";
import { useEffect, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import SidebarLogo from "./Logo";
import Navmenu from "./Navmenu";

const Sidebar = () => {
  const scrollableNodeRef = useRef<any>();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (
        scrollableNodeRef.current.scrollTop !== "never" &&
        scrollableNodeRef.current.scrollTop > 0
      ) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    scrollableNodeRef.current.addEventListener("scroll", handleScroll);
  }, [scrollableNodeRef]);

  const [collapsed, setMenuCollapsed] = useSidebar();
  const [menuHover, setMenuHover] = useState(false);
  const [isSemiDark] = useSemiDark();
  const [skin] = useSkin();

  return (
    <div className={isSemiDark ? "dark" : ""}>
      <div
        className={` sidebar-wrapper bg-white dark:bg-slate-800 h-full    ${
          collapsed ? "w-[72px] close_sidebar" : "w-[248px]"
        }
      ${menuHover ? "sidebar-hovered" : ""}
      ${
        skin === "bordered"
          ? "border-r border-slate-200 dark:border-slate-700"
          : "shadow-base"
      }
      `}
        onMouseEnter={() => {
          setMenuHover(true);
        }}
        onMouseLeave={() => {
          setMenuHover(false);
        }}
      >
        <SidebarLogo menuHover={menuHover} />
        <div
          className={`h-[60px]  absolute top-[80px] nav-shadow z-[1] w-full transition-all duration-200 pointer-events-none ${
            scroll ? " opacity-100" : " opacity-0"
          }`}
        ></div>
        <SimpleBar
          className="sidebar-menu px-4 h-[calc(100%-80px)] overflow-hidden"
          scrollableNodeProps={{ ref: scrollableNodeRef }}
        >
          <Navmenu menus={menuItems} />
        </SimpleBar>
      </div>
    </div>
  );
};
export default Sidebar;
