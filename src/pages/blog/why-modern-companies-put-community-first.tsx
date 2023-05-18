import BlogContainer from "@/components/PageComponents/Blog/BlogContainer";
import TitleAndContent from "@/components/PageComponents/Blog/TitleAndContent";
import Link from "next/link";
import React from "react";
export default function Single() {
  return (
    <BlogContainer>
      <TitleAndContent
        des="When it comes to how we reach our destination, there is always a story involved. We would be delighted if you would share your story about how you came to be in a community role. We are eager to hear and spread the word about your experiences. Please feel free to tell your story. We look forward to hearing from you!"
        title="Why modern businesses prioritize the community"
        content={
          <>
            We&apos;ve previously discussed the technology used by
            community-driven companies. It should serve a purpose that goes
            beyond merely collecting stale data from outdated systems.
            Today&apos;s technology must assist community teams in monitoring
            and comprehending their community&apos;s activities in real-time,
            across various platforms.
            <br />
            <br />
            Building on the two preceding ideas - that your community of product
            users is your most valuable long-term investment and that there is a
            strong need for technology that facilitates teams to listen to,
            support, and engage with those individuals - we identified a couple
            of figures that demonstrate the increasing industry investment in
            community and the rising number of job opportunities for
            community-related roles within the technology sector, as indicated
            by LinkedIn. Specifically, job roles categorized under the title of
            &apos;Community Manager&apos; saw a 9% increase from 2020, while
            roles classified under &apos;Head of Community&apos; experienced a
            20% growth.
            <br />
            <br />
            It seems that open roles are increasing and companies are actively
            seeking community leaders. What may be causing this sudden surge in
            demand for community roles? What qualities are companies looking for
            in their ideal candidates for these roles? Additionally, who are
            some notable community leaders and what paths led them to their
            current positions?
          </>
        }
      />
      <TitleAndContent
        title="Why are communities everywhere?"
        content={
          <>
            On your feed. In your inbox. Throughout newsletter headlines and VC
            tweets. The concept of being community-driven isn&apos;t novel-
            humans have been forming, expanding, and mutually benefiting from
            the needs, feedback, and outputs of their communities for centuries
            before we had the power of the internet to overcome geographic
            barriers. And when the internet did arrive, communities moved online
            too. However, it has only been a (relatively) brief period of time
            that communities have been in such close proximity to company
            products.
            <br /> <br />
            The distinction between buyer and seller still exists - someone is
            (often but not always) paying someone else for a product or service
            - but today, the seller&apos;s understanding of the buyer is
            evolving. They&apos;re no longer just Buyer 231326; they&apos;re
            John, Mark, Biden, Qi, or Jonathan - real people who are using your
            products. These people matter most to the long-term success of any
            company that cares. They have real intentions, opinions, ideas,
            feedback, needs, and use cases for the products they&apos;re using.
            <br /> <br />
            Users fall in love with product features, master workflows,
            encounter bugs, discover edge cases, and find workarounds. They also
            use products in unexpected ways that the builders may not have
            anticipated. Users then share their experiences with their networks,
            which span across various platforms such as Twitter, Slack,
            LinkedIn, Facebook, GitHub, Discourse, Discord, Stack Overflow,
            YouTube, Reddit, TikTok, online meetups, podcasts, and newsletters.
            Eventually, they share their experiences in person at events and
            conferences, as well as at social gatherings like Dance Church.
            <br /> <br />
            The network effect is a key aspect in understanding why communities
            are being established all around us. However, the reason for this
            phenomenon is even more crucial. By adopting a community-driven
            mindset in developing your product, you can gain a better
            understanding of the needs and wants of your end users. This
            approach also enables you to shorten the ideation phase and identify
            the educational resources required for your product.
            <br /> <br />
            Additionally, it helps you prioritize your roadmap, identify
            potential speakers for your conferences, and collaborate on blog
            posts or moderate forums with relevant teams. It is also vital to
            connect your growth, partnership, and account teams with teams and
            functions within large organizations, which can be difficult to
            navigate. With the technology and tools available today, this is now
            achievable.
            <br /> <br />
            Companies that prioritize community development can benefit from
            this innovative technology, which can enhance their ability to serve
            their communities. They should also continue investing in roles that
            support community management, given the increasing importance of
            this field.
          </>
        }
      />
      <TitleAndContent
        title="Who are these community teams and managers?"
        content={
          <>
            The reality is that they represent all of us, including you and me.
            In a fortuitous turn of events, I landed a role in community
            management at AWS while living in Detroit and studying urban design.
            My focus was on exploring how physical spaces can foster a sense of
            community.
            <br />
            <br />
            I met the hiring manager who eventually brought me to AWS after a
            serendipitous encounter in Las Vegas. While at AWS, I collaborated
            with Ross Barich, the esteemed Head of the AWS Heroes Program, to
            establish and expand the AWS Serverless Heroes program, which I
            oversaw and managed as a tech-specific category of his program. To
            learn more about my transition to the community, check out this
            brief video.
            <br />
            <br />
            The routes to building community are diverse, and we are producing a
            mini-series that highlights the journeys of community leaders to
            their roles. On our YouTube and Twitter platforms, you can expect to
            see an expanding collection of vignettes that showcase these varied
            paths. We also encourage you to share your own story with us, as we
            are eager to hear and feature them.
            <br />
            <br />
            A community-focused position necessitates a diverse skill set that
            may be developed and honed through various roles and jobs. Many
            individuals in product management, project coordination, account
            management, content creation, marketing, support and success, sales,
            and engineering, especially those who enjoy addressing tactical,
            business-level issues through clear, curious communication and
            collaboration, have the ideal blend of qualities that community
            leaders and teams seek to hire.
            <br />
            <br />
            There is something special about the idea that skills can be
            transferred across roles and experiences. The growth of community
            functions can drive economic empowerment for a wider range of
            backgrounds, enabling more diverse groups of people to enter the
            tech world and build it from the inside, alongside their community
            members.
            <br />
            <br />
            Community is the key to strength for the company to develop
            sustainably over time. Not only customers who are using the product,
            but also people who are interested in the product and the business.
            So, the first thing you need to build is to get people&apos;s
            attention besides developing the product. And BitScope can help you
            understand your customers, join the BitScope community here: <br />
            <Link
              href="https://discord.gg/BitScopeAI"
              target="_blank"
              className="text-blue-500"
            >
              Discord.gg/BitScopeAI
            </Link>
          </>
        }
      />
    </BlogContainer>
  );
}