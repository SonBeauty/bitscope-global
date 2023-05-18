import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
interface RenderProps {
  content: string;
}
interface CheckListProps {
  arrRender: RenderProps[];
}
export default function CheckList({ arrRender }: CheckListProps) {
  return (
    <ul>
      {arrRender.map((item: RenderProps, index: number) => {
        return (
          <li key={index} className="leading-normal py-1">
            <p className="flex items-center">
              <span className="icon">
                <CheckCircleIcon className="h-6 w-6 text-purple-500" />
              </span>
              <span className="ml-3">{item.content}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
}