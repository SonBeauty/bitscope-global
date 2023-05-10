import React from "react";
interface TitleAndContentProps {
  title: string;
  content: React.ReactNode;
  children?: string;
}
export default function TitleAndContent({
  title,
  content,
  children,
}: TitleAndContentProps) {
  return (
    <div className="info">
      <h3 className="leading-normal">{title}</h3>
      <p>{content}</p>
      <p>{children}</p>
    </div>
  );
}