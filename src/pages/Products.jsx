// import { useCart } from "../contexts/CartContext";
// import Card from "../components/Card";
// import Category from "../components/Category";

// const Products = () => {
//   const { selectCategory, searchResult } = useCart();
//   const productHeader = selectCategory ? `${selectCategory}` : "All Products";

//   return (
//     <section className="mx-auto min-h-screen max-w-6xl pt-24">
//       <Category />
//       <div>
//         <h1 className="mt-8 text-center text-4xl font-semibold">
//           {productHeader}
//         </h1>
//         <div className="mx-auto mt-2 h-1 w-40 rounded-lg bg-black"></div>
//       </div>
//       <div className="relative grid grid-cols-1 gap-6 px-4 pt-8 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
//         {searchResult.length === 0 ? (
//           <h2 className="col-span-3 row-span-3 place-self-center text-center text-lg tracking-tighter lg:mt-8 lg:text-2xl">
//             Oops! No products here. Maybe they're on vacation? 🙁
//           </h2>
//         ) : (
//           searchResult.map((product) => (
//             <Card key={product.id} product={product} />
//           ))
//         )}
//       </div>
//     </section>
//   );
// };

// export default Products;

import React from "react";
import { useSearch } from "../contexts/SearchContext";
import { useCart } from "../contexts/CartContext";
import Card from "../components/Card";
import Category from "../components/Category";
import SearchResults from "../components/SearchResult";
const Products = () => {
  const { selectCategory } = useCart();
  const { filteredProducts, isSearching } = useSearch();
  const productHeader = selectCategory ? `${selectCategory}` : "All Products";

  return (
    <section className="mx-auto min-h-screen max-w-6xl pt-24">
      <Category />
      <div>
        <h1 className="mt-8 text-center text-4xl font-semibold">
          {productHeader}
        </h1>
        <div className="mx-auto mt-2 h-1 w-40 rounded-lg bg-black"></div>
      </div>
      {isSearching ? (
        <SearchResults />
      ) : (
        <div className="relative grid grid-cols-1 gap-6 px-4 pt-8 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
