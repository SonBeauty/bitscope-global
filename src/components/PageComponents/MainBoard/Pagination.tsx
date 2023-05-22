import React from "react";
export default function PaginationMainBoard() {
  return (
    <nav
      className="flex flex-col items-center justify-center p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
      aria-label="Table navigation"
    >
      <ul className="inline-flex gap-2 items-stretch -space-x-px">
        <li className="h-2 w-2 bg-black-600 rounded-full cursor-pointer"></li>
        <li className="h-2 w-2 bg-gray-400 rounded-full cursor-pointer"></li>
        <li className="h-2 w-2 bg-gray-400 rounded-full cursor-pointer"></li>
      </ul>
    </nav>
  );
}