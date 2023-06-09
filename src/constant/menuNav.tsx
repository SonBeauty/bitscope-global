export const menuItems = [
  {
    id: 1,
    title: "Dasboard",
    icon: "/image/DashboardBarWhite.svg",
    iconBlue: "/image/DashboardBarBlue.svg",
    link: "/dashboard",
    child: [
      {
        id: 1,
        childtitle: "Bit Authentication",
        childlink: "/authentication",
        iconBlue: "/image/AuthenticationBB.svg",
        iconWhite: "/image/AuthenticationBW.svg",
      },
      {
        id: 1,
        childtitle: "Bit Monitor",
        childlink: "/monitor",
        iconBlue: "/image/BitMonitorBB.svg",
        iconWhite: "/image/BitMonitorBW.svg",
      },
      {
        id: 1,
        childtitle: "Bit Probe",
        childlink: "/probe",
        iconBlue: "/image/BitProbeBB.svg",
        iconWhite: "/image/BitProbeBW.svg",
      },
      {
        id: 1,
        childtitle: "Bit Spying",
        childlink: "/spying",
        iconBlue: "/image/BitSpyingBB.svg",
        iconWhite: "/image/BitSpyingBW.svg",
      },
      {
        id: 1,
        childtitle: "Bit Tracking",
        childlink: "/tracking",
        iconBlue: "/image/BitTrackingBB.svg",
        iconWhite: "/image/BitTrackingBW.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Setting",
    icon: "/image/SettingBW.svg",
    iconBlue: "/image/SettingBB.svg",
    child: [
      {
        id: 2,
        childtitle: "Profile Settings",
        childlink: "/user",
        iconBlue: "/image/ProfileSettingBB.svg",
        iconWhite: "/image/ProfileSettingBW.svg",
      },
      {
        id: 2,
        childtitle: "Company Settings",
        childlink: "/company-setting",
        iconBlue: "/image/CompanySettingsBB.svg",
        iconWhite: "/image/CompanySettingsBW.svg",
      },
      {
        id: 2,
        childtitle: "Payment Settings",
        childlink: "/payment-setting",
        iconBlue: "/image/PaymentSettingsBB.svg",
        iconWhite: "/image/PaymentSettingsBW.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Changelog",
    icon: "/image/ChangelogBW.svg",
    iconBlue: "/image/ChangelogBB.svg",
    link: "/changelog",
    badge: "1.0.0",
  },
];
