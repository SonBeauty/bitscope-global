import { RootState } from "@/store";
import { handleType } from "@/store/layout";
import { useDispatch, useSelector } from "react-redux";
const useMenuLayout = () => {
  const dispatch = useDispatch();
  const menuType = useSelector((state: RootState) => state.layout.type);
  const setMenuLayout = (value: any) => {
    dispatch(handleType(value));
  };
  return [menuType, setMenuLayout];
};
export default useMenuLayout;