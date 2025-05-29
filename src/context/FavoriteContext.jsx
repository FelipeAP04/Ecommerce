import { createContext, useContext, useState } from "react";
import products from "../data/products.json";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const initialFavorites = products.reduce((acc, product) => {
    acc[product.id] = product.favorite || false;
    return acc;
  }, {});

  const [favorites, setFavorites] = useState(initialFavorites);

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId],
    }));
  };

  const isFavorite = (productId) => !!favorites[productId];

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export const useFavorite = () => useContext(FavoriteContext);
