import React, { useState } from "react";
interface SidebarLinkGroupProps {
  children: any;
  activeCondition: boolean;
}
const SidebarLinkGroup = ({
  children,
  activeCondition,
}: SidebarLinkGroupProps) => {
  const [open, setOpen] = useState(activeCondition);
  const handleClick = () => {
    setOpen(!open);
  };
  return <li>{children(handleClick, open)}</li>;
};
export default SidebarLinkGroup;
