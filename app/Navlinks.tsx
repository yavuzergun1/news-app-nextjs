"use client";

import { categories } from "../constants";
import Navlink from "./Navlink";
import { usePathname } from "next/navigation";

function Navlinks() {
  const pathname = usePathname();

  const isActive = (category: string) => {
    return pathname?.split("/").pop() === category;
  };
  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b">
      {categories.map((category) => (
        <Navlink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}

export default Navlinks;
