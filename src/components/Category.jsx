import { BiSolidCategory } from "react-icons/bi";
import { useCart } from "../contexts/CartContext";
import { useSearch } from "../contexts/SearchContext";
const Category = () => {
  const categoriesName = [
    "Airpods",
    "Headphones",
    "Macbooks",
    "Smartphones",
    "Watches",
  ];
  const { handleCategorySelect, selectCategory, clearFilter } = useSearch();
  return (
    <section className="w-full max-w-full bg-white">
      <div className="space-y-2">
        {/* header */}
        <div className="flex items-center space-x-2 px-4 py-2">
          <BiSolidCategory />
          <h4 className="text-xl font-medium">Categories</h4>
        </div>
        {/* categories list */}
        <div className="flex flex-col space-y-2 text-base font-medium">
          <button
            onClick={() => clearFilter()}
            className={`rounded bg-gradient-to-r from-slate-300 to-transparent px-4 py-2 text-start`}
          >
            All Products
          </button>
          {categoriesName.map((category) => (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className={`rounded bg-gradient-to-r from-slate-300 to-transparent px-4 py-2 text-start ${
                selectCategory === category
                  ? "border-l-[3px] border-slate-900"
                  : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
