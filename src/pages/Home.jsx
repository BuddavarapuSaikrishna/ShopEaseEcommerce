import Hero from "../components/home/Hero";
import FeatureStrip from "../components/home/FeatureStrip";
import Categories from "../components/home/Categories";    
import TrendingProducts from "../components/home/TrendingProducts";
import NewArrivals from "../components/home/NewArrivals";
import SpecialOffers from "../components/home/SpecialOffers";
import WhyShopEase from "../components/home/WhyShopEase";
//import Footer from "../components/common/Footer";

function Home() {
  return (
    <main className="bg-[#FFF7ED]">
      <Hero />
      <FeatureStrip />
      <Categories />
      <TrendingProducts/>
      <NewArrivals/>
      <SpecialOffers/>
      <WhyShopEase/>
  
    </main>
  );
}

export default Home;