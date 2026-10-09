
import { useState } from "react";

import Logo from "../navbar/Logo";
import DesktopNav from "../navbar/DesktopNav";
import SearchBar from "../navbar/SearchBar";
import NavbarActions from "../navbar/NavbarActions";
import MobileMenu from "../navbar/MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo closeMobileMenu={closeMobileMenu} />

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Actions */}
        <NavbarActions
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>

      {/* Search Bar */}
      <div className="mx-auto hidden max-w-7xl px-4 pb-4 sm:px-6 md:block lg:px-8">
  <SearchBar search={search} setSearch={setSearch} />
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        search={search}
        setSearch={setSearch}
        closeMobileMenu={closeMobileMenu}
      />
    </header>
  );
};

export default Navbar;
