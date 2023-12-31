import AdminSVG from "@/components/svg/NavMenuPC/AdminSVG";
import BitAuthentionSVG from "@/components/svg/NavMenuPC/BitAuthentionSVG";
import BitMonitorSVG from "@/components/svg/NavMenuPC/BitMonitorSVG";
import BitProbeSVG from "@/components/svg/NavMenuPC/BitProbeSVG";
import BitSpyingSVG from "@/components/svg/NavMenuPC/BitSpyingSVG";
import BitTrackingSVG from "@/components/svg/NavMenuPC/BitTrackingSVG";
import ChangeLogAdminSVG from "@/components/svg/NavMenuPC/ChangeLogAdminSVG";
import ChangelogsSVG from "@/components/svg/NavMenuPC/ChangelogsSVG";
import CompanySettingSVG from "@/components/svg/NavMenuPC/CompanySettingSVG";
import CookieSVG from "@/components/svg/NavMenuPC/CookieSVG";
import DashBoardSVG from "@/components/svg/NavMenuPC/DashBoardSVG";
import InfluencerSVG from "@/components/svg/NavMenuPC/InfluencerSVG";
import LogoutSVG from "@/components/svg/NavMenuPC/LogoutSVG";
import PaymentSettingSVG from "@/components/svg/NavMenuPC/PaymentSettingSVG";
import ProfileSettingSVG from "@/components/svg/NavMenuPC/ProfileSettingSVG";
import ProxySVG from "@/components/svg/NavMenuPC/ProxySVG";

import ReferalSVG from "@/components/svg/NavMenuPC/ReferalSVG";
import SettingSVG from "@/components/svg/NavMenuPC/SettingSVG";

export const menuItems = [
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
    icon: <ChangelogsSVG fillOne="white" />,
    iconBlue: <ChangelogsSVG fillOne="#0341A3" />,
    link: "/changelog",
    badge: "changelogs",
  },
  {
    id: 3,
    title: "Referral",
    icon: <ReferalSVG fillOne="white" />,
    iconBlue: <ReferalSVG fillOne="#0341A3" />,
    link: "/referral",
  },
  {
    id: 4,
    title: "Setting",
    icon: <SettingSVG fillOne="white" />,
    iconBlue: <SettingSVG fillOne="#0341A3" />,
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
    icon: <AdminSVG fillOne="white" />,
    iconBlue: <AdminSVG fillOne="white" />,
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
    iconBlue: <LogoutSVG color="white" />,
    icon: <LogoutSVG color="white" />,
    link: "/login",
  },
];
