
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/", end: true },
  { name: "Shop", path: "/products" },
  { name: "Categories", path: "/categories" },
  { name: "Deals", path: "/deals" },
];

const DesktopNav = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-8 lg:flex xl:gap-10"
    >
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          end={link.end}
          className={({ isActive }) =>
            `group relative py-3 text-sm font-medium transition-colors duration-300 ${
              isActive
                ? "text-blue-700"
                : "text-gray-600 hover:text-blue-700"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {link.name}

              <span
                className={`absolute bottom-1 left-0 h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${
                  isActive
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default DesktopNav;
