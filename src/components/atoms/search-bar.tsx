export default function SearchBar() {
  return (
    <div className="w-full">
      <form>
        <div className="flex">
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block w-full rounded-3xl border border-red-default px-2.5 py-1.5 text-xs text-red-default focus:border-red-default focus:outline-none"
              required
            />
            <button
              type="submit"
              className="absolute right-0 top-0  rounded-r-3xl border border-red-default bg-red-default px-6 py-1.5 text-xs text-white hover:bg-opacity-[0.9] focus:outline-none"
            >
              <span>Search here</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
