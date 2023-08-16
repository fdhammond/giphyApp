import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AppContextInterfaceProps, Gifs } from "../types/types";

const FavoritesCard: React.FC<AppContextInterfaceProps> = ({
  favorites,
  setFavorites,
}) => {
  const handleDeleteFavorite = (gif: Gifs) => {
    // Retrieve favorites from localStorage
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      const deletedFavorites = parsedFavorites.filter(
        (item: Gifs) => item.id !== gif.id
      );
      setFavorites(deletedFavorites);
      localStorage.setItem("favorites", JSON.stringify(deletedFavorites));
    }
  };

  return (
    <div className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Your Favorites
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((gif: Gifs) => (
            <div
              key={gif.id}
              className="group relative bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={gif.images.original.url}
                alt={gif.title}
                className="w-full h-48 object-cover object-center transition-transform duration-300 transform group-hover:scale-105"
              />
              <div
                onClick={() => handleDeleteFavorite(gif)}
                className="absolute top-2 right-2 cursor-pointer">
                <AiFillStar className="text-yellow-500 text-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesCard;
