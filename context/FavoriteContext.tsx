import { createContext, useState, useContext, useEffect } from 'react';

interface FavoriteContextType {
  favorites: Record<string, boolean>;
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  getFavoriteProducts: () => string[];
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : {};
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => {
      const currentValue = prev[productId];
      if (!currentValue) {
        return { ...prev, [productId]: true };
      } else {
        const { [productId]: removed, ...rest } = prev;
        return rest;
      }
    });
  };

  const isFavorite = (productId: string) => {
    return productId in favorites && favorites[productId] === true;
  };

  const getFavoriteProducts = () => {
    return Object.entries(favorites)
      .filter(([_, isFavorite]) => isFavorite)
      .map(([productId]) => productId);
  };

  return (
    <FavoriteContext.Provider value={{ 
      favorites, 
      toggleFavorite, 
      isFavorite, 
      getFavoriteProducts 
    }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
