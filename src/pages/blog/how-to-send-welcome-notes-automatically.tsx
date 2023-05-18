import BlogContainer from "@/components/PageComponents/Blog/BlogContainer";
import TitleAndContent from "@/components/PageComponents/Blog/TitleAndContent";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function Single() {
  return (
    <BlogContainer>
      <TitleAndContent
        title="How to send welcome notes automatically"
        content={
          <>
            You`&apos;ve selected the channel and drafted a code of conduct,
            which are two crucial steps in organizing a successful community
            launch. It`&apos;s time to consider how to formally welcome
            newcomers to the neighborhood.
            <br />
            <br />
            Make sure participants feel confident to get in and start
            contributing. A welcome note is a terrific method to introduce
            yourself and explain the situation. You`&apos;re establishing the
            tone for a vibrant community by making new members feel at ease
            right away.
            <br />
            <br />
            When creating a welcome message, what to say and how to say it are
            two important factors to take into account.
          </>
        }
      />
      <TitleAndContent
        title="Why it's important to automate welcome messages"
        content={
          <>
            A vital step in the community onboarding process is the use of
            welcome messages. You won&apos;t miss a step if you automate them.
            <br /> <br />
            Automated welcome messages assist you in a number of ways, in
            addition to empowering and recognizing new community members:
            <ul>
              <li className="leading-normal py-1">
                <p className="flex items-center">
                  <span className="icon">
                    <CheckCircleIcon className="h-6 w-6 text-purple-500" />
                  </span>
                  <span className="ml-3">Save time</span>
                </p>
              </li>
              <li className="leading-normal py-1">
                <p className="flex items-center">
                  <span className="icon">
                    <CheckCircleIcon className="h-6 w-6 text-purple-500" />
                  </span>
                  <span className="ml-3">Boost productivity</span>
                </p>
              </li>
              <li className="leading-normal py-1">
                <p className="flex items-center">
                  <span className="icon">
                    <CheckCircleIcon className="h-6 w-6 text-purple-500" />
                  </span>
                  <span className="ml-3">Scale community strategy</span>
                </p>
              </li>
            </ul>
          </>
        }
      />
      <TitleAndContent
        title="What to put in the welcome message for your community"
        content={
          <>
            We think less is more when it comes to words, but don&apos;t
            shortchange the essentials. You&apos;re all set if you just keep to
            the information that is immediately necessary, mixed with a little
            individuality.
            <br />
            <br />
            When we first began, we addressed four topics in our word of welcome
            to all BitScope members:
            <ul>
              <li className="leading-normal py-1">
                <p className="flex items-center">
                  <span className="icon">
                    <CheckCircleIcon className="h-6 w-6 text-purple-500" />
                  </span>
                  <span className="ml-3">
                    Advice on how to set up their profile - Information on what
                    to discover in the community
                  </span>
                </p>
              </li>
              <li className="leading-normal py-1">
                <p className="flex items-center">
                  <span className="icon">
                    <CheckCircleIcon className="h-6 w-6 text-purple-500" />
                  </span>
                  <span className="ml-3">Contact information</span>
                </p>
              </li>
              <li className="leading-normal py-1">
                <p className="flex items-center">
                  <span className="icon">
                    <CheckCircleIcon className="h-6 w-6 text-purple-500" />
                  </span>
                  <span className="ml-3">A reference to our behavior code</span>
                </p>
              </li>
            </ul>
            Other useful things might be conversation starters or references to
            more resources, like:
            <ul>
              <li className="leading-normal py-1">
                <p className="flex items-center">
                  <span className="icon">
                    <CheckCircleIcon className="h-6 w-6 text-purple-500" />
                  </span>
                  <span className="ml-3">In-depth articles</span>
                </p>
              </li>
              <li className="leading-normal py-1">
                <p className="flex items-center">
                  <span className="icon">
                    <CheckCircleIcon className="h-6 w-6 text-purple-500" />
                  </span>
                  <span className="ml-3">Product descriptions</span>
                </p>
              </li>
              <li className="leading-normal py-1">
                <p className="flex items-center">
                  <span className="icon">
                    <CheckCircleIcon className="h-6 w-6 text-purple-500" />
                  </span>
                  <span className="ml-3">Additional local channels</span>
                </p>
              </li>
              <li className="leading-normal py-1">
                <p className="flex items-center">
                  <span className="icon">
                    <CheckCircleIcon className="h-6 w-6 text-purple-500" />
                  </span>
                  <span className="ml-3">
                    Anything you believe best conveys the message!
                  </span>
                </p>
              </li>
            </ul>
          </>
        }
      />
      <TitleAndContent
        title='How to express "welcome to the community" in the nicest way'
        content={
          <>
            You have alternatives about how to convey that message. Whether you
            host your community on Twitter, Discord, or another channel will
            have a minimal impact on these.
            <br />
            <br />
            You should also think about how many visitors you receive each day,
            how hands-on your staff wants to be, and which approach might work
            best for your community.
          </>
        }
      />
      <TitleAndContent
        title="Examples of how to automate your welcome message"
        content={
          <>
            CutiBot pinned message in the #announcement channel were both
            utilized when we originally launched the BitScope Discord to make
            sure no new members slipped through the cracks. The only difference
            between the two is that we made the CutiBot a little bit more
            succinct and added a particular person they could contact if they
            had any issues.
            <br />
            <br />
            We can make sure that everyone sees the message, that it is
            consistent, and that the links will always be available for future
            use by posting the identical message in a public channel.
          </>
        }
      />
      <br />
      <TitleAndContent
        title2="1. Write and schedule your welcome message automation"
        content={
          <>
            Since we launched the BitScope Discord, BitScope has added a
            brilliant automations feature set that enables you to create and
            schedule automated welcome messages to be sent to every new member
            that joins your community directly from a team member instead of a
            bot.
            <br />
            <br />
            The goal here is to ensure that every newcomer has a personal
            invitation to interact with a member of the community&apos;s host
            team. It&apos;s an effective way to open the door to conversation
            early.
          </>
        }
      />
      <br />
      <TitleAndContent
        title2="2. Be brief and to the point"
        content={
          <>
            We surveyed the BitScope community to find out which message they
            would want to receive before switching from CutiBot to the
            automations in BitScope. The lengthier option made clear that the
            greeting was an automated one, whereas the shorter option omitted
            this information.
            <br />
            <br />
            The community decided that a welcome greeting should be shorter and
            sweeter, therefore as of right now, each new member gets sent the
            following message:
            <br />
            <br />
            Welcome to the BitScope Discord server!
            <br />
            <br />
            We are an Artificial Intelligence project with the ability to listen
            and analyze conversations from the community platform.
            <br />
            <br />
            As you may (or may not :sweat_smile: ) notice, we&apos;ve started
            the Discord makeover :eyes:
            <br />
            <br />
            We implemented new channels, good spring cleanup and added some new
            features.
            <br />
            <br />
            Let me drag you around this space. We have: ⁠<br />
            <br />
            ╭announcement The most important updates. ⁠︱verify-me user
            verification ⁠︱events Awesome, I love parties, festivals and
            events... ⁠︱faq-update : Get a quick insight into BitScope by Q&A.
            <br />
            <br />
            ⁠╭liberty-hall only chat chit, no scam, no racism, no cheating ble
            ble... ⁠︱feedback-suggestions: Listening is our key.
            <br />
            <br />
            Best regards!
            <br />
            <br />
            You&apos;re free to use our messages as a starting point when
            creating your own!
          </>
        }
      />
      <br />
      <TitleAndContent
        title2="3. Send a personalized message"
        content={
          <>
            A customized message will never be out of style if you have a strong
            preference for personally connecting with each subscriber and are
            willing to commit the required time and resources to monitoring new
            sign-ups.
            <br />
            <br />
            The same information should be included, but we advise adding any
            personally identifiable information you may come across, such as the
            person&apos;s employer, place of residence, Twitter handle, etc.
            <br />
            <br />
            The following could resemble that:
            <br />
            <br />
            <i>
              Hey &lt;Username&gt;, welcome to BitScope - Beat of the Future!!
              We convert the endless conversations on the web into valuable
              signals, tailored to your specific needs.
            </i>
            <br />
            <br />
            <i>
              Want to use native language, please select your flag at
              #picklanguage
            </i>
          </>
        }
      />
      <br />
      <TitleAndContent
        title2="4. Make a call quickly"
        content={
          <>
            We&apos;re advising making a phone call in 2023? No and yes. There
            are better options than a standard 10-digit dial, like Zoom,
            Discord, and FaceTime. This is really intimate and provides you and
            the new member a chance to get to know one another on a deeply
            personal level. You may make the entire chat as lengthy or as quick
            as you wish, and you&apos;ll probably cover things you wouldn&apos;t
            learn about from a form.
            <br />
            <br />
            This enables you to send a follow-up with just the essential
            details. Pleasantries and personality have previously been
            discussed. Send them a heartfelt thank you for the conversation
            along with a list of links to get going.
            <br />
            <br />
            We won&apos;t instruct you on how to speak on the phone because you
            already know how to do it!
            <br />
            <br />
            <i>
              Hi Mike,
              <br /> Thanks for taking the time to chat earlier, we’re excited
              to have you and the Acme community as part of BitScope! As
              promised, below are a few different links I mentioned over the
              phone.
            </i>
            <ul>
              <li className="leading-normal py-1">
                <p className="flex items-center">
                  <span className="icon">
                    <CheckCircleIcon className="h-6 w-6 text-purple-500" />
                  </span>
                  <i className="ml-3">
                    Whenever you’re ready, you can check out our tips for
                    setting up your profile and look over the code of conduct.
                  </i>
                </p>
              </li>
              <li className="leading-normal py-1">
                <p className="flex items-center">
                  <span className="icon">
                    <CheckCircleIcon className="h-6 w-6 text-purple-500" />
                  </span>
                  <i className="ml-3">
                    To begin chatting, head to “hello” to introduce yourself and
                    meet fellow members, then see what everyone is talking about
                    in #community.
                  </i>
                </p>
              </li>
              <li className="leading-normal py-1">
                <p className="flex items-center">
                  <span className="icon">
                    <CheckCircleIcon className="h-6 w-6 text-purple-500" />
                  </span>
                  <i className="ml-3">
                    We’re also on Twitter as @BitscopeAI and share regular
                    articles over on the BitScope blog.
                  </i>
                </p>
              </li>
            </ul>
            <i>
              If you run into trouble or have any questions, please don’t
              hesitate to reach out. Looking forward to connecting again soon
            </i>
            <br />
            <br />
            The welcome message should be quick and to the point, and include a
            few bonus links if they came up in the conversation. It&apos;s
            important to take notes during the conversation in order to
            personalize the follow-up.
          </>
        }
      />
      <br />
      <TitleAndContent
        title2="5. Deliver a surprise gift"
        content={
          <>
            Receiving unexpected stuff emerged as the top choice in a short,
            informal survey of our Twitter friends&apos; opinions on how to be
            greeted.
            <br />
            <br />
            Although it could seem like a lot of work, think of it as a
            combination of a brief phone call and a personalized message: You
            draft a letter to add with the delivery, after which you send a
            second email with all the pertinent links.
            <br />
            <br />
            The hardest portion is already taken care of if you include a
            request for an address in the sign-up process. Send a handwritten
            greeting, some socks, a hat, and surely a colorful drinking vessel
            for the perfect hello.
            <br />
            <br />
            For instance:
            <br />
            <i>Alan,</i>
            <br />
            <i>
              {" "}
              To welcome the community to BitScope, we are quite excited.
              Let&apos;s progress and learn together!
            </i>
          </>
        }
      />
      <TitleAndContent
        title="There is no incorrect response"
        content={
          <>
            Whatever path you choose will be ideal since it represents your
            neighborhood! Don&apos;t overthink your comments; simply make
            newcomers to the community feel at ease. Prioritize communicating
            the information people need to know, and let everything else follow.
            <br />
            <br />
            Perhaps you already rely on a script or template. If you do and feel
            like telling us about it, please do. Send us a tweet or leave it in
            the{" "}
            <Link
              href="https://discord.gg/bitscopeai"
              target="_blank"
              className="text-blue-500"
            >
              {" "}
              <ins>BitScope Discord</ins>{" "}
            </Link>{" "}
            channel by signing up for the server!
          </>
        }
      />
    </BlogContainer>
  );
}