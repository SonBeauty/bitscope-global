import React from "react";
interface TitleAndContentProps {
  title?: string;
  title2?: string;
  content: React.ReactNode;
  children?: string;
  des?: string | React.ReactNode;
}
export default function TitleAndContent({
  des,
  title,
  content,
  children,
  title2,
}: TitleAndContentProps) {
  return (
    <div className="info">
      {des && <p>{des}</p>}
      {title && <h3 className="leading-normal">{title}</h3>}
      {title2 && (
        <h6 className="leading-normal text-start text-[#47397d]">{title2}</h6>
      )}
      <p>{content}</p>
      {children && <p>{children}</p>}
    </div>
  );
}