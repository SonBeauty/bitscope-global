import { RootState } from "@/store";
import { handleSidebarCollapsed } from "@/store/layout";
import { useDispatch, useSelector } from "react-redux";
const useSidebar = () => {
  const dispatch = useDispatch();
  const collapsed = useSelector((state: RootState) => state.layout.isCollapsed);
  const setMenuCollapsed = (val: any) => dispatch(handleSidebarCollapsed(val));
  return [collapsed, setMenuCollapsed];
};
export default useSidebar;