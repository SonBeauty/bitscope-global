import { useSelector, useDispatch } from "react-redux";
import { handleContentWidth } from "@/store/layout";
import { RootState } from "@/store";
const useContentWidth = () => {
  const dispatch = useDispatch();
  const contentWidth = useSelector(
    (state: RootState) => state.layout.contentWidth
  );
  const setContentWidth = (val: any) => dispatch(handleContentWidth(val));
  return [contentWidth, setContentWidth];
};
export default useContentWidth;