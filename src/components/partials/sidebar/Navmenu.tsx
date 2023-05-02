import Icon from "@/components/ui/Icon";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import useMobileMenu from "@/hooks/useMobileMenu";
import { useRouter } from "next/router";
const Navmenu = ({ menus }: any) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const toggleSubmenu = (i: any) => {
    if (activeSubmenu === i) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(i);
    }
  };
  const [mobileMenu, setMobileMenu] = useMobileMenu();
  const location = useRouter();
  const locationName = location.pathname;
  useEffect(() => {
    let submenuIndex = null;
    menus.map((item: any, i: number) => {
      if (!item.child) return;
      if (item.link === locationName) {
        submenuIndex = null;
      } else {
        const ciIndex = item.child.findIndex(
          (ci: any) => ci.childlink === locationName
        );
        if (ciIndex !== -1) {
          submenuIndex = i;
        }
      }
    });
    document.title = `BitScope  | ${locationName}`;
    setActiveSubmenu(submenuIndex);
  }, [locationName, menus, mobileMenu, setMobileMenu]);
  return (
    <>
      <ul>
        {menus.map((item: any, i: number) => (
          <li
            key={i}
            className={` single-sidebar-menu
              ${item.child ? "item-has-children" : ""}
              ${activeSubmenu === i ? "open" : ""}
             }`}
          >
            {!item.child && !item.isHeadr && (
              <Link className="menu-link" href={item.link}>
                <span className="menu-icon flex-grow-0">
                  <Icon icon={item.icon} />
                </span>
                <div className="text-box flex-grow">{item.title}</div>
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
                  <div className="text-box">{item.title}</div>
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
                        className={`${"text-slate-600 dark:text-slate-300"} text-sm flex space-x-3 items-center transition-all duration-150`}
                      >
                        <span
                          className=" h-2 w-2 rounded-full border border-slate-600 dark:border-white inline-block flex-none`}
                          "
                        ></span>
                        <span className="flex-1">{subItem.childtitle}</span>
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