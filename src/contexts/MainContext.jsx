import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const [wishlists, setWishlists] = useState([]);
  const [userId, setUserId] = useState(null);

  const saveUserCartsAndWishlists = useCallback(() => {
    if (userId) {
      localStorage.setItem(`${userId}-carts`, JSON.stringify(carts));
      localStorage.setItem(`${userId}-wishlists`, JSON.stringify(wishlists));
    }
  }, [carts, wishlists, userId]);

  const restoreUserCartsAndWishlists = useCallback((userId) => {
    setUserId(userId);
    const savedCarts = localStorage.getItem(`${userId}-carts`);
    const savedWishlists = localStorage.getItem(`${userId}-wishlists`);
    if (savedCarts) setCarts(JSON.parse(savedCarts));
    if (savedWishlists) setWishlists(JSON.parse(savedWishlists));
  }, []);

  const clearCart = useCallback(() => {
    setCarts([]);
    localStorage.removeItem("carts");
  }, []);

  const clearWishlist = useCallback(() => {
    setWishlists([]);
    localStorage.removeItem("wishlists");
  }, []);

  useEffect(() => {
    if (userId) {
      localStorage.setItem(`${userId}-carts`, JSON.stringify(carts));
      localStorage.setItem(`${userId}-wishlists`, JSON.stringify(wishlists));
    }
  }, [carts, wishlists, userId]);

  const removeFromWishlist = (id) => {
    setWishlists((prevWishlists) => {
      const updatedWishlists = prevWishlists.filter(
        (product) => product.id !== id,
      );
      if (userId) {
        localStorage.setItem(
          `${userId}-wishlists`,
          JSON.stringify(updatedWishlists),
        );
      }
      return updatedWishlists;
    });
  };

  const removeFromCart = (id) => {
    setCarts((prevCarts) => {
      const updatedCarts = prevCarts.filter((product) => product.id !== id);
      if (userId) {
        localStorage.setItem(`${userId}-carts`, JSON.stringify(updatedCarts));
      }
      return updatedCarts;
    });
  };

  return (
    <MainContext.Provider
      value={{
        carts,
        setCarts,
        wishlists,
        setWishlists,
        clearCart,
        clearWishlist,
        saveUserCartsAndWishlists,
        restoreUserCartsAndWishlists,
        removeFromWishlist,
        removeFromCart,
        setUserId,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMain = () => useContext(MainContext);
