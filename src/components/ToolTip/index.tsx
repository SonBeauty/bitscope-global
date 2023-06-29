"use client";
import { Tooltip } from "flowbite-react";

interface TooltipProps {
  content: React.ReactNode | string;
  placement: "top" | "right" | "bottom" | "left";
  children: React.ReactNode | string;
  className?: string;
  theme?: "auto" | "dark" | "light" | undefined;
}

export default function ToolTip({
  content,
  placement,
  children,
  className,
  theme = "dark",
}: TooltipProps) {
  return (
    <Tooltip
      content={content}
      placement={placement}
      className={
        className ??
        "font-Inter text-xs font-semibold leading-[1rem] text-white rounded-md bg-[#28303F] p-[0.62rem] min-w-min"
      }
      style={theme}
    >
      {children}
    </Tooltip>
  );
}
