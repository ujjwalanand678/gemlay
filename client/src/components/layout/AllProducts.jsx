import React from "react";
import ProductCard from "../common/ProductCard";

import ad1 from "../../assets/images/adds1.png";
import ad2 from "../../assets/images/adds2.png";

import ring1 from "../../assets/images/_YA 1.png";
import ring2 from "../../assets/images/_YA 2.png";
import ring3 from "../../assets/images/_YA 3.png";
import ring4 from "../../assets/images/_YA 4.png";
import ring5 from "../../assets/images/_YA 5.png";
import ring6 from "../../assets/images/_YA 6.png";
import ring7 from "../../assets/images/_YA 7.png";
import ring8 from "../../assets/images/_YA 8.png";
import ring9 from "../../assets/images/_YA 9.png";
import ring10 from "../../assets/images/_YA 10.png";
import ring11 from "../../assets/images/_YA 11.png";
import ring12 from "../../assets/images/_YA 12.png";
import ring13 from "../../assets/images/_YA 13.png";
import ring14 from "../../assets/images/_YA 14.png";
import ring15 from "../../assets/images/_YA 15.png";
import ring16 from "../../assets/images/_YA 16.png";
import ring17 from "../../assets/images/_YA 17.png";
import ring18 from "../../assets/images/_YA 18.png";
import ring19 from "../../assets/images/_YA 19.png";
import ring20 from "../../assets/images/_YA 20.png";

const products = [
  { id: 1, image: ring1, price: "23,336", oldPrice: "24,336", title: "Yemeraly Wings Diamond Ring", discountText: "10 % on off Making Charges", isBestseller: true },
  { id: 2, image: ring2, price: "23,336", oldPrice: "24,336", title: "Classic Heart Diamond Ring", discountText: "10 % on off Making Charges", isBestseller: true },
  { id: 3, image: ring3, price: "23,336", oldPrice: "24,336", title: "Floral Shine Diamond Ring", discountText: "10 % on off Making Charges" },
  { id: 4, image: ring4, price: "23,336", oldPrice: "24,336", title: "Crown Elite Diamond Ring", discountText: "10 % on off Making Charges" },
  { id: 5, image: ring5, price: "23,336", oldPrice: "24,336", title: "Royal Bloom Diamond Ring", discountText: "10 % on off Making Charges" },
  { id: 6, image: ring6, price: "23,336", oldPrice: "24,336", title: "Eternal Love Diamond Ring", discountText: "10 % on off Making Charges" },
  { id: 7, image: ring7, price: "23,336", oldPrice: "24,336", title: "Moonlight Diamond Ring", discountText: "10 % on off Making Charges" },
  { id: 8, image: ring8, price: "23,336", oldPrice: "24,336", title: "Sunrise Diamond Ring", discountText: "10 % on off Making Charges" },
  { id: 9, image: ring9, price: "23,336", oldPrice: "24,336", title: "Aurora Diamond Ring", discountText: "10 % on off Making Charges" },
  { id: 10, image: ring10, price: "23,336", oldPrice: "24,336", title: "Starlit Diamond Ring", discountText: "10 % on off Making Charges" },
  { id: 11, image: ring11, price: "23,336", oldPrice: "24,336", title: "Elegance Diamond Ring", discountText: "10 % on off Making Charges" },
  { id: 12, image: ring12, price: "23,336", oldPrice: "24,336", title: "Regal Diamond Ring", discountText: "10 % on off Making Charges" },
  { id: 13, image: ring13, price: "23,336", oldPrice: "24,336", title: "Halo Diamond Ring", discountText: "10 % on off Making Charges" },
  { id: 14, image: ring14, price: "23,336", oldPrice: "24,336", title: "Serene Diamond Ring", discountText: "10 % on off Making Charges" },
  { id: 15, image: ring15, price: "23,336", oldPrice: "24,336", title: "Petal Diamond Ring", discountText: "10 % on off Making Charges" },
  { id: 16, image: ring16, price: "23,336", oldPrice: "24,336", title: "Vine Diamond Ring", discountText: "10 % on off Making Charges" },
  { id: 17, image: ring17, price: "23,336", oldPrice: "24,336", title: "Luxe Diamond Ring", discountText: "10 % on off Making Charges" },
  { id: 18, image: ring18, price: "23,336", oldPrice: "24,336", title: "Ornate Diamond Ring", discountText: "10 % on off Making Charges" },
  { id: 19, image: ring19, price: "23,336", oldPrice: "24,336", title: "Twilight Diamond Ring", discountText: "10 % on off Making Charges" },
  { id: 20, image: ring20, price: "23,336", oldPrice: "24,336", title: "Classic Solitaire Ring", discountText: "10 % on off Making Charges" },
];

const AllProducts = () => {
   const first8 = products.slice(0, 8);      // first block
  const next2 = products.slice(8, 10);      // before first ad
  const next8 = products.slice(10, 18);     // block of 8
  const last2 = products.slice(18, 20);     // before second ad

  return (
    <div className="space-y-10">

        {/* BLOCK 1 — First 8 cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {first8.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>

       {/* BLOCK 2 — 2 cards + AD1 + 2 cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">

        {/* First 2 cards */}
        {next2.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
  {/* AD 1 */}
        <div className="col-span-2 lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden">
          <img
            src={ad1}
            alt="Solitaire Ad"
            className="w-[555px] h-[387px]"
          />
        </div>
      
           </div>
 {/* BLOCK 3 — 8 cards normally */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {next8.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>

      {/* BLOCK 4: Remaining cards normally */}
      
       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {/* Ad 2 → left side, spans 2x2 */}
        <div className="col-span-2 lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden">
          <img
            src={ad2}
            alt="Bands Ad"
            className="w-[555px] h-[387px]"
          />
        </div>

        {/* cards 13–16 on right side (2x2) */}
        {last2.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
