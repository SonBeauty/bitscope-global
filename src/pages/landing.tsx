import AboutApp from "@/components/AboutApp";
import Design from "@/components/Design";
import DownloadApp from "@/components/DownloadApp";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import LandingWithHeaderAndFooter from "@/components/PageComponents/Landing/LandingWithHeaderAndFooter";
import Section from "@/components/PageComponents/Landing/Section";
import Trusted from "@/components/Trusted";
export default function LandingPage() {
  return (
    <LandingWithHeaderAndFooter announce={true} >
      <Section />
      <div className="max-w-[1170px] mx-auto">
        <Trusted />
        <Features />
        <AboutApp />
        <Design />
      </div>
      <DownloadApp />
      <div className="max-w-[1170px] mx-auto">
        <Faq />
      </div>
    </LandingWithHeaderAndFooter>
  );
}
