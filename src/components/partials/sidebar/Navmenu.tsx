import useMobileMenu from "@/hooks/useMobileMenu";
import useSidebar from "@/hooks/useSidebar";
import useWidth from "@/hooks/useWidth";
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
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MobileMenu from "./MobileMenu";
const Navmenu = ({ menus, menuHover }: any) => {
  const user = useSelector((state: RootState) => state.users.user);
  const { data } = useQuery(["changelogs"], listChangelogs);
  const dispatch = useDispatch();
  const { width } = useWidth();
  const [collapsed] = useSidebar();
  const router = useRouter();
  const location = router.pathname;
  const [open, setOpen] = useState<number | null>(null);
  const [openNav, setOpenNav] = useState<number>();
  const [mobileMenu, setMobileMenu] = useMobileMenu();
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
    menus.map((item: any) => {
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
    setOpenNav(submenuIndex || -1);
  }, [location, menus]);
  const checkOpenAngBGWhite = (item: any) =>
    item?.link === location ||
    item?.childlink === location ||
    item?.childlink === `/${location.split("/")[1]}`;
  const handleHideTitle = (item: any) => {
    if (!collapsed) return item.title || item.childtitle;
    if (collapsed && menuHover) return item.title || item.childtitle;
    if (collapsed) return "";
  };
  const handleChildLink = (item: string) => {
    setMobileMenu(!mobileMenu);
    router.push(item);
  };
  const handleClickMenu = (item: string) => {
    if (item === "/login") {
      dispatch(logout());
      router.push("/login");
    }

    router.push(item);
    setMobileMenu(false);
  };
  if (width < 1220) {
    return <MobileMenu />;
  }
  return (
    <Card className="h-screen items-start rounded-none w-full px-0 shadow-xl bg-[#0046B0]">
      <List className="p-0 m-0 gap-0 min-w-[248px]">
        {menus.map((item: any, index: number) => {
          return (
            <>
              {item.child && !item.isAdmin && (
                <Accordion
                  className={`${
                    checkOpenAngBGWhite(item) ? "bg-white" : "bg-[#0341A3]"
                  } p-0`}
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
                        className={`mx-auto h-4 w-4 z-10 transition-transform ${
                          checkOpenAngBGWhite(item)
                            ? "text-[#0046B0]"
                            : "text-white"
                        } ${openNav === item.id ? "rotate-180" : ""}`}
                      />
                    )
                  }
                >
                  <ListItem className="p-0" selected={openNav === item.id}>
                    <AccordionHeader className="border-b-0 px-4 py-3 gap-[10px]">
                      <ListItemPrefix className="grid-1">
                        {checkOpenAngBGWhite(item) ? item.iconBlue : item.icon}
                      </ListItemPrefix>
                      <Typography
                        onClick={() => handleOpen(item)}
                        className={`${
                          checkOpenAngBGWhite(item)
                            ? "text-[#0046B0]"
                            : "text-white"
                        } mr-auto font-medium text-sm leading-5`}
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
                                ? "text-[#0046B0] bg-white"
                                : "text-white bg-[#0046B0]"
                            } pl-4 py-3 gap-2 rounded-none`}
                            onClick={() => handleChildLink(item.childlink)}
                            key={index}
                          >
                            <ListItemPrefix>
                              {checkOpenAngBGWhite(item)
                                ? item.iconBlue
                                : item.iconWhite}
                            </ListItemPrefix>
                            <span className="font-medium text-sm leading-5 font-Inter text-inherit">
                              {handleHideTitle(item)}
                            </span>
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionBody>
                </Accordion>
              )}
              {item.child && user?.role === "admin" && item.isAdmin && (
                <Accordion
                  className={`${
                    checkOpenAngBGWhite(item) ? "bg-white" : "bg-[#FF4D4F]"
                  } p-0`}
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
                            ? "text-[#0046B0]"
                            : "text-white"
                        } ${openNav === item.id ? "rotate-180" : ""}`}
                      />
                    )
                  }
                >
                  <ListItem className="p-0 " selected={openNav === item.id}>
                    <AccordionHeader className="border-b-0 p-3  gap-[10px]">
                      <ListItemPrefix className="grid-1">
                        {checkOpenAngBGWhite(item) ? item.iconBlue : item.icon}
                      </ListItemPrefix>
                      <Typography
                        onClick={() => handleOpen(item)}
                        className={`${
                          checkOpenAngBGWhite(item)
                            ? "text-[#0046B0]"
                            : "text-white"
                        } mr-auto font-medium text-sm leading-5`}
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
                                ? "text-[#0046B0] bg-white"
                                : "text-white bg-[#0046B0]"
                            } pl-5 py-3 gap-[10px] rounded-none`}
                            onClick={() => handleChildLink(item.childlink)}
                            key={index}
                          >
                            <ListItemPrefix>
                              {checkOpenAngBGWhite(item)
                                ? item.iconBlue
                                : item.iconWhite}
                            </ListItemPrefix>
                            <span className="font-medium text-sm leading-5 text-inherit font-Inter">
                              {" "}
                              {handleHideTitle(item)}
                            </span>
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
                      ? "bg-white text-[#0341A3]"
                      : "bg-[#0341A3] text-white"
                  } rounded-none font-Inter font-medium text-sm gap-[10px]`}
                  onClick={() => handleClickMenu(item.link)}
                >
                  <ListItemPrefix className="pl-1">
                    {checkOpenAngBGWhite(item) ? item.iconBlue : item.icon}
                  </ListItemPrefix>
                  {handleHideTitle(item)}
                  {item.badge && data && (
                    <ListItemSuffix className="text-white">
                      <span
                        className={`${
                          checkOpenAngBGWhite(item)
                            ? "border-[#0341A3] bg-[#0341A3] text-white"
                            : "border-white bg-white text-[#0341A3]"
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
    </Card>
  );
};
export default Navmenu;
