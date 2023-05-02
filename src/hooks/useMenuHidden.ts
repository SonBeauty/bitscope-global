import { RootState } from "@/store";
import { handleMenuHidden } from "@/store/layout";
import { useDispatch, useSelector } from "react-redux";
const useMenuHidden = () => {
  const dispatch = useDispatch();
  const menuHidden = useSelector((state: RootState) => state.layout.menuHidden);
  const setMenuHidden = (value: any) => {
    dispatch(handleMenuHidden(value));
  };
  return [menuHidden, setMenuHidden];
};
export default useMenuHidden;