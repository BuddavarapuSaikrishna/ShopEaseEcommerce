
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold text-white"
            >
              ShopEase
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Your one-stop destination for quality products, great prices,
              and an easy shopping experience.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm transition hover:bg-orange-500 hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm transition hover:bg-orange-500 hover:text-white"
              >
                X
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm transition hover:bg-orange-500 hover:text-white"
              >
                in
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm transition hover:bg-orange-500 hover:text-white"
              >
                ◎
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="transition hover:text-orange-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="transition hover:text-orange-400"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  to="/categories"
                  className="transition hover:text-orange-400"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  to="/deals"
                  className="transition hover:text-orange-400"
                >
                  Deals
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Customer Service
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  to="/contact"
                  className="transition hover:text-orange-400"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/shipping"
                  className="transition hover:text-orange-400"
                >
                  Shipping Information
                </Link>
              </li>

              <li>
                <Link
                  to="/returns"
                  className="transition hover:text-orange-400"
                >
                  Returns & Refunds
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="transition hover:text-orange-400"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <ul className="mt-5 space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <span>📍</span>
                <span>Vijayawada, Andhra Pradesh, India</span>
              </li>

              <li className="flex gap-3">
                <span>📧</span>
                <span>support@shopease.com</span>
              </li>

              <li className="flex gap-3">
                <span>📞</span>
                <span>+91 XXXXX XXXXX</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-gray-500 sm:flex-row lg:px-8">

          <p>
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              to="/privacy"
              className="transition hover:text-orange-400"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-orange-400"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;