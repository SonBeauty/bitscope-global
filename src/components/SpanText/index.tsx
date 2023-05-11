import { useRouter } from "next/router";
import React from "react";
interface SpanTextProps {
  redirectLink: string;
  content: string;
  className?: string;
  color?: string;
}
export default function SpanText({
  redirectLink,
  content,
  color = "text-slate-500",
  className,
}: SpanTextProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(redirectLink);
  };
  return (
    <span
      onClick={() => handleClick()}
      className={`${className} ${color} cursor-pointer `}
    >
      {content}
    </span>
  );
}