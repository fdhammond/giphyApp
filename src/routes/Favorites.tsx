import { useEffect } from "react";
import FavoritesCard from "../components/FavoritesCard";
import { Link } from "react-router-dom";
import { FavoritesProps } from "../types/types";
import { useFavoriteContext } from "../context/ContextProvider";

const Favorites: React.FC<FavoritesProps> = () => {
  const { favorites, setFavorites } = useFavoriteContext();

  useEffect(() => {
    // Retrieve favorites from localStorage
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      setFavorites(parsedFavorites);
    }
  }, []);

  return (
    <>
      <div className="container flex flex-col items-end">'Nav'</div>
      <div className="flex flex-col items-center justify-center">
        <h1>Favorites</h1>
        <Link to="/">
          <p>Back to Home</p>
        </Link>
        <div className="w-full">
          {favorites && favorites.length > 0 ? (
            <FavoritesCard favorites={favorites} setFavorites={setFavorites} />
          ) : (
            <div>
              <h1>Please add some favorites first :)</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Favorites;
