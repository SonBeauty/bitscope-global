import Image from "next/image";
export const ArrInfoUser = [
  {
    icon: (
      <Image
        src="/image/icons8-toggle-off.png"
        alt="icon"
        width={29}
        height={29}
      />
    ),
    info: "Regular activities",
    content: "Users with recent Tweet.",
  },
  {
    icon: (
      <Image src="/image/icons8-worse.png" alt="icon" width={29} height={29} />
    ),
    info: "Tweet ratio",
    content: "Continuous operation since created.",
  },
  {
    icon: (
      <Image
        src="/image/icons8-three-user.png"
        alt="icon"
        width={29}
        height={29}
      />
    ),
    info: "Follower ratio",
    content: "Followers with valuable content (hidden formula).",
    position: "bottom",
  },
  {
    icon: (
      <Image
        src="/image/icons8-user-perso.png"
        alt="icon"
        width={29}
        height={29}
      />
    ),
    info: "Profile avatar",
  },
  {
    icon: (
      <Image
        src="/image/icons8-user-find.png"
        alt="icon"
        width={29}
        height={29}
      />
    ),
    info: "Followers with category",
  },
  {
    icon: (
      <Image src="/image/icons8-bright.png" alt="icon" width={29} height={29} />
    ),
    info: "Bubbles spread",
    content: "Followers are highly effective (hidden formula).",
    position: "bottom",
  },
  {
    icon: (
      <Image src="/image/icons8-list.png" alt="icon" width={29} height={29} />
    ),
    info: "Followers with Bios",
  },
  {
    icon: (
      <Image src="/image/icons8-notmap.png" alt="icon" width={29} height={29} />
    ),
    info: "Location information",
  },
  {
    icon: (
      <Image
        src="/image/icons8-notlink.png"
        alt="icon"
        width={29}
        height={29}
      />
    ),
    info: "Followers with URL",
  },
];
export const dataTwitterLoading = {
  status: "0",
  profile: {
    userId: "Loading...",
    name: "Loading...",
    avatar: "",
    createTime: "",
    tweet: 0,
    like: 0,
    follower: 0,
    following: 0,
    link: "",
    bio: "",
    location: "",
    category: "",
    nearAction: "",
    lastTweet: "",
    userName: "Loading...",
    aveReach: 0,
  },
  overview: {
    hightQuality: 0,
    nomalQuality: 0,
    lowQuality: 0,
    badQuality: 0,
    regularActivity: 0,
    profileAvatar: 0,
    followerRatio: 0,
    tweetRatio: 0,
    followersWithBios: 0,
    bubblesSpread: 0,
    locationInformation: 0,
    followersWithURL: 0,
    followersWithCategory: 0,
    bestQualityPercentage: 0,
    goodQualityPercentage: 0,
    normalQualityPercentage: 0,
    lowQualityPercentage: 0,
    graphQuality: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
      15: 0,
      16: 0,
      17: 0,
    },
  },

  results: [0, 0, 0, 0, 0, 0, 0, 0, 0],
};
export const dataTelegramLoading = {
  objectId: "Loading...",
  status: "0",
  profile: {
    objectId: "Loading...",
    name: "Loading...",
    avatar: "Loading...",
  },
  overview: {
    percentHandler: 0,
    percentCrawl: 0,
    review: {
      active: 0,
      normal: 0,
      low: 0,
      bot: 0,
    },
    activeReview: { active: "0", normal: "0", low: "0", bot: "0" },
    avg: {
      goodProfile: 0,
      avgActiveMember: 0,
      postimeFrans: "0",
      avgMess: 0,
    },
    activitiesOfTheWeek: {
      percentUser: {
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        saturday: 0,
        sunday: 0,
      },
    },
    hourOfOperation: {
      "0": "0",
      "1": "0",
      "2": "0",
      "3": "0",
      "4": "0",
      "5": "0",
      "6": "0",
      "7": "0",
      "8": "0",
      "9": "0",
      "10": "0",
      "11": "0",
      "12": "0",
      "13": "0",
      "14": "0",
      "15": "0",
      "16": "0",
      "17": "0",
      "18": "0",
      "19": "0",
      "20": "0",
      "21": "0",
      "22": "0",
      "23": "0",
    },
    general: {
      numberOfSample: 0,
      numberOfConversation: 0,
      numberOfAdmin: 0,
    },
    ranking: null,
  },
  result: {
    review: { active: 0, normal: 0, low: 0, bot: 0 },
    activeReview: { active: "0", normal: "0", low: "0", bot: "0" },
    avg: {
      goodProfile: 0,
      avgActiveMember: 0,
      postimeFrans: "0",
      avgMess: 0,
    },
    activitiesOfTheWeek: {
      percentUser: {
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        saturday: 0,
        sunday: 0,
      },
    },
    hourOfOperation: { hour: null },
    general: {
      numberOfSample: 0,
      numberOfConversation: 0,
      numberOfAdmin: 0,
    },
    ranking: null,
  },
};
