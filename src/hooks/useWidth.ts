import { useEffect, useMemo, useState } from "react";
import { useWindowSize } from "./useWindowSize";
export default function useWidth() {
  const widths = useWindowSize();
  const [width, setWidth] = useState<number>(1281);
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  };
  useEffect(() => {
    if (widths.width !== undefined) setWidth(widths.width);
  }, [widths]);
  useMemo(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return { width, breakpoints };
}