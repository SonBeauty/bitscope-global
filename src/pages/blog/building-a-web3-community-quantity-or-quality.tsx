import BlogContainer from "@/components/PageComponents/Blog/BlogContainer";
import CheckList from "@/components/PageComponents/Blog/CheckList";
import TitleAndContent from "@/components/PageComponents/Blog/TitleAndContent";
import Link from "next/link";
import React from "react";

const arrCheckList = [
  {
    content:
      "Account completeness: Although the user's behavior pattern is extremely complex, filling out a Personal Profile demonstrates the seriousness of the user's behavior. Key metrics such as avatar, bio, and location have been referenced.",
  },
  {
    content:
      "The ability of followers to spread: The remaining indicators focus on user activity, which is highly valued by BitScope. We apply the 3R principles when evaluating media performance and estimate two 'Reach' values: reach and resonance. Resonance is measured through several key metrics.",
  },
  {
    content: (
      <span>
        <span className="font-semibold">Regular activities:</span> Indicates
        recent activity on the account.
      </span>
    ),
  },
  {
    content: (
      <span>
        <span className="font-semibold">Tweet ratio:</span> Measures the
        frequency of content posted by the account.
      </span>
    ),
  },
  {
    content: (
      <span>
        <span className="font-semibold">Follower ratio:</span> Measures the
        difference between followers and following, which usually increases when
        the account provides high-value content and attracts interest from other
        users. These followers can be strong supporters of the project.
      </span>
    ),
  },
  {
    content: (
      <span>
        <span className="font-semibold">Bubbles spread: </span>
        Measures the reach of the account&apos;s followers. Similar to Follower
        Ratio, this metric reflects the resonance of the account, and these
        followers can help spread the project&apos;s signal.
      </span>
    ),
  },
];

export default function Single() {
  return (
    <BlogContainer>
      <TitleAndContent
        des={
          <>
            According to a survey conducted by BitScope, which received
            responses from over 187 cryptocurrency investors, a striking 46% of
            participants indicated that they consider community to be the most
            significant factor influencing token prices. When we look at the
            broader business landscape, it becomes apparent that the success of
            any business model depends heavily on the support of its user base.
          </>
        }
        title="What metrics are really important to your community?"
        content={
          <>
            Community managers often rely on a few basic metrics to measure
            project health, such as the number of members, level of engagement
            with posts, or community growth rate. While BitScope agrees with
            this approach, we need to emphasize that these data points are not
            sufficient.
            <br />
            <br />
            Currently, the simplest and fastest way to reach users in the
            blockchain space is through airdrop or retroactive events. Projects
            can significantly increase their community membership through these
            methods, which is beneficial because everyone wants to see their
            numbers grow rapidly.
            <br />
            <br />
            However, this advantage disappears quickly when you realize that the
            number of members is increasing, but not in proportion to the rate
            of active users. One understandable explanation for this situation
            is the participation of the BOT-net system. Sometimes, these clone
            accounts are only used to cheat by a few people, and they are not
            the real goal of the Community Manager. However, their presence
            makes the data less accurate. This is when the Community Manager
            should seriously consider: &quot;Does the project prioritize
            quantity or quality?&quot;
          </>
        }
      />
      <TitleAndContent
        title="How does BitScope approach this?"
        content={
          <>
            Aside from membership metrics, BitScope measures the effectiveness
            of a community using the keyword &quot;Behavior.&quot; By analyzing
            user behavior patterns, we discovered many interesting facts.
            <br />
            <br />
            First, BitScope would like to emphasize that we do not intend to
            judge or classify anyone. We understand that individual freedom is
            independent and unique, especially in the blockchain space where
            everyone is equal. However, data analysis can provide useful
            insights for users and projects.
            <br />
            <br />
            On the internet, a user&apos;s &quot;behavior&quot; is often
            reflected in a few specific signs, such as conversations, manual
            settings for their accounts, and other factors that we project must
            be kept secret. Unlike Twitter, where you can gauge the
            effectiveness of an article by looking at the engagement it receives
            (assuming no outside interference), the real challenge arises when
            studying platforms like Telegram and Discord, which are the two
            leading blockchain discussion platforms in the world.
            <br />
            <br />A friend of BitScope, a community manager with over a year of
            experience, frankly admits that they are unable to accurately report
            the actual number of members following the project`&apos;s Telegram
            group. A &quot;common behavior that appears for Telegram user
            groups&quot; is that members still follow the information in the
            chat group but do not participate in the discussions. There is no
            sign of their presence, which confuses the manager when assessing
            member conversion performance and activity rates.
            <br />
            <br />
            Another scenario is when the project decides to pay thousands of
            dollars for a media event. The manager wants to know if the new user
            has potential or not? However, the membership growth index is not
            reliable enough to measure this accurately.
          </>
        }
      />
      <TitleAndContent
        title="Let's dive deep into data analysis together!"
        content={
          <>
            Each social platform requires a different method of data analysis.
            In the beta version, BitScope&apos;s analytical data is limited to
            specific levels, but we will provide metrics that can help users
            understand the meaning of the project.
            <br />
            <br />
            Let`&apos;s start with Twitter data. BitScope analyzes the latest
            account data, which helps community managers evaluate the
            performance of their most recent campaigns. The two data arms to be
            evaluated include:
            <CheckList arrRender={arrCheckList} />
            If you attract accounts with good reach or engagement, it will help
            increase your brand&apos;s spreadability, and the conversion rate of
            this group of accounts is also highly evaluated.
            <br />
            <br />
            BitScope is exploring another platform: Telegram. While Twitter has
            had a long time to develop many support tools, social listening
            tools seem to be a new thing on Telegram. The process of measuring a
            Telegram community will be focused on &quot;Groups,&quot; where
            users discuss topics directly on a daily basis.
            <br />
            <br />
            Analyzing a Telegram community requires a specialized method beyond
            what is needed for Twitter. A common habit among Telegram users is
            to monitor information in their chat channel without actively
            participating in the conversations. Technical limitations can make
            the process of analyzing this user group difficult.
            <br />
            <br />
            BitScope analyzes certain behaviors, such as the user&apos;s{" "}
            <span className="font-bold">Keyword Usage Habits</span> and{" "}
            <span className="font-bold">Language Duplication</span>, to filter
            out spammer accounts. Spammer accounts are not necessarily bad; they
            may be provided for various purposes, which BitScope cannot judge.
            However, in the project role, it is necessary to understand the
            insight of the customer to make appropriate media campaign changes.
            During the early stages of the product, the analyzed results are for
            reference only. BitScope should continue to visualize data for the
            Data Dashboard to be truly useful to users.
            <br />
            <br />
            BitScope hopes that this content has helped users understand how to
            access data and the meaning of the Bit Authentication service. The
            test version of the product is now available on the project&apos;s
            website at{" "}
            <Link
              href="https://bitscope.global"
              target="_blank"
              className="text-blue-500"
            >
              https://bitscope.global
            </Link>
            <br />
            <br />
            BitScope hopes you will enjoy this product, find it meaningful, and
            that it will help you improve the quality of your project&apos;s
            community.
          </>
        }
      />
    </BlogContainer>
  );
}
