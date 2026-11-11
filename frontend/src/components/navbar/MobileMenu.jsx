
import { NavLink, Link } from "react-router-dom";
import {
  Home,
  ShoppingBag,
  Grid2X2,
  Tag,
  Heart,
  ShoppingCart,
  UserRound,
  Search,
  X,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/", Icon: Home, end: true },
  { name: "Shop", path: "/products", Icon: ShoppingBag },
  { name: "Categories", path: "/categories", Icon: Grid2X2 },
  { name: "Deals", path: "/deals", Icon: Tag },
];

const MobileMenu = ({
  isMenuOpen,
  search,
  setSearch,
  closeMobileMenu,
}) => {
  if (!isMenuOpen) return null;

  const handleSearch = (event) => {
    event.preventDefault();

    if (search.trim()) {
      closeMobileMenu();
      window.location.href = `/search?q=${encodeURIComponent(search.trim())}`;
    }
  };

  return (
    <div className="border-t border-gray-100 bg-white px-4 py-5 shadow-lg lg:hidden">
      <div className="mx-auto max-w-xl">
        {/* Mobile Search */}
        <form
          onSubmit={handleSearch}
          className="mb-5 flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100"
        >
          <Search size={19} className="shrink-0 text-gray-500" />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
            className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-gray-400"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="Clear search"
              className="rounded-full p-1 text-gray-400 hover:text-gray-900"
            >
              <X size={17} />
            </button>
          )}
        </form>

        {/* Navigation Links */}
        <nav aria-label="Mobile navigation" className="space-y-1">
          {navLinks.map(({ name, path, Icon, end }) => (
            <NavLink
              key={path}
              to={path}
              end={end}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                }`
              }
            >
              <Icon size={19} />
              {name}
            </NavLink>
          ))}
        </nav>

        {/* Account Actions */}
        <div className="mt-4 border-t border-gray-100 pt-4">
          <Link
            to="/wishlist"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-blue-700"
          >
            <Heart size={19} />
            Wishlist
          </Link>

          <Link
            to="/cart"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-blue-700"
          >
            <ShoppingCart size={19} />
            Cart
          </Link>

          <Link
            to="/login"
            onClick={closeMobileMenu}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <UserRound size={18} />
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
