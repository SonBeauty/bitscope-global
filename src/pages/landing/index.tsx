import AboutApp from "@/components/AboutApp";
import BeautifullInterface from "@/components/BeautifullInterface";
import Design from "@/components/Design";
import DownloadApp from "@/components/DownloadApp";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/PageComponents/Landing/Footer";
import Header from "@/components/PageComponents/Landing/Header";
import Section from "@/components/PageComponents/Landing/Section";
import Pricing from "@/components/Pricing";
import StoryLanding from "@/components/StoryLanding";
import Testimonial from "@/components/Testimonial";
import Trusted from "@/components/Trusted";
import Work from "@/components/Work";
import Head from "next/head";
import React from "react";
export default function LandingPage() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
          integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/css/bootstrap.min.css"
          integrity="sha512-T584yQ/tdRR5QwOpfvDfVQUidzfgc2339Lc8uBDtcp/wYu80d7jwBgAxbyMh0a9YM9F8N3tdErpFI8iaGx6x5g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
          integrity="sha512-1cK78a1o+ht2JcaW6g8OXYwqpev9+6GqOkz9xmBN9iUUhIndKtxwILGWYOSibOKjLsEdjyjZvYDq/cZwNeak0w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js"
          integrity="sha512-WNLxfP/8cVYL9sj8Jnp6et0BkubLP31jhTG9vhL/F5uEZmg5wEzKoXp1kJslzPQWwPT1eyMiSxlKCgzHLOTOTQ=="
          crossOrigin="anonymous"
          async
          referrerPolicy="no-referrer"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/js/bootstrap.min.js"
          integrity="sha512-7rusk8kGPFynZWu26OKbTeI+QPoYchtxsmPeBqkHIEXJxeun4yJ4ISYe7C6sz9wdxeE1Gk3VxsIWgCZTc+vX3g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
          integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw=="
          crossOrigin="anonymous"
          async
          referrerPolicy="no-referrer"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"
          integrity="sha512-A7AYk1fGKX6S2SsHywmPkrnzTZHrgiVT7GcQkLGDe2ev0aWb8zejytzS8wjo7PGEXKqJOrjQ4oORtnimIRZBtw=="
          crossOrigin="anonymous"
          async
          referrerPolicy="no-referrer"
        ></script>
        <script src="/assets/js/main.js" async></script>
      </Head>
      <div className="page-wrapper overflow-hidden">
        <Header />
        <Section />
        <Trusted />
        <Features />
        <AboutApp />
        <Design />
        <Work />
        <Testimonial />
        <Pricing />
        <Faq />
        <BeautifullInterface />
        <DownloadApp />
        <StoryLanding />
        <Footer />
      </div>
    </>
  );
}