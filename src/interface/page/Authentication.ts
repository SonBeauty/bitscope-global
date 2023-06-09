import React from "react";
export interface ArrRender {
  title: string;
  count: string;
  bg?: string;
  icon?: React.ReactNode;
}
export interface Authentication {
  twitter?: string;
  telegram?: string;
}
export interface TwitterProps {
  status: string;
  profile: {
    userName: string | null;
    userId: string;
    avatar: string | null;
    name: string;
    createTime: string | null;
    tweet: number;
    follower: number;
    following: number;
    bio: string | null;
    link: string | null;
    location: string | null;
    category: string | null;
    nearAction: string | null;
    lastTweet: string | null;
    like: number;
  };
  overview: {
    hightQuality: number;
    nomalQuality: number;
    lowQuality: number;
    badQuality: number;
    regularActivity: number;
    profileAvatar: number;
    followerRatio: number;
    tweetRatio: number;
    followersWithBios: number;
    bubblesSpread: number;
    locationInformation: number;
    followersWithURL: number;
    followersWithCategory: number;
    graphQuality: any;
    highQualityPercentage: number;
    normalQualityPercentage: number;
    lowQualityPercentage: number;
    badQualityPercentage: number;
  };
  data?: {
    data: any;
    status: string;
  };
  results: any;
}
export interface TelegramProps {
  objectId: string;
  status: number;
  profile: {
    objectId: string;
    name: string;
  };
  overview: {
    review: {
      active: number;
      normal: number;
      low: number;
      bot: number;
    };
    activeReview: {
      active: string;
      normal: string;
      low: string;
      bot: string;
    };
    avg: {
      goodProfile: number;
      avgActiveMember: number;
      postimeFrans: string;
      avgMess: number;
    };
    activitiesOfTheWeek: {
      percentUser: {
        monday: number;
        tuesday: number;
        wednesday: number;
        thursday: number;
        friday: number;
        saturday: number;
        sunday: number;
      };
    };
    hourOfOperation: {
      "0": string;
      "1": string;
      "2": string;
      "3": string;
      "4": string;
      "5": string;
      "6": string;
      "7": string;
      "8": string;
      "9": string;
      "10": string;
      "11": string;
      "12": string;
      "13": string;
      "14": string;
      "15": string;
      "16": string;
      "17": string;
      "18": string;
      "19": string;
      "20": string;
      "21": string;
      "22": string;
      "23": string;
    };
    general: {
      numberOfSample: number;
      numberOfConversation: number;
      numberOfAdmin: number;
    };
    ranking: { ranking: string } | null;
  };
  result: {
    review: { active: number; normal: number; low: number; bot: number };
    activeReview: { active: string; normal: string; low: string; bot: string };
    avg: {
      goodProfile: number;
      avgActiveMember: number;
      postimeFrans: string;
      avgMess: number;
    };
    activitiesOfTheWeek: {
      percentUser: {
        monday: number;
        tuesday: number;
        wednesday: number;
        thursday: number;
        friday: number;
        saturday: number;
        sunday: number;
      };
    };
    hourOfOperation: { hour: any };
    general: {
      numberOfSample: number;
      numberOfConversation: number;
      numberOfAdmin: number;
    };
    ranking: any;
  };
}
