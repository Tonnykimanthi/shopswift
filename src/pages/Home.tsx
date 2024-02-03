import HomePageCategories from "../layouts/HomePageCategories";
import HeroSection from "../layouts/HeroSection";
import ShippingInfo from "../layouts/ShippingInfo";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ShippingInfo />
      <HomePageCategories />
    </div>
  );
};

export default Home;
