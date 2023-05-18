import BlogContainer from "@/components/PageComponents/Blog/BlogContainer";
import CheckList from "@/components/PageComponents/Blog/CheckList";
import TitleAndContent from "@/components/PageComponents/Blog/TitleAndContent";
const arrCheckList = [
  {
    content: "Analyze the number of followers, members",
  },
  {
    content: "Analyze each follower&apos;s profile",
  },
  {
    content:
      "Provide an average score for each appraised account based on a combination of multiple criteria",
  },
];
export default function Single() {
  return (
    <BlogContainer>
      <TitleAndContent
        title="What is Bit-Authentication?"
        content='Bit-Authen is a service used to verify the "trust"
            level of members in any community. Bit Authentication targets
            Twitter, Telegram, and Discord among other groups.'
      />
      <TitleAndContent
        title="What are the functions of Bit-Authentication?"
        content={
          <>
            Bit-Authentication uses “Behavior Model” and “Language Duplicate
            Habit Model” to determine whether a user is a real user or a BOT.
            <br /> <br />
            Bit-Auth has now completed the audit functions on Twitter and
            Telegram platforms:
            <CheckList arrRender={arrCheckList} />
            From meticulously analyzed factors, Bit-Auth will make general
            conclusions about the community on a scale to evaluate in the most
            objective way.
          </>
        }
      />
      <TitleAndContent
        title="Benefits of using Bit-Auth"
        content={
          <>
            Bit-Authentication may offer an overview of the community&apos;s
            activities, each detail is clearly and swiftly exposed, helping you
            clarify whether it is a quality community or not after the
            community&apos;s overall quality has been established.
            Bit-Authentication readily assists you in filtering out probable
            communities from among the communities you wish to verify by relying
            on a fully functional, comprehensive functionality system.
            <br /> <br />
            More specifically, Bit-Auth will be the pioneering project in
            verifying real/BOT-net users on the telegram platform. This is a
            point that no other project on the market can do. Thanks to
            Bit-Auth, users will not need to have a headache to find potential
            investment channels among dozens of channels with a wealth of
            knowledge out there, a well-defined reputable community, you
            won&apos;t have to go into in the wrong place, limiting the chance
            of encountering fake communities that do not bring you any value.
            <br /> <br />
            Verification of bots or real users is not a new concept, but with
            BitScope, our project aims to thoroughly evaluate and optimize user
            accounts. We go beyond basic assessments to provide our customers
            with accurate results as quickly as possible.
            <br /> <br />
            In addition to the aforementioned communities, Bit-Auth will also be
            conducted on the Discord channel by the BitScope team. Discord is a
            promising investment channel for professional cryptocurrency
            investors, but as of yet, no project has been able to verify Discord
            accounts. BitScope aims to be a pioneer in this area, opening up
            more investment opportunities for our customers in cryptocurrency.
          </>
        }
      />
      <TitleAndContent
        title="Opportunity for BitScoper Newbie"
        content={
          <>
            When you join BitScope as a member and experience Bit-Authentication
            early on, you&apos;ll have the chance to take on important roles,
            have a voice in the community, and be heard by the project team.
            You&apos;ll also be eligible for a whitelist or token when the
            project progresses to development and launchpad stages.
            <br /> <br />
            Explore the hidden value of Bit-Authentication and the BitScope
            ecosystem today!
            <br /> <br />
            Join BitScope&apos;s Discord now:
            <br /> <br />
            <a
              href="https://discord.io/Bitscope"
              target="_blank"
              className="text-blue-500"
            >
              https://discord.io/Bitscope
            </a>
          </>
        }
      />
    </BlogContainer>
  );
}