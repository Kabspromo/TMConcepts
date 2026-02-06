import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import PastEvents from "@/components/home/PastEvents";
import Stats from "@/components/home/Stats";
import CTAStrip from "@/components/home/CTAStrip";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesOverview />
      <PastEvents />
      <Stats />
      <CTAStrip />
    </Layout>
  );
};

export default Index;
