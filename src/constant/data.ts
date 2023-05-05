export const menuItems = [
  {
    isHeadr: true,
    title: "menu",
  },
  {
    title: "Dashboard",
    icon: "heroicons-outline:home",
    isOpen: true,
    isHide: false,
    child: [
      {
        childtitle: "Dashboard",
        childlink: "/dashboard",
      },
      {
        childtitle: "Profile",
        childlink: "/dashboard/profile",
      },
      {
        childtitle: "Authentication",
        childlink: "/dashboard/authentication",
      },
    ],
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
export const data = [
  {
    id: 0,
    title: "Investing in crypto with social listening.",
    highlight:
      "Social listening is an invaluable tool for cryptocurrency investors. By understanding the psychology of the crowd and their reactions to news, events, and price changes, investors can gain a deeper understanding of market psychology, enabling them to make informed investment decisions.",
    timeUpload: 45,
    imgStory: "https://i.imgur.com/EyEvgDt.png",
    link: "investing-in-crypto-with-social-listening",
  },
  {
    id: 1,
    title: "Using social data is key to the success of the project.",
    highlight:
      "Social Data offers an unprecedented level of insight into consumer behavior, allowing businesses to better understand their target audience and tailor their offerings accordingly. Companies can use this data to identify trends in customer sentiment, track brand loyalty and engagement, as well as measure customer satisfaction with products or services. By leveraging Social Data, companies can make more informed decisions about how to best serve their customers and increase overall profitability.",
    timeUpload: 45,
    imgStory: "https://i.imgur.com/esFP920.png",
    link: "using-social-data-is-key-to-the-success-of-the-project",
  },
  {
    id: 2,
    title: "Guide to building a Blockchain community.",
    highlight:
      "A loyal community decides that a cryptocurrency project has a 70% chance of winning. However, the constant fluctuations of the blockchain require developers in the community to constantly change to meet the diverse needs of customers. All of this is to answer the question: 'How to create FOMO psychology for my project?'",
    timeUpload: 45,
    imgStory: "https://i.imgur.com/0LTbS7S.png",
    link: "guide-to-building-a-blockchain-community",
  },
  {
    id: 3,
    title: "Bit-Authentication - BitScope's first product gradually perfected",
    highlight:
      "Bit-Authen is a service used to verify the 'trust' level of members in any community. Bit Authentication targets Twitter, Telegram, and Discord among other groups.",
    timeUpload: 45,
    imgStory: "https://i.imgur.com/LodGMck.png",
    link: "bit-authentication-bitscope-first-product-gradually-perfected",
  },
];
