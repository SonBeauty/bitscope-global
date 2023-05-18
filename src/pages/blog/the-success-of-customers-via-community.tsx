import BlogContainer from "@/components/PageComponents/Blog/BlogContainer";
import TitleAndContent from "@/components/PageComponents/Blog/TitleAndContent";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
export default function Single() {
  return (
    <BlogContainer>
      <TitleAndContent
        title="The success of customers via community"
        content={
          <>
            Customer success managers are crucial to the expansion of
            businesses. They relentlessly concentrate on the accounts of their
            clients and how to assist them in achieving goals by utilizing the
            company&apos;s goods and/or services. This is crucial because, in
            the end, happy customers equal a successful business. A customer
            success manager must be proactive rather than reactive to the
            requirements of the customers they oversee in order to be effective.
            <br />
            <br />
            This position requires more effort than ever nowadays. Customer
            success managers frequently struggle for time and resources and are
            assigned ever-expanding tasks due to the emphasis on customer
            retention and the growth in fast scaling digital enterprises. They
            can be in charge of every aspect of their clients&apos; accounts,
            including product adoption, training, value realization, metrics,
            upselling, and a long list of other things.
            <br />
            <br />
            The COVID-19 has added new difficulties. Quantitative data are
            crucial, but contextual inputs are just as crucial—if not more
            so—than quantitative data. When you can combine them, you can make a
            real difference by getting as near as you can to your consumer and
            their experience. The core of customer success is relationship
            building, which is also a major source of those contextual inputs.
            Traditionally, a lot of it has taken place in person.
            <br />
            <br />
            However, the gatherings, onsites, and in-person onboarding
            opportunities that were customarily crucial in creating such solid
            connections have mostly been eliminated by the epidemic. Even while
            there is a gradual return to in-person relationships, the majority
            of interactions take place online – on social media, in forums, at
            virtual events, etc.
            <br />
            <br />
            How therefore can customer success managers overcome these obstacles
            and keep forging sincere connections that benefit both the company
            and its clients? Simply put: community. In my eight years working in
            customer success positions, I&apos;ve seen how the strength of the
            community can enhance the way I do my job and provide the
            impassioned feedback our teams need to create products that, in
            turn, make those users more successful and spur business growth.
            <br />
            <br />
            BitScope utilizes AI to analyze public conversations on the internet
            and social networks. This allows us to better understand customers,
            their opinions on products, brand management, prospecting, and
            competitor research. The core value of BitScope lies in its ability
            to analyze language, which is particularly advantageous for
            investors in the cryptocurrency market, where prices are largely
            influenced by buyer emotions.
          </>
        }
      />
      <TitleAndContent
        title="What does this entail for the success of the client?"
        content={
          <>
            In addition to customer advocacy, here are some examples of how
            customer success can harness the power of community:
            <ul>
              <li className="leading-normal py-1">
                <p className="flex items-center">
                  <span className="icon">
                    <CheckCircleIcon className="h-6 w-6 text-purple-500" />
                  </span>
                  <span className="ml-3">
                    <strong>Enablement/Education</strong> Every customer asks
                    “how do your best customers use &lt;product&gt;?,” and are
                    always looking for best practices. Who better to answer than
                    the best customers themselves? Software can be difficult to
                    adopt and often users are left struggling in the early part
                    of their product journey. Customer success teams can help
                    with onboarding and enablement, but they aren’t typically
                    trainers. Community provides peer-to-peer learning, and I’ve
                    found this kind of user-to-user sharing of best practices to
                    be more powerful, since it also provides mentorship and
                    connection among others with the same interests.
                  </span>
                </p>
              </li>
              <li className="leading-normal py-1">
                <p className="flex items-center">
                  <span className="icon">
                    <CheckCircleIcon className="h-6 w-6 text-purple-500" />
                  </span>
                  <span className="ml-3">
                    <strong> Growth/Upsell</strong> One of the best ways to grow
                    within accounts is to identify the product champions or
                    ambassadors within the organization. Since community exists
                    in so many places, it hasn’t always been easy to do. Your
                    current account contacts might be those champions, but it’s
                    quite possible there are others in the organization that you
                    can’t easily see. Or, when that main POC leaves, it can be
                    difficult to find a new internal sponsor. Using our
                    Organizations view, you can look at different members from
                    an account and how they’re engaging in the community. In
                    addition to this visibility, you also need a way to find
                    actionable signals in the noise. BitScope utilizes AI to
                    analyze public conversations on the internet and social
                    networks. This allows us to better understand customers,
                    their opinions on products, brand management, prospecting,
                    and competitor research. The core value of BitScope lies in
                    its ability to analyze language, which is particularly
                    advantageous for investors in the cryptocurrency market,
                    where prices are largely influenced by buyer emotions.
                  </span>
                </p>
              </li>
              <li className="leading-normal py-1">
                <p className="flex items-center">
                  <span className="icon">
                    <CheckCircleIcon className="h-6 w-6 text-purple-500" />
                  </span>
                  <span className="ml-3">
                    <strong>Risk/Churn</strong> Getting new clients isn&apos;t
                    enough. You must make sure the customers you already have
                    are benefiting from your offering and swiftly resolving
                    problems. If not, you run the danger of churn. Keep
                    consumers happy and engaged by being proactive in resolving
                    any negative sentiment or product difficulties. You may keep
                    tabs on consumer community sentiment with BitScope. The
                    Activity tab functions like a newsfeed. With filters for
                    positive and negative sentiment, it gathers all the comments
                    and conversations from all of your linked sources, allowing
                    you to better grasp both the positive and negative topics
                    that people are discussing. After that, you may evaluate the
                    negative and honor those who have done well. Additionally,
                    it provides you with insight into how engaged a company is
                    in the lead-up to renewal.
                  </span>
                </p>
              </li>
            </ul>
          </>
        }
      />
      <TitleAndContent
        title="Community as a differentiator for customer success"
        content={
          <>
            The most straightforward way to &quot;understand&quot; is to
            &quot;listen,&quot; and this is also the project&apos;s main
            objective.We bring you entirely new perspectives on data as we
            continue to learn from Web2&apos;s predecessors and harness the
            limitless potential of &quot;Artificial Intelligence&quot;
            (AI).Access to data is severely restricted for BitScope partners.
            small and medium businesses still experience technological issues
            with data outside of their system.In response to this suffering,
            BitScope was created.
            <br />
            <br />
            Looking forward to investigating it?To keep up with the newest
            information and to be among the first to receive access once we go
            live, sign up for our product testnet
          </>
        }
      />
    </BlogContainer>
  );
}