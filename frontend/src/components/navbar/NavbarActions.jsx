
import { Link } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  UserRound,
  Menu,
  X,
} from "lucide-react";

const NavbarActions = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="flex shrink-0 items-center gap-1 sm:gap-2">
      {/* Wishlist */}
      <Link
        to="/wishlist"
        aria-label="Wishlist"
        title="Wishlist"
        className="relative flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
      >
        <Heart size={21} strokeWidth={1.8} />
        <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-semibold text-white">
          2
        </span>
      </Link>

      {/* Cart */}
      <Link
        to="/cart"
        aria-label="Shopping cart"
        title="Cart"
        className="relative flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
      >
        <ShoppingCart size={21} strokeWidth={1.8} />
        <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-semibold text-white">
          3
        </span>
      </Link>

      {/* Login */}
      <Link
        to="/login"
        className="hidden items-center gap-2 rounded-full bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:flex"
      >
        <UserRound size={17} />
        Login
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        type="button"
        onClick={() => setIsMenuOpen((previous) => !previous)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-blue-50 hover:text-blue-700 lg:hidden"
      >
        {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>
    </div>
  );
};

export default NavbarActions;
