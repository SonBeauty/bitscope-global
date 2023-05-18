const data = [
  {
    id: 0,
    title: "Investing in crypto with social listening.",
    highlight:
      "Social listening is an invaluable tool for cryptocurrency investors. By understanding the psychology of the crowd and their reactions to news, events, and price changes, investors can gain a deeper understanding of market psychology, enabling them to make informed investment decisions.",
    imgStory: "https://i.imgur.com/EyEvgDt.png",
    link: "investing-in-crypto-with-social-listening",
  },
  {
    id: 1,
    title: "Using social data is key to the success of the project.",
    highlight:
      "Social Data offers an unprecedented level of insight into consumer behavior, allowing businesses to better understand their target audience and tailor their offerings accordingly. Companies can use this data to identify trends in customer sentiment, track brand loyalty and engagement, as well as measure customer satisfaction with products or services. By leveraging Social Data, companies can make more informed decisions about how to best serve their customers and increase overall profitability.",
    imgStory: "https://i.imgur.com/esFP920.png",
    link: "using-social-data-is-key-to-the-success-of-the-project",
  },
  {
    id: 2,
    title: "Guide to building a Blockchain community.",
    highlight:
      "A loyal community decides that a cryptocurrency project has a 70% chance of winning. However, the constant fluctuations of the blockchain require developers in the community to constantly change to meet the diverse needs of customers. All of this is to answer the question: 'How to create FOMO psychology for my project?'",
    imgStory: "https://i.imgur.com/0LTbS7S.png",
    link: "guide-to-building-a-blockchain-community",
  },
  {
    id: 3,
    title: "Bit-Authentication - BitScope's first product gradually perfected",
    highlight:
      "Bit-Authen is a service used to verify the 'trust' level of members in any community. Bit Authentication targets Twitter, Telegram, and Discord among other groups.",
    imgStory: "https://i.imgur.com/LodGMck.png",
    link: "bit-authentication-bitscope-first-product-gradually-perfected",
  },
  {
    id: 4,
    title: "The social media trends in 2023",
    highlight:
      "Besides AI, what do you know that will become an essential trend similar to eating and drinking in business? That is social media. If you are running a business, or simply a regular customer.",
    imgStory: "https://i.imgur.com/pYp9hcB.jpg",
    link: "the-social-media-trends-in-2023",
  },
  {
    id: 5,
    title: "Explore the world of Social Listening with BitScope",
    highlight:
      "The world is no longer a sphere, but has become a true flat world. Connecting people to people regardless of geographical distance or time has become more necessary than ever.",
    imgStory: "https://i.imgur.com/kfdJRN8.jpg",
    link: "explore-the-world-of-social-listening-with-bitscope",
  },
  {
    id: 6,
    title: "How Social Listening helped Alheta increase users engagement?",
    highlight:
      "Alheta is a company that specializes in providing tourism services, marketing, and hotel services. As you can see, everything begins with a traditional model. Alheta has faced about four crises when it comes to scaling and customer engagement.",
    imgStory: "https://i.imgur.com/tcdFrlL.jpg",
    link: "how-social-listening-helped-alheta-increase-users-engagement",
  },
  {
    id: 7,
    title: "5 tips to manage social network account effectively",
    highlight:
      "For any business, the management of social network accounts is essential because this is the world for you to reach customers. Using social networks indiscriminately and without management will make your business situation not improve. See now 5 tips below to effectively manage them",
    imgStory: "https://i.imgur.com/ymNyr9o.jpg",
    link: "5-tips-to-manage-social-network-account-effectively",
  },
  {
    id: 8,
    title: "How to Choose Your First Community Channel",
    highlight:
      "As mentioned in BitScope blog post, we want to explore our decision-making process behind why we opened Discord as our first owned community channel. With so many channels available, each offering different ways for your community to interact with your brand, such as Discord, Telegram, Twitter, LinkedIn, and even bespoke solutions, it can be difficult to determine the best choice.",
    imgStory: "https://i.imgur.com/MqX8mSD.jpg",
    link: "how-to-choose-your-first-community-channel",
  },
  {
    id: 9,
    title: "Why Modern Companies Put Community First?",
    highlight:
      "When it comes to how we reach our destination, there is always a story involved. We would be delighted if you would share your story about how you came to be in a community role. We are eager to hear and spread the word about your experiences. Please feel free to tell your story. We look forward to hearing from you!",
    imgStory: "https://i.imgur.com/YucVBiu.jpg",
    link: "why-modern-companies-put-community-first",
  },
  {
    id: 10,
    title: "How to send welcome notes automatically",
    highlight:
      "You've selected the channel and drafted a code of conduct, which are two crucial steps in organizing a successful community launch. It's time to consider how to formally welcome newcomers to the neighborhood.",
    imgStory: "https://i.imgur.com/LK79TN9.jpg",
    link: "how-to-send-welcome-notes-automatically",
  },
  {
    id: 11,
    title: "The success of customers via community",
    highlight:
      "Customer success managers are crucial to the expansion of businesses. They relentlessly concentrate on the accounts of their clients and how to assist them in achieving goals by utilizing the company's goods and/or services.",
    imgStory: "https://i.imgur.com/uAZH7mS.png",
    link: "the-success-of-customers-via-community",
  },
];
export const getBlog = async ({ link }: any) => {
  return await data.filter((sp) => link?.includes(sp?.link));
};