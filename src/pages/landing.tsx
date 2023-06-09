import AboutApp from "@/components/PageComponents/Landing/AboutApp";
import Design from "@/components/PageComponents/Landing/Design";
import DownloadApp from "@/components/PageComponents/Landing/DownloadApp";
import Faq from "@/components/PageComponents/Landing/Faq";
import Features from "@/components/PageComponents/Landing/Features";
import LandingWithHeaderAndFooter from "@/components/PageComponents/Landing/LandingWithHeaderAndFooter";
import Section from "@/components/PageComponents/Landing/Section";
import Trusted from "@/components/PageComponents/Landing/Trusted";
export default function LandingPage() {
  return (
    <LandingWithHeaderAndFooter announce={true}>
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
