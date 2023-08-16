import React, { useEffect } from "react";
import FavoritesCard from "../components/FavoritesCard";
import Navbar from "../components/Navbar";
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
  }, [setFavorites]);

  return (
    <div className="bg-gray-100 min-h-screen psychedelic-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900">Favorites</h1>
        </div>
        <div className="flex justify-center items-center space-x-4 mb-4">
          <Link to="/" className="text-blue-600 underline">
            Back to Home
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full">
            {favorites && favorites.length > 0 ? (
              <FavoritesCard
                favorites={favorites}
                setFavorites={setFavorites}
              />
            ) : (
              <div>
                <h1 className="text-2xl font-semibold mb-4 text-center">
                  Please add some favorites first :)
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
