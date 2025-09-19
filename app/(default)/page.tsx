export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import Hero from "@/components/hero";
import Services from "@/components/services";
import Partners from "@/components/partners";
import TechPartners from "@/components/tech-partners";
import About from "@/components/about";
import AboutUs from "@/components/aboutus";
import Contact from "@/components/contact";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Partners />
      <TechPartners />
      <About />
      <AboutUs />
      <Contact />
      {/* <Newsletter /> */}
    </>
  );
}
