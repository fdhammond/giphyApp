export interface Gifs {
  id: string;
  images: {
    original: {
      url: string;
    };
  };
  title: string;
}

export interface TrendingResponse {
  data: string[];
  title: string;
}

export interface GifProps {
  id: string;
  images: {
    original: {
      url: string;
    };
  };
  title: string;
}

export interface CardProps {
  giphy: GifProps[];
  favorites: Gifs[];
  setFavorites: React.Dispatch<React.SetStateAction<GifProps[]>>;
  showNewFavoriteMessage: boolean;
  setShowNewFavoriteMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FavoritesProps {
  favorites: Gifs[];
}

export interface AppContextInterfaceProps {
  favorites: Gifs[];
  setFavorites: React.Dispatch<React.SetStateAction<GifProps[]>>;
}

export interface FavoritesProviderProps {
  // You can add additional props here if required.
  children: React.ReactNode;
}
