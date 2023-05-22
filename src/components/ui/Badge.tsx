import React from "react";
import Icon from "@/components/ui/Icon";
interface BadgedProps {
  className?: string;
  icon?: any;
  label?: any;
  children?: any;
}
const Badge = ({
  className = "bg-danger-500 text-white",
  label,
  icon,
  children,
}: BadgedProps) => {
  return (
    <span className={`badge ${className}`}>
      {!children && (
        <span className="inline-flex items-center text-white">
          {icon && (
            <span className="inline-block ltr:mr-1 rtl:ml-1">
              <Icon icon={icon} />
            </span>
          )}
          {label}
        </span>
      )}
      {children && <span className="inline-flex items-center">{children}</span>}
    </span>
  );
};
export default Badge;
