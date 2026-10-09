
import { Link } from "react-router-dom";

const Logo = ({ closeMobileMenu }) => {
  return (
    <Link
      to="/"
      onClick={closeMobileMenu}
      aria-label="ShopEase home"
      className="group flex shrink-0 items-center"
    >
      <img
        src="/ShopEaselogo.png"
        alt="ShopEase"
        className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-12"
      />
    </Link>
  );
};

export default Logo;
