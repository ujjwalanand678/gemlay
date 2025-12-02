import { useState } from "react";
import { FiChevronDown, FiFilter } from "react-icons/fi";

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="w-full border-y bg-white py-4 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">

        {/* ----------- MOBILE LEFT: FILTERS ----------- */}
        <div className="flex items-center gap-2 md:hidden">
          <FiFilter className="text-xl text-gray-700" />
          <span className="font-medium text-sm text-gray-700">Filters</span>
          <span className="text-[#00A883] font-semibold text-sm">4</span>
        </div>

        {/* ----------- MOBILE CENTER: ALL RINGS PILL ----------- */}
        <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
          <button
            onClick={() => setActiveTab("all")}
            className="px-5 py-1.5 rounded-full bg-gradient-to-r from-[#12B98E] to-[#045E4F] text-white font-medium text-sm shadow"
          >
            All Rings <FiChevronDown className="inline ml-1 text-sm" />
          </button>
        </div>

        {/* ----------- MOBILE RIGHT: SORT ----------- */}
        <div className="md:hidden flex items-center gap-1 text-sm text-gray-600">
          Sort By: Relevance <FiChevronDown />
        </div>

        {/* ----------- DESKTOP CONTENT ----------- */}
        <div className="hidden md:flex items-center justify-between w-full">
          
          {/* LEFT: TABS */}
          <div className="flex items-center gap-6 text-[14px] text-gray-600">

            {/* All Rings active pill */}
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-1.5 rounded-full font-medium
                ${activeTab === "all"
                  ? "bg-gradient-to-r from-[#12B98E] to-[#045E4F] text-white shadow"
                  : "hover:text-black"}
              `}
            >
              All Rings
            </button>

            <button
              onClick={() => setActiveTab("new")}
              className={`${activeTab === "new" ? "font-semibold text-black" : "hover:text-black"}`}
            >
              New In
            </button>

            <button
              onClick={() => setActiveTab("today")}
              className={`${activeTab === "today" ? "font-semibold text-black" : "hover:text-black"}`}
            >
              Today’s Specials
            </button>

            <button
              onClick={() => setActiveTab("best")}
              className={`${activeTab === "best" ? "font-semibold text-black" : "hover:text-black"}`}
            >
              Best Sellers
            </button>
          </div>

          {/* RIGHT: DESKTOP FILTER OPTIONS */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            
            <button className="hover:text-black">
              Designs in store
            </button>

            <button className="px-4 py-1 border border-[#11a98f] text-[#0b7c63] rounded-full hover:bg-[#11a98f]/10 transition">
              Ready to Ship
            </button>

            <button className="flex items-center gap-1 hover:text-black">
              Sort By: Relevance <FiChevronDown />
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
