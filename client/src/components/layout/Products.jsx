
import FilterSidebar from "./FilterSidebar";
import AllProducts from "./AllProducts";

const Products = () => {
  return (
    <section className="flex gap-6 w-full px-6 py-6">

      {/* Left Sidebar */}
      <div className="hidden md:block">
        <FilterSidebar />
      </div>

      {/* Right Products Grid */}
      <div className="flex-1">
        <AllProducts />
      </div>

    </section>
  );
};

export default Products;
