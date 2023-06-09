import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import HeaderItem from "./HeaderItem";
import { headerItem } from "@/constant/landing";

export default function Header() {
  const [language, setLanguage] = useState<string>("ENG");
  const [fixedStyle, setFixedStyle] = useState(false);
  const [mobile, setmobile] = useState<boolean>(false);
  const size = useWindowSize();

  useEffect(() => {
    setmobile(size.width !== undefined && size.width < 991);
  }, [size.width]);
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset >= 30) {
        setFixedStyle(true);
      } else {
        setFixedStyle(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`white_header landing fixed header-wave ${
        fixedStyle ? "fix_style fixed" : ""
      }`}
    >
      <div className="container max-w-[1170px] mx-auto pl-0">
        <nav className="navbar navbar-expand-lg relative">
          <Link href="/" className="navbar-brand">
            <Image
              width={350}
              height={120}
              alt="Logo"
              src="/image/logo_bitscope.svg"
              className=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div
              className={`toggle-wrap ${!mobile && "active"}`}
              onClick={() => setmobile(!mobile)}
            >
              <span className="toggle-bar"></span>
            </div>
          </button>
          <div
            className={`${
              !mobile ? "navbar-collapse" : "navbar-collapse collapse"
            }`}
          >
            <ul className="navbar-nav ml-auto flex gap-1">
              {headerItem.map((item, index) => {
                return (
                  <HeaderItem
                    key={index}
                    name={item.name}
                    href={item.href}
                    className={item.className}
                    arrChild={item.child}
                    hasDropdown={!!item.child}
                  />
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
