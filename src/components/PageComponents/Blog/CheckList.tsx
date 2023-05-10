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
          <li key={index}>
            <p>
              <span className="icon">
                <CheckCircleIcon className="h-6 w-6 text-purple-500" />
              </span>
              {item.content}
            </p>
          </li>
        );
      })}
    </ul>
  );
}