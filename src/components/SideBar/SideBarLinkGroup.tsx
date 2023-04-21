import React, { useState } from "react";
interface SidebarLinkGroupProps {
  children: any;
  activeCondition: boolean;
}
export default function SidebarLinkGroup({
  children,
  activeCondition,
}: SidebarLinkGroupProps) {
  const [open, setOpen] = useState(activeCondition);
  const handleClick = () => {
    setOpen(!open);
  };
  return <li>{children(handleClick, open)}</li>;
}
