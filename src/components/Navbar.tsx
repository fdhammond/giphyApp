import { AiFillStar } from "react-icons/ai";
import { CardProps } from "../types/types";
//import { useFavoriteContext } from "../context/ContextProvider";

const Navbar: React.FC<CardProps> = () => {
  //const { favorites } = useFavoriteContext();
  const getFavoritesNumber = localStorage.getItem("favorites");
  const getFavoritesFinalNumberLocalStorage = getFavoritesNumber
    ? JSON.parse(getFavoritesNumber).length
    : 0;

  return (
    <div className="flex justify-between items-center bg-gray-800 px-4 py-2">
      <div className="flex items-center">
        <h1 className="text-white text-2xl font-semibold">Favorites</h1>
        <AiFillStar className="text-yellow-500 text-3xl ml-2" />
      </div>
      <div className="flex items-center">
        <h1 className="text-white text-lg font-semibold">
          {getFavoritesFinalNumberLocalStorage}
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
