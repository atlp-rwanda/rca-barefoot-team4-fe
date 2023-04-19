

export default function SearchBar() {
  return (
    <div className="w-full">
      <form>
          <div className="flex">
              <div className="relative w-full">
                  <input type="search" id="search-dropdown" className="block px-2.5 py-1.5 w-full text-xs text-red-default rounded-3xl border-red-default border focus:border-red-default focus:outline-none" required />
                  <button type="submit"className="absolute top-0 right-0  px-6 py-1.5 text-xs text-white bg-red-default rounded-r-3xl border border-red-default hover:bg-opacity-[0.9] focus:outline-none"><span>Search here</span></button>
              </div>
          </div>
      </form>
    </div>
  )
}