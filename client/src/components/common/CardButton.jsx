import shopping from "../../assets/logo/shopping.svg";

const CardButton = () => {
  return (
    <button
      className=" cursor-pointer
        w-full h-[35px] py-3 mt-3 rounded-full text-white 
        flex items-center justify-center gap-2 text-[12px]
        bg-linear-to-r from-[#009E7F] to-[#00382D]
        hover:opacity-90 transition
      "
    >
      <img src={shopping} alt="shopping" />
      BUY NOW
    </button>
  );
};

export default CardButton;
