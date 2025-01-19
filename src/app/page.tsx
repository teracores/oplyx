import HeroSection from "@/component/HeroSection/HeroSection";
import About from "@/component/About/About";
import { Banner } from "@/component/Banner/Banner";
import Service from "@/component/Service/service";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Banner />
      <Service />
    </div>
  );
}
