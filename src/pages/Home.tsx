import HomePageCategories from "../layouts/HomePageCategories";
import HeroSection from "../layouts/HeroSection";
import ShippingInfo from "../layouts/ShippingInfo";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ShippingInfo />
      <HomePageCategories />
      <Footer />
    </div>
  );
};

export default Home;
