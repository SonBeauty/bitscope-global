import Icon from "@/components/ui/Icon";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
const Breadcrumbs = () => {
  const location = useRouter();
  const locationName = location.pathname;
  return (
    <>
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

          <li className="capitalize text-slate-500 dark:text-slate-400">
            {locationName}
          </li>
        </ul>
      </div>
    </>
  );
};
export default Breadcrumbs;
