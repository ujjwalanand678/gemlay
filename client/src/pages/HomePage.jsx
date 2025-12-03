
import Hero from "../components/layout/Hero";
import CategoryTabs from "../components/common/CategoryTabs";
import Products from "../components/layout/Products";
import Footer from "../components/layout/Footer";

const HomePage = () => {
  return (<div>
    <Hero/>
    <CategoryTabs/>
    <Products/>
    <Footer/>
    </div>);
};

export default HomePage;
