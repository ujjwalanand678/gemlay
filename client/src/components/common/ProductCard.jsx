import { AiOutlineHeart } from "react-icons/ai";
import CardButton from "./CardButton.jsx";

const ProductCard = ({
  image,
  price,
  oldPrice,
  title,
  discountText,
  isBestseller = false,
}) => {
  return (
    <div className="w-full max-w-xs bg-white rounded-2xl shadow-md p-3 border hover:shadow-lg transition cursor-pointer">
      
      {/* Top Row: Bestseller Badge + Wishlist */}
      <div className="flex justify-between items-center px-1">
        {isBestseller && (
          <div className="flex items-center gap-1 border border-[#0DB292] text-[#0DB292] text-xs px-2 py-1 rounded-full">
            <span className="font-semibold">BESTSELLER</span>
          </div>
        )}
        <AiOutlineHeart className="text-gray-500 text-xl" />
      </div>

      {/* Product Image */}
      <div className="mt-2 flex justify-center">
        <img
          src={image}
          alt={title}
          className="h-32 object-contain"
        />
      </div>

      {/* Color Dots */}
      <div className="flex justify-center gap-2 mt-2">
        <span className="w-3 h-3 rounded-full bg-[#d49d28] border"></span>
        <span className="w-3 h-3 rounded-full bg-[#d08d72] border"></span>
        <span className="w-3 h-3 rounded-full bg-[#7e6160] border"></span>
      </div>

      {/* Price */}
      <div className="mt-3 px-1">
        <p className="text-[18px] font-semibold text-gray-800">
          ₹{price}
          <span className="line-through text-gray-400 text-sm ml-2">₹{oldPrice}</span>
        </p>

        <p className="text-gray-700 text-sm font-medium">{title}</p>

        <p className="text-[#0DB292] text-sm font-semibold underline cursor-pointer">
          {discountText}
        </p>
      </div>

      {/* Buy Now Button */}
      <CardButton />
    </div>
  );
};

export default ProductCard;
