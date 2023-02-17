import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Navlinks from "./Navlinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-9 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            World{" "}
            <span className="underline decoration-6 decoration-orange-400">
              Current
            </span>{" "}
            News
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          <DarkModeButton />

          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px8 py-2  rounded-full dark:bg-slate-800">
            {" "}
            Subscribe Now!{" "}
          </button>
        </div>
      </div>
      <Navlinks />

      <SearchBox />
    </header>
  );
}

export default Header;
