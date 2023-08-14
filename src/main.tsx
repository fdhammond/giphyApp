import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/ContextProvider.tsx";
import Favorites from "./routes/Favorites";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/favorites" element={<Favorites />} />"
          <Route path="*" element={<h1>Route does not exist</h1>} />
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
