import Dropdown from "@/components/ui/Dropdown";
import Icon from "@/components/ui/Icon";
import { RootState } from "@/store";
import { logout } from "@/store/users";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
const ProfileLabel = () => {
  const user = useSelector((state: RootState) => state.users.user);
  return (
    <div className="flex items-center">
      <div className="flex-1 mr-[10px] rtl:ml-[10px]">
        <div className="lg:h-8 lg:w-8 h-7 w-7 rounded-full">
          <Image
            src="/image/used01.png"
            alt=""
            width={100}
            height={100}
            className="block w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex-none text-slate-600 dark:text-white text-sm font-normal items-center lg:flex hidden overflow-hidden text-ellipsis whitespace-nowrap">
        <span className="overflow-hidden text-inherit text-ellipsis whitespace-nowrap w-[85px] block">
          {user?.name}
        </span>
        <span className="text-base inline-block ml-[10px] rtl:mr-[10px]">
          <Icon icon="heroicons-outline:chevron-down"></Icon>
        </span>
      </div>
    </div>
  );
};
const Profile = () => {
  const navigate = useRouter();
  const dispatch = useDispatch();
  const ProfileMenu = [
    {
      label: "Profile",
      icon: "heroicons-outline:user",

      action: () => {
        return navigate.push("/user");
      },
    },
    {
      label: "Logout",
      icon: "heroicons-outline:login",
      action: () => {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        dispatch(logout());
        navigate.push("/login");
      },
    },
  ];
  return (
    <Dropdown label={ProfileLabel()} classMenuItems="w-[180px] top-[58px]">
      {ProfileMenu.map((item, index) => (
        <Menu.Item key={index}>
          {({ active }) => (
            <div
              onClick={() => item.action()}
              className={`${
                active
                  ? "bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-white dark:bg-opacity-50"
                  : "text-slate-600 dark:text-white"
              } block`}
            >
              <div className={`block cursor-pointer px-4 py-2`}>
                <div className="flex items-center">
                  <span className="block text-xl mr-3 rtl:ml-3 dark:text-white">
                    <Icon icon={item.icon} />
                  </span>
                  <span className="block text-sm dark:text-white">{item.label}</span>
                </div>
              </div>
            </div>
          )}
        </Menu.Item>
      ))}
    </Dropdown>
  );
};
export default Profile;