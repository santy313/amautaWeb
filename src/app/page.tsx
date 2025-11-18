import FAQsThree from "@/components/faqs-3";
import Features from "@/components/features-4";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-4";
import TeamSection from "@/components/team";



export default function Home() {
  return (
    <div>
      <HeroSection id="hero" />       
      <Features id="features" />
      <StatsSection id="stats" />
      <TeamSection id="team" />
      <FAQsThree id="faqs" />  
      <FooterSection id="footer" />
    </div>
  );
}
