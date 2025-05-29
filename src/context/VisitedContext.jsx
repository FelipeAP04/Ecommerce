import { createContext, useContext, useState } from "react";

const VisitedContext = createContext();

export function VisitedProvider({ children }) {
  const [visited, setVisited] = useState([]);

  const addVisited = (product) => {
    setVisited((prevVisited) => {
      const exists = prevVisited.find((item) => item.id === product.id);
      if (exists) return prevVisited;
      return [product, ...prevVisited].slice(0, 6); // Limit to 6 items
    });
  };

  return (
    <VisitedContext.Provider value={{ visited, addVisited }}>
      {children}
    </VisitedContext.Provider>
  );
}

export const useVisited = () => {
  const context = useContext(VisitedContext);
  if (!context) {
    throw new Error("useVisited must be used within a VisitedProvider");
  }
  return context;
};
