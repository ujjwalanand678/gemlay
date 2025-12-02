const CategoryHeader = () => {
  return (
    <div className="w-full pt-8 pb-6">
      {/* Breadcrumbs + Count */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Breadcrumbs */}
          <p className="text-[10px] sm:text-[12px] text-gray-600">
            Home / Collections / Engagement Rings
          </p>

          {/* Product Count */}
          <p className="text-[10px] sm:text-[12px] text-gray-800 font-medium ">
            (1140 products)
          </p>
        </div>
      </div>

      {/* Title + Description */}
      <div className=" px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-[20px]sm:text-[20px] md:text-[20px] lg:text-[30px] font-semibold tracking-tight">
            Engagement Rings
          </h1>

          <p className="mt-3 text-gray-500 text-[11px] sm:text-[11px] md:text-[11px] leading-relaxed">
            Explore an array of beautiful jewellery designed to suit every style.
          </p>

          <p className="mt-1 text-gray-500 text-[11px] sm:text-[11px] md:text-[11px] leading-relaxed">
            Shop your favourite categories and find the perfect piece to make any moment special.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;




