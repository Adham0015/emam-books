import HeroSection from "@/components/HeroSection";
import OurBook from "@/components/OurBook";
import OurBook2 from "@/components/OurBook2";
import Partner from "@/components/Partner";
import Sign from "@/components/Sign";

const HomePage = () => {
  return (
    <div className="w-screen mb-0">
      <HeroSection />
      <Partner />
      <OurBook />
      <OurBook2 />
      <Sign />
    </div>
  );
};

export default HomePage;
