import Author from "@/components/PageComponents/Blog/Author";
import MainBlog from "@/components/PageComponents/Blog/MainBlog";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Single() {
  return (
    <MainBlog>
      <section className="blog_detail_section">
        <div className="container">
          <div className="blog_inner_pannel">
            {/* <div className="review">
              <span>Review</span>
              
            </div> */}
            <div className="section_title">
              <h2>
                Bit-Authentication - BitScope&apos;s first product gradually
                perfected
              </h2>
            </div>
            <div className="main_img">
              <img src="https://i.imgur.com/LodGMck.png" alt="image" />
            </div>
            <div className="info">
              <h3>What is Bit-Authentication?</h3>
              <p>
                Bit-Authen is a service used to verify the &quot;trust&quot;
                level of members in any community. Bit Authentication targets
                Twitter, Telegram, and Discord among other groups.
              </p>
            </div>

            <div className="info">
              <h3>What are the functions of Bit-Authentication?</h3>
              <p>
                Bit-Authentication uses “Behavior Model” and “Language Duplicate
                Habit Model” to determine whether a user is a real user or a
                BOT.
                <br /> <br />
                Bit-Auth has now completed the audit functions on Twitter and
                Telegram platforms:
                <ul>
                  <li>
                    <p>
                      {" "}
                      <span className="icon">
                        <CheckCircleIcon className="h-6 w-6 text-purple-500" />
                      </span>
                      Analyze the number of followers, members
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      <span className="icon">
                        <CheckCircleIcon className="h-6 w-6 text-purple-500" />
                      </span>
                      Analyze each follower&apos;s profile
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      <span className="icon">
                        <CheckCircleIcon className="h-6 w-6 text-purple-500" />
                      </span>
                      Provide an average score for each appraised account based
                      on a combination of multiple criteria
                    </p>
                  </li>
                </ul>
                From meticulously analyzed factors, Bit-Auth will make general
                conclusions about the community on a scale to evaluate in the
                most objective way.
              </p>
            </div>
            <div className="info">
              <h3>Benefits of using Bit-Auth</h3>
              <p>
                Bit-Authentication may offer an overview of the community&apos;s
                activities, each detail is clearly and swiftly exposed, helping
                you clarify whether it is a quality community or not after the
                community&apos;s overall quality has been established.
                Bit-Authentication readily assists you in filtering out probable
                communities from among the communities you wish to verify by
                relying on a fully functional, comprehensive functionality
                system.
                <br /> <br />
                More specifically, Bit-Auth will be the pioneering project in
                verifying real/BOT-net users on the telegram platform. This is a
                point that no other project on the market can do. Thanks to
                Bit-Auth, users will not need to have a headache to find
                potential investment channels among dozens of channels with a
                wealth of knowledge out there, a well-defined reputable
                community, you won&apos;t have to go into in the wrong place,
                limiting the chance of encountering fake communities that do not
                bring you any value.
                <br /> <br />
                Verification of bots or real users is not a new concept, but
                with BitScope, our project aims to thoroughly evaluate and
                optimize user accounts. We go beyond basic assessments to
                provide our customers with accurate results as quickly as
                possible.
                <br /> <br />
                In addition to the aforementioned communities, Bit-Auth will
                also be conducted on the Discord channel by the BitScope team.
                Discord is a promising investment channel for professional
                cryptocurrency investors, but as of yet, no project has been
                able to verify Discord accounts. BitScope aims to be a pioneer
                in this area, opening up more investment opportunities for our
                customers in cryptocurrency.
              </p>
            </div>
            <div className="info">
              <h3>Opportunity for BitScoper Newbie</h3>
              <p>
                When you join BitScope as a member and experience
                Bit-Authentication early on, you&apos;ll have the chance to take
                on important roles, have a voice in the community, and be heard
                by the project team. You&apos;ll also be eligible for a
                whitelist or token when the project progresses to development
                and launchpad stages.
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
              </p>
            </div>

            <Author />
          </div>
        </div>
      </section>
    </MainBlog>
  );
}
