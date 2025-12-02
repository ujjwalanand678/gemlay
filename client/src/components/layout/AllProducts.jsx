import React from "react";
import ProductCard from "../common/ProductCard";

const AllProducts = () => {
  const products = [
    {
      id: 1,
      image: "/images/ring1.png",
      price: "23,336",
      oldPrice: "24,336",
      title: "Yemeraly Wings Diamond Ring",
      discountText: "10 % on off Making Charges",
      isBestseller: true,
    },
    {
      id: 2,
      image: "/images/ring2.png",
      price: "23,336",
      oldPrice: "24,336",
      title: "Classic Heart Diamond Ring",
      discountText: "10 % on off Making Charges",
      isBestseller: true,
    },
    {
      id: 3,
      image: "/images/ring3.png",
      price: "23,336",
      oldPrice: "24,336",
      title: "Floral Shine Diamond Ring",
      discountText: "10 % on off Making Charges",
    },
    {
      id: 4,
      image: "/images/ring4.png",
      price: "23,336",
      oldPrice: "24,336",
      title: "Crown Elite Diamond Ring",
      discountText: "10 % on off Making Charges",
    },

    // Add as many more as you want...
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          image={item.image}
          price={item.price}
          oldPrice={item.oldPrice}
          title={item.title}
          discountText={item.discountText}
          isBestseller={item.isBestseller}
        />
      ))}
    </div>
  );
};

export default AllProducts;
