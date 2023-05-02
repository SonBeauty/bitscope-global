import Footer from "@/components/partials/footer";
import Header from "@/components/partials/header";
import Sidebar from "@/components/partials/sidebar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import useContentWidth from "@/hooks/useContentWidth";
import useMenuHidden from "@/hooks/useMenuHidden";
import useMenulayout from "@/hooks/useMenulayout";
import useMobileMenu from "@/hooks/useMobileMenu";
import useSidebar from "@/hooks/useSidebar";
import useWidth from "@/hooks/useWidth";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import MobileMenu from "../partials/sidebar/MobileMenu";
interface LayoutDashBoardProps {
  children: React.ReactNode;
}
const LayoutDashBoard = ({ children }: LayoutDashBoardProps) => {
  const { width, breakpoints } = useWidth();
  const [collapsed] = useSidebar();
  const switchHeaderClass = () => {
    if (menuType === "horizontal" || menuHidden) {
      return "ml-0 rtl:mr-0";
    } else if (collapsed) {
      return "pl-[72px] rtl:mr-[72px]";
    } else {
      return "pl-[248px] rtl:mr-[248px]";
    }
  };
  const [contentWidth] = useContentWidth();
  const [menuType] = useMenulayout();
  const [menuHidden] = useMenuHidden();
  const [mobileMenu, setMobileMenu] = useMobileMenu();
  return (
    <>
      <ToastContainer />
      <Header className={width > breakpoints.xl ? switchHeaderClass() : ""} />
      {menuType === "vertical" && width > breakpoints.xl && !menuHidden && (
        <Sidebar />
      )}

      <MobileMenu
        className={`${
          width < breakpoints.xl && mobileMenu
            ? "left-0 visible opacity-100  z-[9999]"
            : "left-[-300px] invisible opacity-0  z-[-999] "
        }`}
      />
      {width < breakpoints.xl && mobileMenu && (
        <div className="overlay bg-slate-900/50 backdrop-filter backdrop-blur-sm opacity-100 fixed inset-0 z-[999]"></div>
      )}

      <div
        className={`content-wrapper transition-all duration-150 ${
          width > breakpoints.xl ? switchHeaderClass() : ""
        }`}
      >
        {/* md:min-h-screen will h-full*/}
        <div className="page-content page-min-height  ">
          <div
            className={
              contentWidth === "boxed" ? "container mx-auto" : "container-fluid"
            }
          >
            <Suspense>
              {children}
            </Suspense>
          </div>
        </div>
      </div>
      {width > breakpoints.md && (
        <Footer className={width > breakpoints.xl ? switchHeaderClass() : ""} />
      )}
    </>
  );
};
export default LayoutDashBoard;
