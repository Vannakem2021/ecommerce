// contexts/CartContext.js
import toast from "react-hot-toast";
import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { productsArray } from "../products";
import { useAuth } from "./AuthContext";
import { useMain } from "./MainContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { carts, setCarts, wishlists, setWishlists } = useMain();
  const { user } = useAuth();
  const navigate = useNavigate();

  // Category Filter State
  const [selectCategory, setSelectCategory] = useState(null);
  // Search Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [lastAddedProduct, setLastAddedProduct] = useState(null);

  // Get product Quantity
  const getProductQty = (id) => {
    const quantity = carts.find((product) => product.id === id)?.quantity;
    return quantity === undefined ? 0 : quantity;
  };

  // Add one product to cart
  const addOneToCart = (id) => {
    if (!user) {
      toast.error("Please login to add product to cart");
      navigate("/signin");
      return;
    }
    const quantity = getProductQty(id);
    if (quantity === 0) {
      const productToAdd = productsArray.find((product) => product.id === id);
      setCarts([...carts, { ...productToAdd, quantity: 1 }]);
      setLastAddedProduct(productToAdd);
    } else {
      const updatedCart = carts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );
      setCarts(updatedCart);

      const productName = productsArray.find(
        (product) => product.id === id,
      ).title;
      setLastAddedProduct({ title: productName, updated: true });
    }
  };

  // Delete product from cart
  // const deleteFromCart = (id) => {
  //   const updatedCart = carts.filter((product) => product.id !== id);
  //   setCarts(updatedCart);
  // };

  // Get total quantity of products in cart
  const getTotalQuantityInCart = () => {
    return carts.reduce((total, product) => product.quantity + total, 0);
  };

  // Get total cost
  const getTotalCost = () => {
    return carts
      .reduce((total, product) => product.quantity * product.price + total, 0)
      .toFixed(2);
  };

  // Add product to wishlist function
  const addToWishlist = (id) => {
    if (!user) {
      toast.error("Please login to add product to cart");
      navigate("/signin");
      return;
    }
    const product = productsArray.find((product) => product.id === id);
    setWishlists((prev) => {
      if (prev.some((item) => item.id === id)) {
        return prev.filter((item) => item.id !== id);
      } else {
        toast.success(`Product added to wishlist!`);
        return [...prev, product];
      }
    });
  };

  // Check if a product is in the wishlist
  const isWishlist = (id) => wishlists.some((product) => product.id === id);

  // Remove product from wishlist function
  // const removeFromWishlist = (id) => {
  //   setWishlists((prevWishlists) => {
  //     const updatedWishlists = prevWishlists.filter(
  //       (product) => product.id !== id,
  //     );
  //     localStorage.setItem("wishlists", JSON.stringify(updatedWishlists));
  //     return updatedWishlists;
  //   });
  // };

  // Get total number of wishlist products
  const totalWishlistProducts = wishlists.length;

  // Notify user when a product is added or updated in the cart
  useEffect(() => {
    if (lastAddedProduct) {
      if (lastAddedProduct.updated) {
        toast.success(`${lastAddedProduct.title} quantity updated in cart!`);
      } else {
        toast.success(`${lastAddedProduct.title} added to cart!`);
      }
      setLastAddedProduct(null);
    }
  }, [carts]);

  return (
    <CartContext.Provider
      value={{
        addOneToCart,
        getTotalQuantityInCart,
        getProductQty,
        getTotalCost,
        addToWishlist,
        wishlists,
        isWishlist,
        totalWishlistProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
