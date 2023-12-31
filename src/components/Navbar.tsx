import { AiFillStar } from "react-icons/ai";
import { CardProps } from "../types/types";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar: React.FC<CardProps> = () => {
  const getFavoritesNumber = localStorage.getItem("favorites");
  const getFavoritesFinalNumberLocalStorage = getFavoritesNumber
    ? JSON.parse(getFavoritesNumber).length
    : 0;

  return (
    <div className="sticky top-0 z-10 bg-gray-800 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center">
        {getFavoritesFinalNumberLocalStorage > 0 && (
          <>
            <h1 className="text-white text-2xl font-semibold">
              {getFavoritesFinalNumberLocalStorage ? (
                <Link to="/favorites">Favorites</Link>
              ) : (
                <Link to="/">Home</Link>
              )}
            </h1>
            <div className="flex items-center ml-2">
              <AiFillStar className="text-yellow-500 text-3xl" />
              {getFavoritesFinalNumberLocalStorage > 0 && (
                <h1 className="text-white text-lg font-semibold ml-1">
                  {getFavoritesFinalNumberLocalStorage}
                </h1>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
