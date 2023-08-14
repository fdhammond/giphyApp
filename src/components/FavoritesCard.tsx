import { AppContextInterfaceProps } from "../types/types";
import { AiFillStar } from "react-icons/ai";
import { Gifs } from "../types/types";

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
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Giphs you want
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {favorites.map((gif: Gifs) => (
            <div key={gif.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <img
                  src={gif.images.original.url}
                  alt={gif.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:opacity-75"
                  loading="lazy"
                />
                <button onClick={() => handleDeleteFavorite(gif)}>
                  <AiFillStar className="text-yellow-500 text-3xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesCard;
