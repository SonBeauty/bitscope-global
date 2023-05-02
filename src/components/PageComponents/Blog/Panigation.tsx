import { useState } from "react";
const NUMBERPAGE = 1;
export const Panigation = () => {
  const [pageIndex, setPageIndex] = useState<number>(0);

  const handleCardClick = (index: number) => {
    window.scrollTo(0, 0);
    if (pageIndex === index) {
      setPageIndex(-1);
    } else {
      setPageIndex(index);
    }
  };

  const previousPageHandler = () => {
    window.scrollTo(0, 0);
    setPageIndex(pageIndex - 1);
  };
  const nextPageHandler = () => {
    window.scrollTo(0, 0);
    setPageIndex(pageIndex + 1);
  };

  return (
    <div className="pagination_block">
      <ul>
        <li className="cursor-pointer">
          <a className="prev" onClick={previousPageHandler}>
            <i className="icofont-arrow-left"></i> Prev
          </a>
        </li>
        {Array(NUMBERPAGE)
          .fill("")
          .map((_, index: number) => {
            return (
              <li key={index} className="cursor-pointer">
                <a
                  className={`${pageIndex === index ? "active" : ""}`}
                  onClick={() => handleCardClick(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            );
          })}
        <li className="cursor-pointer">
          <a className="next" onClick={nextPageHandler}>
            Next <i className="icofont-arrow-right"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
