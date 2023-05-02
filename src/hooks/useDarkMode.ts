import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleDarkMode } from "@/store/layout";
import { RootState } from "@/store";
const useDarkmode = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.layout.darkMode);
  const setDarkMode = (mode: string) => {
    dispatch(handleDarkMode(mode));
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const body = window.document.body;
      const classNames = {
        dark: "dark",
        light: "light",
      };
      if (isDark) {
        body.classList.add(classNames.dark);
        body.classList.remove(classNames.light);
      } else {
        body.classList.add(classNames.light);
        body.classList.remove(classNames.dark);
      }
    }
  }, [isDark]);
  return [isDark, setDarkMode];
};
export default useDarkmode;