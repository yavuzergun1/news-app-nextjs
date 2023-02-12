"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ChangeEvent } from "react";

function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    router.push(`/search/${input}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search News..."
        className="text-center w-full h-14 rounded-sm placeholder-gray-400 text-orange-500 font-semibold outline-none flex-1 bg-transparent dark:text-orange-400"
      />
      <button
        type="submit"
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400 font-semibold"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
