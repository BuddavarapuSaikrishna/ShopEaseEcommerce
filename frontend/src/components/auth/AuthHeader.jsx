import { Link } from "react-router-dom";

function AuthHeader({ title, subtitle }) {
  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/"
          className="text-2xl font-bold tracking-[-0.06em] text-stone-900 transition-opacity hover:opacity-70"
        >
          ShopEase<span className="text-stone-400">.</span>
        </Link>

        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-xs font-medium text-stone-500 transition-colors hover:text-black sm:text-sm"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Back to Store
        </Link>
      </div>

      <div className="mt-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">
          Welcome back
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          {title}
        </h1>

        <p className="mt-3 text-sm leading-6 text-stone-500">{subtitle}</p>
      </div>
    </>
  );
}

export default AuthHeader;
