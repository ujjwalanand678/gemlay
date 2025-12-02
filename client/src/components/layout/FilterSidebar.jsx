import { useState } from "react";
import { LiaRingSolid } from "react-icons/lia";
import { GiCrystalEarrings } from "react-icons/gi";
import { FaRing } from "react-icons/fa";
import { GiHeartNecklace } from "react-icons/gi";
import { GiDoubleNecklace } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";
import { AiFillGolden } from "react-icons/ai";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiGems } from "react-icons/gi";
import { FaRegCircle } from "react-icons/fa";

/* Reusable Section Component */
const Section = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-[12px] font-semibold text-gray-600 mb-3 uppercase tracking-wide">
      {title}
    </h3>
    <div className="space-y-2">{children}</div>
    <div className="border border-gray-200 mt-4"></div>
  </div>
);

const FilterSidebar = () => {
  const [selected, setSelected] = useState({});

  const handleSelect = (category, value) => {
    setSelected({ ...selected, [category]: value });
  };

  return (
    <div className="w-full md:w-64 bg-white border border-gray-200 rounded-lg p-5 text-sm">

      {/* FILTERS TITLE */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-[14px] tracking-wide text-[#2E2E2E]">FILTERS</h2>
        <span className="bg-radial from-[#40AB99] to-[#1A453E]  text-white text-[10px] px-2 py-[2px] rounded">
          3
        </span>
      </div>

      {/* PRICE SECTION */}
      <Section title="PRICE">
        {[
          { label: "Below ₹ 10,001", value: "below10001", count: 2 },
          { label: "₹ 10,001 - ₹ 15,000", value: "10001-15000", count: 2 },
          { label: "₹ 15,001 - ₹ 20,000", value: "15001-20000", count: 22 },
          { label: "₹ 20,001 - ₹ 30,000", value: "20001-30000", count: 83 },
          { label: "₹ 30,001 - ₹ 40,000", value: "30001-40000", count: 89 },
          { label: "₹ 40,001 - ₹ 50,000", value: "40001-50000", count: 100 },
        ].map((item) => (
          <label key={item.value} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="price"
              checked={selected.price === item.value}
              onChange={() => handleSelect("price", item.value)}
              className="accent-[#235e54]"
            />
            <span className="text-[13px] text-[#302F2F]  ">{item.label}</span>
            <span className="text-[11px] text-[#00614F] ">({item.count})</span>
          </label>
        ))}
      </Section>

      {/* PRODUCT TYPE SECTION */}
      <Section title="PRODUCT TYPE">
        {[
          { label: "Rings", count: 589 , icon: <LiaRingSolid size={14} color="#302F2F"/>},
          { label: "Earrings", count: 324 , icon: <GiCrystalEarrings size={14} color="#302F2F"/>},
          { label: "Bracelets", count: 81 , icon: <FaRing size={14} color="#302F2F"/>},
          { label: "Pendants", count: 83 , icon: <GiHeartNecklace size={14} color="#302F2F"/>},
          { label: "Bangles", count: 89 ,icon: <LiaRingSolid size={14} color="#302F2F"/>},
          { label: "Necklaces", count: 100 , icon: <GiDoubleNecklace size={14} color="#302F2F"/>},
        ].map((item) => (
          <label key={item.label} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="productType"
              checked={selected.productType === item.label}
              onChange={() => handleSelect("productType", item.label)}
              className="accent-[#235e54]"
            />
            <span className="flex items-center gap-1">
              {item.icon && item.icon}</span>
            <span className="text-[13px] text-[#302F2F] ">{item.label}</span>
            <span className="text-[11px] text-[#00614F]">({item.count})</span>
          </label>
        ))}
      </Section>

      {/* WEIGHT RANGE */}
      <Section title="WEIGHT RANGE">
        {[
          { label: "Under 2 grams", count: 589 },
          { label: "2 grams - 5 grams", count: 324 },
          { label: "5 grams - 10 grams", count: 81 },
          { label: "10 grams - 20 grams", count: 83 },
        ].map((item) => (
          <label key={item.label} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="weight"
              checked={selected.weight === item.label}
              onChange={() => handleSelect("weight", item.label)}
              className="accent-[#235e54]"
            />
            <span className="text-[13px] text-[#302F2F] ">{item.label}</span>
            <span className="text-[11px] text-[#00614F]">({item.count})</span>
          </label>
        ))}
      </Section>

      {/* MATERIAL */}
      <Section title="MATERIAL">
        {[
          { label: "Diamond", count: 589 , icon: <IoDiamondOutline size={14} color="#302F2F"/>},
          { label: "Gold", count: 324 , icon: <AiFillGolden size={14} color="#302F2F"/>},
          { label: "Solitaire", count: 81 , icon: <GiBigDiamondRing size={14} color="#302F2F"/>},
          { label: "Gemstone", count: 83 , icon: <GiGems size={14} color="#302F2F"/>},
        ].map((item) => (
          <label key={item.label} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="material"
              checked={selected.material === item.label}
              onChange={() => handleSelect("material", item.label)}
              className="accent-[#235e54]"
            />
              <span className="flex items-center gap-1">
              {item.icon && item.icon}</span>
            <span className="text-[13px] text-[#302F2F] ">{item.label}</span>
            <span className="text-[11px] text-[#00614F]">({item.count})</span>
          </label>
        ))}
      </Section>

      {/* METAL COLOUR */}
      <Section title="METAL COLOUR">
        {[
          { label: "Yellow Gold", count: 589 , icon: <FaRegCircle size={14} color="#EE9408"/>},
          { label: "White Gold", count: 324 , icon: <FaRegCircle size={14} color="#B7B7B7"/>},
          { label: "Rose Gold", count: 81, icon: <FaRegCircle size={14} color="#C7807E"/>},
        ].map((item) => (
          <label key={item.label} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="metal"
              checked={selected.metal === item.label}
              onChange={() => handleSelect("metal", item.label)}
              className="accent-[#235e54]"
            />
              <span className="flex items-center gap-1">
              {item.icon && item.icon}</span>
            <span className="text-[13px] text-[#302F2F] ">{item.label}</span>
            <span className="text-gray-400 text-[11px]">({item.count})</span>
          </label>
        ))}
      </Section>

      {/* MORE FILTERS BUTTON */}
      <button className="cursor-pointer w-full mt-4 py-2 text-white rounded-md bg-radial from-[#00AB63] to-[#1B3536]">
        More Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
