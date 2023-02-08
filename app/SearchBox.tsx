"use client"

function SearchBox() {
  return (
    <form className="max-w-6xl mx-auto flex justify-between items-center px-5">
      <input
        type="text"
        placeholder="Search News..."
        className="w-full h-14 rounded-sm placeholder-gray-400 text-orange-500 font-semibold outline-none flex-1 bg-transparent dark:text-orange-400"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBox;
