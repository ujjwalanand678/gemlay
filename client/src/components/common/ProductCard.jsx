import { CiHeart } from "react-icons/ci";
import CardButton from "./CardButton.jsx";
import bestsellers from "../../assets/logo/bestsellers.png";
import { PiImagesSquareThin } from "react-icons/pi";

const ProductCard = ({ image, price, oldPrice, title, discountText }) => {
  return (
    <div className="w-full max-w-[270px] ">

      {/* TOP WHITE ROUNDED BOX */}
      <div className=" bg-white rounded-2xl border-[#E1E1E1] p-4 shadow-sm">

        {/* Top Row */}
        <div className="flex justify-between items-center mb-1">
          <img src={bestsellers} alt="bestseller" className="w-[105px] h-[30px]" />
          <CiHeart size={18} color="#999999"/>
        </div>

        {/* Product Image */}
        <div className="flex justify-center">
          <img src={image} alt={title} className="w-[140px] md:w-[140px] lg:w-[200px] object-contain" />
        </div>

        {/* Color dots + QR */}
        <div className="flex items-center justify-between px-2">
  
  {/* Centered Color Dots */}
  <div className="flex-1 flex justify-center">
    <div className="flex gap-2">
      <span className="w-4 h-4 rounded-full border-2 border-[#EE9408]"></span>
      <span className="w-4 h-4 rounded-full border-2 border-[#B7B7B7]"></span>
      <span className="w-4 h-4 rounded-full border-2 border-[#C7807E]"></span>
    </div>
  </div>

  {/* QR / Image Icon */}
  <PiImagesSquareThin size={20} color="#999999" className="ml-auto" />

</div>

      </div>

      {/* PRICE + TEXT AREA — OUTSIDE the box */}
      <div className="mt-0.5 px-1">

        <p className="text-[18px] font-semibold text-[#555555]">
          ₹{price}
          <span className="line-through text-[#8E8E8E] font-medium text-[13px] ml-2">
            ₹{oldPrice}
          </span>
        </p>

        <p className="text-[#555555] text-[13px] font-semibold ">
          {title}
        </p>

        <p className="text-[#007A64] font-semibold text-[13px] ">
          {discountText}
        </p>
      </div>

      {/* BUY BUTTON */}
      
        <CardButton />
      
    </div>
  );
};

export default ProductCard;
