import { CiHeart } from "react-icons/ci";
import { HiOutlineQrCode } from "react-icons/hi2";
import CardButton from "./CardButton.jsx";
import bestsellers from "../../assets/logo/bestsellers.png";
import { PiImagesSquareThin } from "react-icons/pi";

const ProductCard = ({ image, price, oldPrice, title, discountText }) => {
  return (
    <div className="w-full max-w-[300px] mx-auto">

      {/* TOP WHITE ROUNDED BOX */}
      <div className="bg-white rounded-2xl border-[#E1E1E1] p-4 shadow-sm">

        {/* Top Row */}
        <div className="flex justify-between items-center mb-1">
          <img src={bestsellers} alt="bestseller" className="w-[105px] h-[30px]" />
          <CiHeart size={18} color="#999999"/>
        </div>

        {/* Product Image */}
        <div className="mt-2 flex justify-center">
          <img src={image} alt={title} className="h-40 object-contain" />
        </div>

        {/* Color dots + QR */}
        <div className="flex items-center justify-between mt-3 px-2">
  
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
      <div className="mt-3 px-1">

        <p className="text-[22px] font-semibold text-gray-900">
          ₹{price}
          <span className="line-through text-gray-400 text-[14px] ml-2">
            ₹{oldPrice}
          </span>
        </p>

        <p className="text-gray-700 text-[15px] font-medium mt-1">
          {title}
        </p>

        <p className="text-[#0DB292] font-semibold text-[14px] underline mt-1">
          {discountText}
        </p>
      </div>

      {/* BUY BUTTON — OUTSIDE the box */}
      <div className="mt-4">
        <CardButton />
      </div>
    </div>
  );
};

export default ProductCard;
