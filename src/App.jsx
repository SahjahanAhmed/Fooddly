import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import "./app.css";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Details from "./pages/Details";
import CategoryMeals from "./pages/CategoryMeals";
import Favorites from "./pages/favorites";
function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/browse");
    }
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="browse" element={<Home />} />
        <Route path="/meals/details/:mealid" element={<Details />} />
        <Route path="/category/:category" element={<CategoryMeals />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
