import { RootState } from "@/store";
import { handleSemiDarkMode } from "@/store/layout";
import { useDispatch, useSelector } from "react-redux";
const useSemiDark = () => {
  const dispatch = useDispatch();
  const isSemiDark = useSelector(
    (state: RootState) => state.layout.semiDarkMode
  );
  const setSemiDark = (val: any) => dispatch(handleSemiDarkMode(val));
  return [isSemiDark, setSemiDark];
};
export default useSemiDark;