import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import { menuItems } from "@/constant/data";
import useMobileMenu from "@/hooks/useMobileMenu";
import Image from "next/image";
import Link from "next/link";
import SimpleBar from "simplebar-react";
import Navmenu from "./Navmenu";
const MobileMenu = ({ className = "custom-class" }) => {
  const scrollableNodeRef = useRef<any>();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (scrollableNodeRef.current.scrollTop > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    scrollableNodeRef.current.addEventListener("scroll", handleScroll);
  }, [scrollableNodeRef]);
  const [mobileMenu, setMobileMenu] = useMobileMenu();
  return (
    <div
      className={`${className} fixed top-0 pt-5 bg-white dark:bg-slate-800 shadow-lg  h-full w-[248px]`}
    >
      <div className="logo-segment flex justify-between items-center bg-white dark:bg-slate-800 z-[9] h-[85px]  px-4 ">
        <Link href="/dashboard">
          <p className="flex items-center space-x-4">
            <p className="logo-icon">
              <Image
                width={250}
                height={80}
                alt="logo"
                src="/image/1200X628-SVG-NONBACKGROUND.png"
                className="mx-auto relative -mt-[73px]"
              />
            </p>
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="cursor-pointer text-slate-900 dark:text-white text-2xl"
        >
          <Icon icon="heroicons:x-mark" />
        </button>
      </div>
      <div
        className={`h-[60px]  absolute top-[80px] nav-shadow z-[1] w-full transition-all duration-200 pointer-events-none ${
          scroll ? " opacity-100" : " opacity-0"
        }`}
      ></div>
      <SimpleBar
        className="sidebar-menu px-4 h-[calc(100%-80px)] "
        scrollableNodeProps={{ ref: scrollableNodeRef }}
      >
        <Navmenu menus={menuItems} />
      </SimpleBar>
    </div>
  );
};
export default MobileMenu;
