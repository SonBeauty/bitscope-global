import Icon from "@/components/ui/Icon";
import { menuItems } from "@/constant/data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
const Breadcrumbs = () => {
  const location = useRouter();
  const locationName = location.pathname;

  const [isHide, setIsHide] = useState<boolean>();
  const [groupTitle, setGroupTitle] = useState("");
  useEffect(() => {
    const currentMenuItem = menuItems.find(
      (item) => item.link === locationName
    );
    const currentChild = menuItems.find((item) =>
      item.child?.find((child) => child.childlink === locationName)
    );
    if (currentMenuItem && currentMenuItem.isHide !== undefined) {
      setIsHide(currentMenuItem.isHide);
    } else if (currentChild) {
      setIsHide(currentChild?.isHide || false);
      setGroupTitle(currentChild?.title);
    }
  }, [location, locationName]);
  return (
    <>
      {!isHide ? (
        <div className="md:mb-6 mb-4 flex space-x-3 rtl:space-x-reverse">
          <ul className="breadcrumbs">
            <li className="text-primary-500">
              <Link href="/dashboard" className="text-lg">
                <Icon icon="heroicons-outline:home" />
              </Link>
              <span className="breadcrumbs-icon rtl:transform rtl:rotate-180">
                <ChevronRightIcon className="w-6 h-6" />
              </span>
            </li>
            {groupTitle && (
              <li className="text-primary-500">
                <button type="button" className="capitalize">
                  {groupTitle}
                </button>
                <span className="breadcrumbs-icon rtl:transform rtl:rotate-180">
                  <ChevronRightIcon className="w-6 h-6" />
                </span>
              </li>
            )}
            <li className="capitalize text-slate-500 dark:text-slate-400">
              {locationName}
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};
export default Breadcrumbs;