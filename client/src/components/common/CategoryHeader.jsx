const CategoryHeader = () => {
  return (
    <div className="w-full pt-10 pb-6">
      
      {/* Breadcrumbs + Count */}
      <div className="max-w-6xl mx-auto md:flex-row md:items-center md:justify-between px-5">
        
        {/* Breadcrumbs */}
        <p className="text-[10px] text-gray-600">
          Home / Collections / Engagement Rings <span className="text-black"></span>
        </p>

        {/* Product Count */}
        <p className="text-[10px] text-black font-medium mt-2 md:mt-0">
          (1140 products)
        </p>
      </div>

      {/* Title + Description */}
      <div className="text-center px-5">
        <h1 className="text-[30px]  tracking-wide">Engagement Rings</h1>

        <p className="text-gray-500 text-[11px] ">
          Explore an array of beautiful jewellery designed to suit every style.
        </p>

        <p className="text-gray-500 text-[11px]">
          Shop your favourite categories and find the perfect piece to make any moment special.
        </p>
      </div>
    </div>
  );
};

export default CategoryHeader;
