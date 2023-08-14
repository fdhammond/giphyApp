import { useEffect, useState } from "react";
import "./App.css";
import { useFavoriteContext } from "./context/ContextProvider";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { Gifs, TrendingResponse } from "./types/types";
import { Link } from "react-router-dom";

function App() {
  const [giphy, setGiphy] = useState<Gifs[]>([]);
  const [searchGiph, setSearchGiph] = useState<string>("");
  const [searchError, setSearchError] = useState<boolean>(false);
  const [trendingGiphy, setTrendingGiphy] = useState<string[]>([]);
  const { favorites, setFavorites } = useFavoriteContext();

  const API_KEY: ImportMetaEnv = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchGiph}&limit=12&offset=0&rating=g&lang=en`;
  const API_TRENDING = `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}&limit=10`;

  useEffect(() => {
    fetch(API_TRENDING)
      .then((res) => res.json() as Promise<TrendingResponse>)
      .then((data) => {
        const trendingGifs = data.data.slice(0, 10);
        setTrendingGiphy(trendingGifs);
      });
  }, [API_TRENDING]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json() as Promise<{ data: Gifs[] }>)
      .then((data) => {
        const gifUrls = data.data.map((gif: Gifs) => {
          return {
            id: gif.id,
            images: {
              original: {
                url: gif.images.original.url,
              },
            },
            title: gif.title,
          };
        });
        setGiphy(gifUrls);
      });
  }, [API_URL, searchGiph]);

  const handleSelectedTrendingGiph = (selectedGifTitle: string) => {
    setSearchGiph(selectedGifTitle);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4 text-center">
          Giphy Search App
        </h1>
        <div className="flex justify-center items-center space-x-4 mb-4">
          <Link to="/favorites" className="text-blue-600 underline">
            Favorites
          </Link>
          <div className="relative">
            <input
              type="text"
              className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring focus:border-blue-600"
              placeholder="Search Gifs"
              value={searchGiph}
              onChange={(e) => setSearchGiph(e.target.value)}
              autoComplete="off"
            />
            {searchError && searchGiph === "" && (
              <p className="text-red-500 absolute -bottom-7 left-0">
                Please enter a search term
              </p>
            )}
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-700">
              Search
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {trendingGiphy.map((item) => (
            <div
              key={item}
              className="p-4 rounded bg-gradient-to-tr from-purple-400 to-blue-500 cursor-pointer hover:bg-blue-600 transition-colors"
              onClick={() => handleSelectedTrendingGiph(item)}>
              <h2 className="text-white text-center">{item}</h2>
            </div>
          ))}
        </div>
        {searchGiph !== "" && giphy.length > 0 && (
          <div className="mt-8">            
            <div className="w-full">
              <Card
                giphy={giphy}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
