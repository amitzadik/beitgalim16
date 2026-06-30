import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import FeaturedEvents from "@/components/FeaturedEvents/FeaturedEvents";
import InteractiveMap from "@/components/InteractiveMap/InteractiveMap";
import ProgramCategories from "@/components/ProgramCategories/ProgramCategories";
import PracticalInfo from "@/components/PracticalInfo/PracticalInfo";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedEvents />
        <InteractiveMap />
        <ProgramCategories />
        <PracticalInfo />
      </main>
      <Footer />
    </>
  );
}
