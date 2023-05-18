import BlogContainer from "@/components/PageComponents/Blog/BlogContainer";
import CheckList from "@/components/PageComponents/Blog/CheckList";
import TitleAndContent from "@/components/PageComponents/Blog/TitleAndContent";
import Link from "next/link";
import React from "react";
const arrRender1 = [
  {
    content:
      "Encourage member interaction - Facilitate one-to-many communication",
  },
  {
    content: "Create a resource for support and content libraries.",
  },
];
const arrRender2 = [
  {
    content: "Synchronous versus asynchronous messaging",
  },
  {
    content: "Identity: Public versus private",
  },
];
export default function Single() {
  return (
    <BlogContainer>
      <TitleAndContent
        des="As mentioned in BitScope blog post, we want to explore our decision-making process behind why we opened Discord as our first owned community channel. With so many channels available, each offering different ways for your community to interact with your brand, such as Discord, Telegram, Twitter, LinkedIn, and even bespoke solutions, it can be difficult to determine the best choice. Therefore, it's important to weigh the tradeoffs between different community channels to make an informed decision. In this post, we'll share our framework for evaluating channels and help you select the one that best suits your needs."
        title="📊 Evaluate Channels"
        content={
          <>
            Your community members volunteer their time and effort to
            participate in your community. Therefore, it is crucial to be
            considerate and deliberate when choosing the communication channel
            to use. This also involves considering not only your short-term
            goals, but also keeping an eye on your long-term objectives without
            sacrificing one for the other.
            <br />
            <br />
            To effectively keep track of all these factors, we recommend
            evaluating community channels based on two key questions:
          </>
        }
      />
      <TitleAndContent
        title2="1. What community objective does it achieve?"
        content={
          <>
            <CheckList arrRender={arrRender1} />
          </>
        }
      />
      <TitleAndContent
        title2="2. What types of interaction dynamics is it able to support?"
        content={
          <>
            <CheckList arrRender={arrRender2} />
            Choosing the right channel can have significant benefits for you and
            your community, both in the short and long term. It&apos;s important
            to carefully consider your community objectives and the type of
            engagement you hope to foster.
          </>
        }
      />
      <TitleAndContent
        title="🎯 Specify your goals"
        content={
          <>
            Before creating a community channel, it&apos;s important to consider
            the purpose behind it. In our experience, and that of our customers,
            we have observed three common reasons for creating such a channel:
            1/ to encourage relationships among members, 2/ to facilitate
            one-to-many communication, and 3/ to build a content library or
            support resource. It&apos;s important to note that there is no
            one-size-fits-all approach, as different channels are better suited
            to achieve different objectives.
          </>
        }
      />
      <TitleAndContent
        title="Encourage communication amongst participants"
        content={
          <>
            You&apos;re seeking a space where your members can connect with each
            other based on shared interests, exchange knowledge, and celebrate
            each other&apos;s work, contributions, and accomplishments. You aim
            to encourage conversations and offer members a more relaxed,
            informal way to connect on a daily basis. If this is what
            you&apos;re looking for, you might want to consider using a chat
            platform such as Discord.
          </>
        }
      />
      <TitleAndContent
        title="Make one-to-many conversations possible"
        content={
          <>
            To maximize the reach of your message, consider using social
            networking platforms like Twitter, LinkedIn, and Facebook. These
            platforms allow you to broadcast your message to a wide audience
            while also giving you the ability to amplify other&apos;s messages
            and content that align with your company values or mission.
          </>
        }
      />
      <TitleAndContent
        title="Create a resource for content and support"
        content={
          <>
            If you&apos;re looking for a space to efficiently troubleshoot
            customer issues and solve support tickets, consider providing
            technical resources and how-to guides in a searchable and
            permaliable database, instead of a feed that requires endless
            scrolling. Platforms like Discourse, GitHub Discussions, and inSided
            may fit your needs for this purpose.
          </>
        }
      />
      <TitleAndContent
        title="Determine Your Engagement Dynamics"
        content={
          <>
            Another factor to consider when choosing a communication channel is
            what we refer to as &quot;engagement dynamics.&quot; This refers to
            how members of the community are expected to interact with each
            other. There are two main aspects of engagement dynamics to
            consider: <br /> <br />
            1) Identity, meaning whether members are visible or anonymous, and
             <br /> 2) Messaging approach, meaning whether communication
            is synchronous (real-time) or asynchronous (in threads). It&apos;s
            important to remember that these aspects exist on a spectrum rather
            than being strictly one or the other. For example, chat platforms
            can support both synchronous conversations and asynchronous threads.
          </>
        }
      />
      <TitleAndContent
        title="Identity: transparency versus anonymity"
        content={
          <>
            The nature of certain channels, such as LinkedIn, Facebook, and
            Discord, means that the details on your profile are often visible to
            the public. This allows others to gain a better understanding of who
            they are interacting with. In contrast, other platforms such as
            Discord, Reddit, and YouTube, allow for anonymous usernames, often
            to protect user privacy. Your stance on this matter will determine
            the limited selection of channels available to you.
          </>
        }
      />
      <TitleAndContent
        title="Messaging: synchronous vs. asynchronous"
        content={
          <>
            Different communication channels utilize varying messaging
            approaches. Synchronous messaging allows for live conversations with
            a clear start and end (e.g. Intercom and Discord conversations). On
            the other hand, asynchronous messaging is better suited for
            open-ended conversations and does not require all participants to be
            present and interacting at the same time (e.g. LinkedIn, Twitter,
            and Reddit). Your messaging needs will inform which channel is most
            suitable for you.
          </>
        }
      />
      <TitleAndContent
        title="Consider Your Tradeoffs"
        content={
          <>
            We have created the following visualization to help you evaluate the
            tradeoffs between community channels based on the engagement
            dynamics discussed in this post.
            <br />
            <br />
            As an example, we have chosen Discord as the channel that fosters
            relationships primarily through real-time conversations and
            comfortable interactions for the entire BitScope community. If your
            goal is to rally your community around resource sharing and
            troubleshooting in a more asynchronous way, with less focus on their
            public identity, we recommend channels like Discourse or GitHub
            Discussions.
            <br />
            <br /> We hope that this post has made it easier for you to choose
            which community channel to open. Feel free to mention us on{" "}
            <Link
              className="text-blue-500"
              href="https://twitter.com/BitscopeAI"
              target="_blank"
            >
              Twitter{"  "}
            </Link>
            to let us know which channel you have chosen. We also encourage you
            to join{" "}
            <Link
              className="text-blue-500"
              href="https://discord.io/Bitscope"
              target="_blank"
            >
              BitScope{"  "}
            </Link>{" "}
            to receive updates about what is happening in the community space,
            including open job roles, interviews with experts, and a monthly
            newsletter with interesting content.
          </>
        }
      />
    </BlogContainer>
  );
}