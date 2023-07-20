import CloseRed from "@/components/svg/CloseRed";
import { menuItemsMobile } from "@/constant/menuNavMobile";
import useMobileMenu from "@/hooks/useMobileMenu";
import useSidebar from "@/hooks/useSidebar";
import { listChangelogs } from "@/pages/api/changelogs";
import { RootState } from "@/store";
import { logout } from "@/store/users";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Typography,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOnClickOutside } from "usehooks-ts";
import Footer from "../footer";
import SearchModal from "../header/Tools/SearchModal";

const MobileMenu = ({ className = "custom-class" }) => {
  const [openNav, setOpenNav] = useState<number>(1);
  const user = useSelector((state: RootState) => state.users.user);
  const { data } = useQuery(["changelogs"], listChangelogs);
  const dispatch = useDispatch();
  const ref = useRef<null>(null);
  const [mobileMenu, setMobileMenu] = useMobileMenu();
  const [collapsed] = useSidebar();
  const router = useRouter();
  const location = router.pathname;
  const [open, setOpen] = useState<number | null>(null);

  const handleOpen = (value: any) => {
    if (value.link) {
      setMobileMenu(!mobileMenu);
      router.push(value.link);
      return setOpen(open === value.id ? 0 : value.id);
    }
    setOpen(open === value.id ? 0 : value.id);
    setOpenNav(open === value.id ? 0 : value.id);
  };
  useEffect(() => {
    let submenuIndex = null;
    menuItemsMobile?.map((item: any) => {
      if (item?.link === location) {
        submenuIndex = item.id;
      } else {
        if (!item?.child) return;
        const link = item?.child?.filter(
          (sp: any) =>
            sp?.childlink === location ||
            sp?.childlink === `/${location?.split("/")[1]}`
        );
        if (link?.length) return (submenuIndex = link[0]?.id);
      }
    });
    setOpen(submenuIndex);
    setOpenNav(submenuIndex ?? -1);
  }, [location]);
  const checkOpenAngBGWhite = (item: any) =>
    item?.link === location ||
    item?.childlink === location ||
    item?.childlink === `/${location.split("/")[1]}`;
  const handleHideTitle = (item: any) => {
    if (!collapsed) return item.title || item.childtitle;
    if (collapsed) return item.title || item.childtitle;
    if (collapsed) return "";
  };
  const handleChildLink = (item: string) => {
    setMobileMenu(!mobileMenu);
    router.push(item);
  };
  const handleClickOutside = () => {
    setMobileMenu(false);
  };
  const handleClickMenu = (item: string) => {
    if (item === "/login") {
      dispatch(logout());
      router.push("/login");
    }

    router.push(item);
    setMobileMenu(false);
  };
  useOnClickOutside(ref, handleClickOutside);
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-100 fixed top-0 bg-white dark:bg-slate-800 shadow-lg h-full w-full overflow-y-auto`}
    >
      <div className="flex items-center justify-between pt-4 px-4 border-b border-[#E5E9EE]">
        <div className="flex items-center ">
          <Image
            src="/image/400X200.png"
            width={164}
            height={44}
            alt="Logo"
            className="-ml-3 -mt-6"
          />
          <div className="mb-5">
            <SearchModal />
          </div>
        </div>
        <div
          onClick={() => setMobileMenu(!mobileMenu)}
          className="active:bg-red-200 rounded-full mb-4 p-1 transition-all duration-200 delay-100"
        >
          <CloseRed className="" />
        </div>
      </div>
      <Card className="items-start rounded-none w-[98%] px-0 bg-white">
        <List className="p-0 m-0 gap-0 w-full">
          {menuItemsMobile?.map((item: any, index: number) => {
            return (
              <>
                {item.child && !item.isAdmin && (
                  <Accordion
                    className={`${"bg-white"} p-0`}
                    open={openNav === item.id}
                    icon={
                      handleHideTitle(item) && (
                        <ChevronDownIcon
                          onClick={() =>
                            openNav === item.id
                              ? setOpenNav(-1)
                              : setOpenNav(item.id)
                          }
                          strokeWidth={2.5}
                          className={`mx-auto h-4 w-4 transition-transform ${
                            checkOpenAngBGWhite(item)
                              ? "text-white"
                              : "text-[#10172B]"
                          } ${openNav === item.id ? "rotate-180" : ""}`}
                        />
                      )
                    }
                  >
                    <ListItem className="p-0" selected={openNav === item.id}>
                      <AccordionHeader
                        className={`border-b-0 p-3 m-1 gap-3 rounded-md ${
                          checkOpenAngBGWhite(item)
                            ? "bg-[#0341A3]"
                            : `${
                                openNav === item.id
                                  ? "bg-[#F7F9FB]"
                                  : "bg-white"
                              }`
                        }`}
                      >
                        <ListItemPrefix className="grid-1">
                          {checkOpenAngBGWhite(item)
                            ? item.icon
                            : item.iconBlue}
                        </ListItemPrefix>
                        <Typography
                          onClick={() => handleOpen(item)}
                          className={`${
                            checkOpenAngBGWhite(item)
                              ? "text-white"
                              : "text-[#10172B]"
                          } mr-auto font-medium text-lg leading-normal font-Inter`}
                        >
                          {handleHideTitle(item)}
                        </Typography>
                      </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-0">
                      <List className="p-0 gap-0">
                        {item.child.map((item: any, index: number) => {
                          return (
                            <ListItem
                              className={`${
                                checkOpenAngBGWhite(item)
                                  ? "text-white bg-[#0341A3] "
                                  : "text-[#10172B] bg-[#F7F9FB] "
                              } pl-3 py-3 gap-3 font-Inter font-medium text-lg leading-normal my-1 px-3 rounded-md`}
                              onClick={() => handleChildLink(item.childlink)}
                              key={index}
                            >
                              <ListItemPrefix>
                                {checkOpenAngBGWhite(item)
                                  ? item.iconWhite
                                  : item.iconBlue}
                              </ListItemPrefix>
                              {handleHideTitle(item)}
                            </ListItem>
                          );
                        })}
                      </List>
                    </AccordionBody>
                  </Accordion>
                )}

                {item.child && item.isAdmin && (
                  <Accordion
                    className={`${"bg-white"} p-0`}
                    open={openNav === item.id}
                    icon={
                      handleHideTitle(item) && (
                        <ChevronDownIcon
                          onClick={() =>
                            openNav === item.id
                              ? setOpenNav(-1)
                              : setOpenNav(item.id)
                          }
                          strokeWidth={2.5}
                          className={`mx-auto h-4 w-4 transition-transform text-[#10172B] ${
                            openNav === item.id ? "rotate-180" : ""
                          }`}
                        />
                      )
                    }
                  >
                    <ListItem className="p-0 " selected={openNav === item.id}>
                      <AccordionHeader
                        className={`border-b-0 p-3 m-1 gap-[8px] rounded-md ${
                          checkOpenAngBGWhite(item)
                            ? "bg-[#0341A3]"
                            : `${
                                openNav === item.id
                                  ? "bg-[#F7F9FB]"
                                  : "bg-white"
                              }`
                        }`}
                      >
                        <ListItemPrefix className="grid-1">
                          {checkOpenAngBGWhite(item)
                            ? item.icon
                            : item.iconBlue}
                        </ListItemPrefix>
                        <Typography
                          onClick={() => handleOpen(item)}
                          className={` text-[#FF1010] mr-auto font-medium text-lg leading-normal font-Inter`}
                        >
                          {handleHideTitle(item)}
                        </Typography>
                      </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-0">
                      <List className="p-0 gap-0">
                        {item.child.map((item: any, index: number) => {
                          return (
                            <ListItem
                              className={`${
                                checkOpenAngBGWhite(item)
                                  ? "text-white bg-[#0341A3] "
                                  : "text-[#10172B] bg-[#F7F9FB] "
                              } pl-5 py-3 gap-4 font-Inter font-medium text-lg leading-normal my-1 px-3 rounded-md`}
                              onClick={() => handleChildLink(item.childlink)}
                              key={index}
                            >
                              <ListItemPrefix>
                                {checkOpenAngBGWhite(item)
                                  ? item.iconWhite
                                  : item.iconBlue}
                              </ListItemPrefix>
                              {handleHideTitle(item)}
                            </ListItem>
                          );
                        })}
                      </List>
                    </AccordionBody>
                  </Accordion>
                )}

                {!item.child && (
                  <ListItem
                    className={`${
                      checkOpenAngBGWhite(item)
                        ? "bg-[#0341A3] text-white"
                        : "bg-inherit text-[#10172B]"
                    } font-semibold m-1 rounded-md font-Inter gap-3`}
                    onClick={() => handleClickMenu(item.link)}
                  >
                    <ListItemPrefix>
                      {checkOpenAngBGWhite(item) ? item.iconBlue : item.icon}
                    </ListItemPrefix>
                    {handleHideTitle(item)}
                    {item.badge && data && (
                      <ListItemSuffix className="text-[#10172B]">
                        <span
                          className={`${
                            checkOpenAngBGWhite(item)
                              ? "border-[#0341A3] bg-white text-[#0341A3]"
                              : "border-[#0341A3] bg-[#0341A3] text-white"
                          } border-2  px-2 py-[0.5px] rounded-full`}
                        >
                          {data[0]?.name?.replace("Changelog ", "")}
                        </span>
                      </ListItemSuffix>
                    )}
                  </ListItem>
                )}
              </>
            );
          })}
        </List>
        <div className="bg-[#F7F9FB]">
          <Footer mobile />
        </div>
      </Card>
    </div>
  );
};
export default MobileMenu;
