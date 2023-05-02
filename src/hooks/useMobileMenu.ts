import { RootState } from "@/store";
import { handleMobileMenu } from "@/store/layout";
import { useDispatch, useSelector } from "react-redux";
const useMobileMenu = (): [boolean, (val: any) => void] => {
  const dispatch = useDispatch();
  const mobileMenu = useSelector((state: RootState) => state.layout.mobileMenu);
  const setMobileMenu = (val: any) => dispatch(handleMobileMenu(val));
  return [mobileMenu, setMobileMenu];
};
export default useMobileMenu;