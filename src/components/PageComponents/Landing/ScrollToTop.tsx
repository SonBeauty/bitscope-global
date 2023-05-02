import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const toTop = document.querySelector(".go_top");
    function handleScroll() {
      const topPos = window.pageYOffset;
      if (topPos > 750) {
        setOpacity(1);
      } else {
        setOpacity(0);
      }
    }
    function handleClick() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (toTop) {
      toTop.addEventListener("click", handleClick);
      window.addEventListener("scroll", handleScroll);

      return () => {
        toTop.removeEventListener("click", handleClick);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <div className="go_top" style={{ opacity }} aria-label="Go to top">
      <span>
        <Image width={50} height={50} alt="app" src="/image/go_top.png" />
      </span>
    </div>
  );
}
