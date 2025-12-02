import { FiSearch } from "react-icons/fi";
import { MdOutlineCameraAlt } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div
      className="
        flex items-center 
        bg-[#161B1F] 
        border border-[#2E6D6A] 
        rounded-full 
        px-4 py-2 
        h-[36px]
      "
    >
      <input
        type="text"
        placeholder={placeholder}
        className="
          grow 
          bg-transparent 
          outline-none 
          text-[14px] 
          text-gray-200 
          placeholder-gray-400
        "
      />

      <MdOutlineCameraAlt
        size={16}
        className="text-[#B8E9E3] mr-3 cursor-pointer"
      />

      <FiSearch
        size={16}
        className="text-white cursor-pointer"
      />
    </div>
  );
};

export default Search;
