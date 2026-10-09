
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";

const SearchBar = ({ search, setSearch }) => {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    const query = search.trim();

    if (!query) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      role="search"
      className="flex w-full items-center rounded-full border border-gray-200 bg-gray-50 px-4 transition duration-300 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100"
    >
      <Search
        size={19}
        aria-hidden="true"
        className="shrink-0 text-gray-500"
      />

      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search products, brands and more..."
        aria-label="Search products"
        className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
      />

      {search && (
        <button
          type="button"
          onClick={() => setSearch("")}
          aria-label="Clear search"
          className="rounded-full p-1 text-gray-400 transition hover:text-gray-900"
        >
          <X size={17} />
        </button>
      )}

      <button
        type="submit"
        aria-label="Submit search"
        className="ml-2 rounded-full bg-blue-600 p-2 text-white transition hover:bg-blue-700"
      >
        <Search size={17} />
      </button>
    </form>
  );
};

export default SearchBar;
