import Icon from "@/components/ui/Icon";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Collapse } from "react-collapse";
const Navmenu = ({ menus }: any) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const toggleSubmenu = (i: any) => {
    if (activeSubmenu === i) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(i);
    }
  };
  const location = useRouter();
  const locationName = location.pathname;
  return (
    <>
      <ul className="overflow-hidden">
        {menus.map((item: any, i: number) => (
          <li
            key={i}
            className={clsx("single-sidebar-menu", {
              open: activeSubmenu === i,
              "item-has-children": !!item.child,
              "menu-item-active": locationName === item.link,
            })}
          >
            {!item.child && !item.isHeadr && (
              <Link className="menu-link" href={item.link}>
                <span className="menu-icon flex-grow-0">
                  <Icon icon={item.icon} />
                </span>
                <div className="text-box flex-grow ml-7">{item.title}</div>
                {item.badge && <span className="menu-badge">{item.badge}</span>}
              </Link>
            )}
            {item.isHeadr && !item.child && (
              <div className="menulabel">{item.title}</div>
            )}
            {item.child && (
              <div
                className={`menu-link ${
                  activeSubmenu === i
                    ? "parent_active not-collapsed"
                    : "collapsed"
                }`}
                onClick={() => toggleSubmenu(i)}
              >
                <div className="flex-1 flex items-start">
                  <span className="menu-icon">
                    <Icon icon={item.icon} />
                  </span>
                  <div className="text-box ml-7">{item.title}</div>
                </div>
                <div className="flex-0">
                  <div
                    className={`menu-arrow transform transition-all duration-300 ${
                      activeSubmenu === i ? " rotate-90" : ""
                    }`}
                  >
                    <Icon icon="heroicons-outline:chevron-right" />
                  </div>
                </div>
              </div>
            )}
            <Collapse isOpened={activeSubmenu === i}>
              <ul className="sub-menu ">
                {item.child?.map((subItem: any, j: number) => (
                  <li key={j} className="block pl-4 pr-1 mb-4 first:mt-4">
                    <Link href={subItem.childlink}>
                      <span
                        className={`text-slate-600 dark:text-slate-300 text-sm flex space-x-3 items-center transition-all duration-150 ${
                          locationName === subItem.childlink &&
                          " text-black dark:text-white font-medium"
                        }`}
                      >
                        <span
                          className={`h-2 w-2 rounded-full border border-slate-600 dark:border-white dark:text-white inline-block flex-none ${
                            locationName === subItem.childlink &&
                            "bg-slate-900 dark:bg-slate-300 ring-4 ring-opacity-[15%] ring-black-500 dark:ring-slate-300 dark:ring-opacity-20"
                          }`}
                        ></span>
                        <span className="flex-1 text-start dark:text-white">
                          {subItem.childtitle}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Collapse>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Navmenu;