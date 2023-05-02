import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
interface ItemRender {
  name: string;
  link: string;
  blank?: boolean;
}
interface HeaderItems {
  href: string;
  name: string;
  className?: string;
  hasDropdown?: boolean;
  arrChild: ItemRender[] | undefined;
}
export default function HeaderItem({
  href = "#",
  name,
  className,
  hasDropdown,
  arrChild,
}: HeaderItems) {
  return (
    <li
      className={`nav-item ${hasDropdown && "has_dropdown"}`}
    >
      <Link href={href} className={`${className} nav-link`}>
        {name}
      </Link>
      {hasDropdown && (
        <>
          <span className="mt-2 drp_btn lg:!mt-0">
            <ChevronDownIcon className="h-4 w-4 text-black lg:text-white font-black" />
          </span>
          <div className={`sub_menu`}>
            <ul>
              {arrChild?.map((item: ItemRender, index: number) => {
                return (
                  <li className="w-full" key={index}>
                    <Link
                      href={item.link}
                      className="cursor-pointer block"
                      target={item.blank ? "_blank" : "_parent"}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </li>
  );
}
