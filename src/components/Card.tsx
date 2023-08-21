import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GifProps, CardProps } from "../types/types";

const Card: React.FC<CardProps> = ({ giphy, favorites, setFavorites }) => {
  const handleStarIcon = (selectedStarItem: GifProps) => {
    const isFavorite = favorites.some(
      (item) => item.id === selectedStarItem.id
    );

    if (isFavorite) {
      const updateFavorites = favorites.filter(
        (item) => item.id !== selectedStarItem.id
      );
      setFavorites(updateFavorites);
      localStorage.setItem("favorites", JSON.stringify(updateFavorites));
    } else {
      const newFavorites = [...favorites, selectedStarItem];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };

  return (
    <div className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Gifs You Want
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {giphy.map((gif) => (
            <div
              key={gif.id}
              className="group relative bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={gif.images.original.url}
                alt={gif.title}
                className="w-full h-48 object-cover object-center transition-transform duration-300 transform group-hover:scale-105"
              />
              <div
                onClick={() => handleStarIcon(gif)}
                className="absolute top-2 right-2 cursor-pointer">
                {favorites.some((item) => item.id === gif.id) ? (
                  <AiFillStar className="text-yellow-500 text-2xl" />
                ) : (
                  <AiOutlineStar className="text-yellow-500 text-2xl" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
