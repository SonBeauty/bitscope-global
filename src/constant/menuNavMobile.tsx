import AdminSVG from "@/components/svg/NavMenuMobile/AdminSVG";
import BitAuthentionSVG from "@/components/svg/NavMenuMobile/BitAuthentionSVG";
import BitMonitorSVG from "@/components/svg/NavMenuMobile/BitMonitorSVG";
import BitProbeSVG from "@/components/svg/NavMenuMobile/BitProbeSVG";
import BitSpyingSVG from "@/components/svg/NavMenuMobile/BitSpyingSVG";
import BitTrackingSVG from "@/components/svg/NavMenuMobile/BitTrackingSVG";
import ChangeLogAdminSVG from "@/components/svg/NavMenuMobile/ChangeLogAdminSVG";
import ChangelogsSVG from "@/components/svg/NavMenuMobile/ChangelogsSVG";
import CompanySettingSVG from "@/components/svg/NavMenuMobile/CompanySettingSVG";
import CookieSVG from "@/components/svg/NavMenuMobile/CookieSVG";
import DashBoardSVG from "@/components/svg/NavMenuMobile/DashBoardSVG";
import InfluencerSVG from "@/components/svg/NavMenuMobile/InfluencerSVG";
import LogoutSVG from "@/components/svg/NavMenuMobile/LogoutSVG";
import PaymentSettingSVG from "@/components/svg/NavMenuMobile/PaymentSettingSVG";
import ProfileSettingSVG from "@/components/svg/NavMenuMobile/ProfileSettingSVG";
import ProxySVG from "@/components/svg/NavMenuMobile/ProxySVG";

import ReferalSVG from "@/components/svg/NavMenuMobile/ReferalSVG";
import SettingSVG from "@/components/svg/NavMenuMobile/SettingSVG";
import Image from "next/image";

export const menuItemsMobile = [
  {
    id: 1,
    title: "Dashboards",
    icon: <DashBoardSVG fillOne="white" fillTwo="#0341A3" />,
    iconBlue: <DashBoardSVG fillOne="#0341A3" fillTwo="white" />,
    link: "/dashboard",
    child: [
      {
        id: 1,
        childtitle: "Bit Authentication",
        childlink: "/authentication",
        iconBlue: <BitAuthentionSVG fillOne="#0341A3" />,
        iconWhite: <BitAuthentionSVG fillOne="white" />,
      },
      {
        id: 1,
        childtitle: "Bit Monitor",
        childlink: "/monitor",
        iconBlue: <BitMonitorSVG fillOne="#0341A3" />,
        iconWhite: <BitMonitorSVG fillOne="white" />,
      },
      {
        id: 1,
        childtitle: "Bit Probe",
        childlink: "/probe",
        iconBlue: <BitProbeSVG fillOne="#0341A3" />,
        iconWhite: <BitProbeSVG fillOne="white" />,
      },
      {
        id: 1,
        childtitle: "Bit Spying",
        childlink: "/spying",
        iconBlue: <BitSpyingSVG fillOne="#0341A3" />,
        iconWhite: <BitSpyingSVG fillOne="white" />,
      },
      {
        id: 1,
        childtitle: "Bit Tracking",
        childlink: "/tracking",
        iconBlue: <BitTrackingSVG fillOne="#0341A3" />,
        iconWhite: <BitTrackingSVG fillOne="white" />,
      },
    ],
  },
  {
    id: 2,
    title: "Changelog",
    icon: <ChangelogsSVG fillOne="#0341A3" />,
    iconBlue: <ChangelogsSVG fillOne="white" />,
    link: "/changelog",
    badge: "changelogs",
  },
  {
    id: 3,
    title: "Referral",
    icon: <ReferalSVG fillOne="#0341A3" />,
    iconBlue: <ReferalSVG fillOne="white" />,
    link: "/referral",
  },
  {
    id: 4,
    title: "Setting",
    iconBlue: <SettingSVG fillOne="#0341A3" />,
    icon: <SettingSVG fillOne="white" />,
    link: "/user",
    child: [
      {
        id: 4,
        childtitle: "Profile Settings",
        childlink: "/user/edit",
        iconBlue: <ProfileSettingSVG fillOne="#0341A3" />,
        iconWhite: <ProfileSettingSVG fillOne="white" />,
      },
      {
        id: 4,
        childtitle: "Company Settings",
        childlink: "/company-setting",
        iconBlue: <CompanySettingSVG fillOne="#0341A3" />,
        iconWhite: <CompanySettingSVG fillOne="white" />,
      },
      {
        id: 4,
        childtitle: "Payment Settings",
        childlink: "/payment-setting",
        iconBlue: <PaymentSettingSVG fillOne="#0341A3" fillTwo="white" />,
        iconWhite: <PaymentSettingSVG fillOne="white" fillTwo="#0341A3" />,
      },
    ],
  },
  {
    id: 5,
    title: "Admin",
    icon: <AdminSVG fillOne="#FF1010" />,
    iconBlue: <AdminSVG fillOne="#FF1010" />,
    isAdmin: true,
    child: [
      {
        id: 5,
        childtitle: "Proxy",
        childlink: "/proxy",
        iconBlue: <ProxySVG fillOne="#0341A3" />,
        iconWhite: <ProxySVG fillOne="white" />,
      },
      {
        id: 5,
        childtitle: "Cookie",
        childlink: "/cookie",
        iconBlue: <CookieSVG fillOne="#0341A3" />,
        iconWhite: <CookieSVG fillOne="white" />,
      },
      {
        id: 5,
        childtitle: "Influencers",
        childlink: "/influencer",
        iconBlue: <InfluencerSVG fillOne="#0341A3" />,
        iconWhite: <InfluencerSVG fillOne="white" />,
      },
      {
        id: 5,
        childtitle: "Changelogs",
        childlink: "/changelogs",
        iconBlue: <ChangeLogAdminSVG fillOne="#0341A3" />,
        iconWhite: <ChangeLogAdminSVG fillOne="white" />,
      },
    ],
  },
  {
    id: 6,
    title: "Logout",
    iconBlue: <LogoutSVG color="#FF1010" />,
    icon: <LogoutSVG color="#FF1010" />,
    link: "/login",
  },
];
