import HeroSection from "@/component/HeroSection/HeroSection";
import About from "@/component/About/About";
import { Banner } from "@/component/Banner/Banner";
import Service from "@/component/Service/service";
import Banner2 from "@/component/Banner2/Banner2";
import Choose from "@/component/Choose/Choose";
import AboutUs from "@/component/About/AboutUS";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Banner />
      <Service />
      <Banner2 />
      <Choose />
      <AboutUs />
    </div>
  );
}
