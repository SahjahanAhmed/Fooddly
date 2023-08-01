import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FavoriteListProvider } from "./context/favoriteListContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoriteListProvider>
        <App />
      </FavoriteListProvider>
    </BrowserRouter>
  </React.StrictMode>
);
