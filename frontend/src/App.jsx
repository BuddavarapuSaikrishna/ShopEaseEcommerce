import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Deals from "./pages/Deals";
import Categories from "./pages/Categories";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {!hideNavbarRoutes && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/wishlist" element={<h1>Wishlist</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/deals" element={<Deals />} />
      </Routes>
    </>
  );
}

export default App;
