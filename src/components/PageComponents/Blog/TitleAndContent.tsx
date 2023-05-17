import React from "react";
interface TitleAndContentProps {
  title?: string;
  content: React.ReactNode;
  children?: string;
  des?: string | React.ReactNode;
}
export default function TitleAndContent({
  des,
  title,
  content,
  children,
}: TitleAndContentProps) {
  return (
    <div className="info">
      {des && <p>{des}</p>}
      {title && <h3 className="leading-normal">{title}</h3>}
      <p>{content}</p>
      {children && <p>{children}</p>}
    </div>
  );
}
