import BlogContainer from "@/components/PageComponents/Blog/BlogContainer";
import CheckList from "@/components/PageComponents/Blog/CheckList";
import TitleAndContent from "@/components/PageComponents/Blog/TitleAndContent";
import Link from "next/link";
import React from "react";
const arrOne = [
  {
    content: (
      <span>
        <span className="font-semibold">Number of followers:</span>
        This metric showcases the KoL&apos;s popularity and reach, although it
        may not always be completely accurate.
      </span>
    ),
  },
  {
    content: (
      <span>
        <span className="font-semibold">Pervasiveness:</span>
        This refers to the KoL&apos;s ability to spread and reach a diverse
        group of people, which is equally important. The level of spread may not
        solely depend on the KoL, but also on their followers. For instance,
        Elon Musk has 147 million followers on Twitter, many of whom are
        celebrities. If Elon mentions your brand in one of his tweets, the reach
        extends beyond his 147 million followers and resonates with other
        celebrities who follow him.
      </span>
    ),
  },
  {
    content: (
      <span>
        <span>Engagement Rate:</span> Apart from the number of followers, it is
        crucial to measure fan interaction, such as likes, comments, and shares
        on KoL posts.
      </span>
    ),
  },
  {
    content: (
      <span>
        <span className="font-semibold">Content Quality:</span> The ability to
        create original, engaging, and valuable content is a vital factor. A KoL
        who can provide quality information, honest opinions, and creative
        content will be able to capture and maintain the interest of their
        audience.
      </span>
    ),
  },
  {
    content: (
      <span>
        <span className="font-semibold">Diversity of platforms</span>: Depending
        on the product&apos;s industry, some social platforms may be prioritized
        over others. However, a KoL who can cover your brand cross-platform is
        still an advantage.
      </span>
    ),
  },
  {
    content: (
      <span>
        <span className="font-semibold">Impact Ratio:</span> A KoL who can
        positively influence their audience, such as through product, service,
        or personal opinion recommendations, would be considered to have good
        outreach performance. The impact of a KoL can be measured by monitoring
        the responses and reactions from fans after they are exposed to the
        KoL&apos;s content.
      </span>
    ),
  },
];
const arrTwo = [
  {
    content: (
      <span>
        <span className="font-semibold">Regular activities:</span> This refers
        to the number of members who have been active recently. Many Twitter
        accounts are no longer in use but have not been deleted. It is difficult
        to determine this rate simply by looking at KoL&apos;s Twitter follower
        count. BitScope provides the exact number of recently active followers
        for each MANDO follower. The percentage of active members to total
        followers is also considered as a reach attribute.
      </span>
    ),
  },
  {
    content: (
      <span>
        <span className="font-semibold">Tweet ratio:</span> Similar to regular
        activities, the main purpose of this metric is to help you better
        understand the user activity rate and reach when launching a media
        campaign with KoL. Note that BitScope currently only analyzes data
        within a short-term period of about the last month, so the data may not
        fully reflect information about KoL.
      </span>
    ),
  },
  {
    content: (
      <span>
        <span className="font-semibold">Follower Ratio:</span> This metric
        measures the difference between followers and followed accounts. It
        reflects the reading culture of social media users, who tend to follow
        accounts that provide valuable content. This is why KoLs (Key Opinion
        Leaders) often have a large following, as they consistently provide
        valuable content to their community.
        <br />
        <br />
        If KoL has a large number of followers who set a high Follower Ratio
        criteria, he will increase his spread rate many times over, as explained
        in the `&quot;Pervasiveness`&quot; section. This is why MANDO has
        hundreds of thousands of followers but only a few hundred members who
        meet the Follower Ratio criteria.
      </span>
    ),
  },
  {
    content: (
      <span>
        <span className="font-semibold">Bubbles spread:</span> If KoL&apos;s
        reach is reflected by Reach and Engagement, his followers also have
        their own reach. The Bubbles spread indicator is counted when a follower
        achieves very high reach in their post. Take the example of Elon Musk -
        he is a KoL, but his spread is much larger than his actual number of
        followers. This is partly because he can resonate with many people,
        including other celebrities who follow him.
      </span>
    ),
  },
];
export default function Single() {
  return (
    <BlogContainer>
      <TitleAndContent
        content={
          <>
            One of the most popular strategies for blockchain projects to
            achieve user growth is through Key Opinion Leader (KoL) marketing,
            which involves collaborating with trusted individuals who have
            significant influence over a target audience. This type of marketing
            can be highly effective, but it requires careful planning and
            execution.
          </>
        }
      />
      <TitleAndContent
        content={
          <>
            <br />
            <picture>
              <img src="https://i.imgur.com/FZsp8Ox.png" alt="image"></img>
            </picture>
            <br />
            <br />
            <span className="font-semibold"> Stage 1- Search stage:</span>{" "}
            business owners evaluate a KoL&apos;s performance by analyzing
            factors such as content compatibility, reach, spread, and
            interaction rate.
            <br />
            <br />
            <span className="font-semibold">Stage 2 - Collaboration:</span> Once
            a suitable KoL is found, the team and KoL will discuss the project
            concept and direction. A script will be drafted based on the
            agreed-upon content and reviewed to align with the KoL&apos;s style
            and audience. After finalizing the script, a demo content will be
            created and edited to perfection. The completed content will be
            published publicly, with necessary changes made based on each
            KoL&apos;s requirements.
            <br />
            <br />
            <span className="font-semibold">Stage 3 - Measurement:</span> Goals
            are set and measured in this stage using KPIs. Examples of these
            goals include increasing the number of members and raising brand
            awareness. It&apos;s important to note that goals may differ
            depending on the specific collaboration project and its objectives.
            Therefore, selecting the appropriate KPIs is crucial to ensure that
            the project is on track and achieving intended outcomes.
            <br />
            <br />
            <span className="font-semibold">Stage 4 - Optimization:</span> To
            get the best results, projects need to use different campaigns and
            keep an eye on how well their communication methods are working.
            They can use techniques like A-B testing or simulated data to see
            how their campaigns might perform in different situations.
            <br />
            <br />
            Overall, a KoL marketing strategy can be a highly effective way for
            blockchain projects to reach new users and build a strong community
            around their project. However, it requires careful planning,
            execution, and ongoing analysis to be successful.
          </>
        }
      />
      <TitleAndContent
        title="6 CRITERIA FOR SEARCHING QUALITY KOL"
        content={
          <>
            Identifying an appropriate Key Opinion Leader (KoL) can be a
            challenging task since there is no universal metric for each KoL.
            Additionally, different platforms necessitate distinct analytical
            approaches, and ultimately, each product has its own distinct
            features and particular needs. Nevertheless, KoL performance can be
            evaluated based on several criteria such as
            <br />
            <br />
            <picture>
              <img src="https://i.imgur.com/3SBJuFQ.png" alt="image" />
            </picture>
            <br />
            <br />
            <CheckList arrRender={arrOne} />
            BitScope provides assistance in finding the best Lead Opinion Lead
            (KoL) for your project through our Bit.Authentication feature. A
            beta version of this feature has been released on our project
            website at{" "}
            <Link
              className="text-blue-400"
              href="https://bitscope.global"
              target="_blank"
            >
              https://bitscope.global.
            </Link>{" "}
            Please note that the content of the report may not reflect the full
            performance of KoL, which is still a work in progress.
          </>
        }
      />
      <TitleAndContent
        title="SEARCH KOL ON TWITTER WITH BITSCOPE"
        content={
          <>
            At BitScope, we analyze KoLs (Key Opinion Leaders) by looking at
            their followers and measuring the average reach of their last five
            posts. This helps us understand their influence. We found that the
            more difference between the number of individuals they follow and
            the number of individuals that follow them, the more credible they
            are perceived to be by their audience. We use this insight to
            analyze KoLs and provide actionable recommendations for our clients.
            <br />
            <br />
            <picture>
              <img src="https://i.imgur.com/32X8Ze4.png" alt="image" />
            </picture>
            <br />
            <br />
            <span className="font-bold">Account Completeness: </span>As
            discussed in a recent BitScope article on &quot;Web3 Communities
            Prioritizing Quantity or Quality?&quot;, we consider signals that
            reflect the level of user activity.
            <br />
            <br />
            The following profile including: avatar, category, bios, location,
            and URL - are the basic data standards that authenticate a Twitter
            account. Providing complete information is a commitment that users
            make to using the product seriously. The attached label displays the
            number of users who have added the appropriate information for each
            category. In the case of MANDO CT, he has at least 1797 followers
            who have added an avatar to their profile.
            <br />
            <br />
            <picture>
              <img src="https://i.imgur.com/jiHDuyx.png" alt="image" />
            </picture>
            <br />
            <br />
            BitScope also focuses on exploiting the pervasiveness of KoL. We use
            a group of four attributes, described as follows:
            <br />
            <br />
            <CheckList arrRender={arrTwo} />
            And finally a chart of who is following KoL. Note that the analysis
            is only intended to assist the Project in its search or KoL
            self-assessment of their communication performance.
            <br />
            <br />
            <picture>
              <img src="https://i.imgur.com/LZUog00.png" alt="image" />
            </picture>
            <br />
            <br />
            BitScope would like to emphasize that we do not intend to judge or
            categorize anyone based on their freedom of choice, beliefs, or any
            other personal characteristic. We understand and respect that
            individual freedom is independent and unique, especially in the
            decentralized and democratized blockchain space where everyone has
            equal opportunities to participate and contribute to the
            network&apos;s growth and security.
            <br />
            <br />
            In summary, while we fully respect and support individual freedom
            and diversity in the blockchain space, we also believe that data
            analytics can be a valuable tool for enhancing transparency,
            accountability, and efficiency for all stakeholders involved.
            <br />
            <br />
            Join us for &quot;How does BitScope help you analyze Telegram
            Groups?&quot;, one of the world&apos;s leading discussion platforms
            for cryptocurrencies. Gain a deeper understanding of how BitScope
            extracts and analyzes critical data from Telegram Groups. Connect
            with other crypto enthusiasts and experts to share knowledge and
            ideas. Expand your expertise in cryptocurrency and data analysis
            with BitScope&apos;s cutting-edge technology and community
            expertise.
          </>
        }
      />
    </BlogContainer>
  );
}
