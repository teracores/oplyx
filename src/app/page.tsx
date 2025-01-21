import HeroSection from "@/component/HeroSection/HeroSection";
import About from "@/component/About/About";
import { Banner } from "@/component/Banner/Banner";
import Service from "@/component/Service/service";
import Banner2 from "@/component/Banner2/Banner2";
import Choose from "@/component/Choose/Choose";
import Testimonials from "@/component/Testimonials/Testimonials";
import Marquees from "@/component/Marquee/Marquees";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Marquees />
      <Banner />
      <Service />
      <Banner2 />
      <Choose />
      <Testimonials />
    </div>
  );
}
