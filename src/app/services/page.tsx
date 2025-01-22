import NewService from "@/component/Service/NewService";
import ServicesHero from "@/component/ServicesHero/ServicesHero";
import Support from "@/component/Support/Support";

const page = () => {
  return (
    <main className="">
      <ServicesHero />
      <NewService />
      <Support />
    </main>
  );
};

export default page;
