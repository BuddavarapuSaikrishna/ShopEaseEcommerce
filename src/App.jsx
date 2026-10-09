  import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<h1>Shop</h1>} />
        <Route path="/categories" element={<h1>Categories</h1>} />
        <Route path ="/cart" element={<h1>Cart</h1>} />
        <Route path ="/wishlist" element={<h1>Wishlist</h1>} />
        <Route path ="/login" element={<h1>Login</h1>} />
        <Route path ="/register" element={<h1>Register</h1>} />
        <Route path ="/profile" element={<h1>Profile</h1>} />
        <Route path = '/deals' element={<h1>Deals</h1>} />
      </Routes>
    </Router>
  )
}

export default App
