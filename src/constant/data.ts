export const menuItems = [
  {
    isHeadr: true,
    title: "menu",
  },
  {
    title: "Admin",
    icon: "heroicons-outline:home",
    isOpen: true,
    isHide: true,
    link: "/dashboard",
    child: [
      {
        childtitle: "Dashboard",
        childlink: "/dashboard",
      },
    ],
  },
  {
    title: "Main Board",
    icon: "heroicons:circle-stack",
    link: "/mainboard",
    isHide: false,
  },
  {
    title: "Authentication",
    icon: "heroicons:shield-check",
    link: "/authentication",
    isHide: false,
  },
  {
    title: "Profile",
    icon: "heroicons:user",
    link: "/profile",
    isHide: false,
  },
  {
    title: "changelog",
    icon: "heroicons:arrow-trending-up",
    link: "/dashboard/changelog",
    isHide: false,
    badge: "1.0.0",
  },
];
export const colors = {
  primary: "#4669FA",
  secondary: "#A0AEC0",
  danger: "#F1595C",
  black: "#111112",
  warning: "#FA916B",
  info: "#0CE7FA",
  light: "#425466",
  success: "#50C793",
  "gray-f7": "#F7F8FC",
  dark: "#1E293B",
  "dark-gray": "#0F172A",
  gray: "#68768A",
  gray2: "#EEF1F9",
  "dark-light": "#CBD5E1",
};
export const hexToRGB = (hex: any, alpha: any) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};
export const topMenu = [
  {
    title: "Dashboard",
    icon: "heroicons-outline:home",
    link: "/app/home",
  },
];
export const topFilterLists = [
  {
    name: "Inbox",
    value: "all",
    icon: "uil:image-v",
  },
  {
    name: "Starred",
    value: "fav",
    icon: "heroicons:star",
  },
  {
    name: "Sent",
    value: "sent",
    icon: "heroicons-outline:paper-airplane",
  },

  {
    name: "Drafts",
    value: "drafts",
    icon: "heroicons-outline:pencil-alt",
  },
  {
    name: "Spam",
    value: "spam",
    icon: "heroicons:information-circle",
  },
  {
    name: "Trash",
    value: "trash",
    icon: "heroicons:trash",
  },
];
export const bottomFilterLists = [
  {
    name: "personal",
    value: "personal",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Social",
    value: "social",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Promotions",
    value: "promotions",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Business",
    value: "business",
    icon: "heroicons:chevron-double-right",
  },
];
export const message = [
  {
    title: "Wade Warren",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: true,
    notification_count: 1,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    link: "#",
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    link: "#",
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    link: "#",
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    link: "#",
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    link: "#",
  },
];
export const notifications = [
  {
    title: "Your order is placed",
    desc: "Amet minim mollit non deser unt ullamco est sit aliqua.",

    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    link: "#",
  },
  {
    title: "Congratulations Darlene  🎉",
    desc: "Won the monthly best seller badge",
    unread: true,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    link: "#",
  },
  {
    title: "Revised Order 👋",
    desc: "Won the monthly best seller badge",

    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    link: "#",
  },
  {
    title: "Brooklyn Simmons",
    desc: "Added you to Top Secret Project group...",

    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    link: "#",
  },
];
