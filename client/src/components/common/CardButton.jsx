import { FiShoppingBag } from "react-icons/fi";

const CardButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        w-full py-3 mt-3 rounded-full text-white 
        flex items-center justify-center gap-2 font-medium text-sm
        bg-linear-to-r from-[#0DB292] to-[#004E40]
        hover:opacity-90 transition
      "
    >
      <FiShoppingBag size={18} />
      BUY NOW
    </button>
  );
};

export default CardButton;
