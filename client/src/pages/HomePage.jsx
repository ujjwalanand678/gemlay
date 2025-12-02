import React from "react";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import CategoryTabs from "../components/common/CategoryTabs";
import Products from "../components/layout/Products";

const HomePage = () => {
  return (<div>
    <Hero/>
    <CategoryTabs/>
    <Products/>
    </div>);
};

export default HomePage;
