import React, { createContext, useContext, useState } from "react";
import { productsArray } from "../products"; // Assuming you have a productsArray

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectCategory, setSelectCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(productsArray);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    applyFilters(query, selectCategory);
  };

  const handleCategorySelect = (category) => {
    setSelectCategory(category);
    applyFilters(searchQuery, category);
  };

  const applyFilters = (query, category) => {
    let products = productsArray;

    if (category) {
      products = products.filter((product) => product.category === category);
    }

    if (query) {
      products = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase()),
      );
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }

    setFilteredProducts(products);
  };

  // Clear filter when clicking on all products
  const clearFilter = () => {
    setSelectCategory(null);
    setSearchQuery("");
    setIsSearching(false);
    setFilteredProducts(productsArray); // Reset to all products
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        filteredProducts,
        handleSearch,
        handleCategorySelect,
        isSearching,
        selectCategory,
        clearFilter,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
