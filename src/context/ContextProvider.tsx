import { createContext, useContext, useState } from "react";
import {
  Gifs,
  AppContextInterfaceProps,
  FavoritesProviderProps,
  CardProps,
} from "../types/types";

const FavoritesContext = createContext<AppContextInterfaceProps>({
  favorites: [],
  setFavorites: () => {},
});

export const useFavoriteContext = () => useContext(FavoritesContext);

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Gifs[]>([]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites: favorites,
        setFavorites: setFavorites,
      }}>
      {children}
    </FavoritesContext.Provider>
  );
};
