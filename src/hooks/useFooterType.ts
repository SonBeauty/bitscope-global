import { useSelector, useDispatch } from "react-redux";
import { handleFooterType } from "@/store/layout";
import { RootState } from "@/store";
const useFooterType = () => {
  const dispatch = useDispatch();
  const footerType = useSelector((state: RootState) => state.layout.footerType);
  const setFooterType = (val: any) => dispatch(handleFooterType(val));
  return [footerType, setFooterType];
};
export default useFooterType;