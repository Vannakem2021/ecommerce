import React from "react";
import { useSearch } from "../contexts/SearchContext";
import Card from "./Card";

const SearchResults = () => {
  const { filteredProducts } = useSearch();

  return (
    <div className="mx-auto h-full max-w-6xl">
      {filteredProducts.length > 0 ? (
        <div className="relative grid grid-cols-1 gap-6 px-4 pt-8 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="flex h-[40vh] items-center justify-center text-lg font-semibold tracking-tighter lg:mt-8 lg:text-3xl">
          Oops! No products here. Maybe they're on vacation? 🙁
        </p>
      )}
    </div>
  );
};

export default SearchResults;
