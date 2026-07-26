"use client";

import { Moon, Search, Settings, Sun } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-white/10 bg-black px-6 py-4">
      <div className="flex items-center gap-8">
        <div className="relative flex h-min w-[220px]">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform cursor-pointer text-gray-400" />
          <input
            className="w-full rounded-lg bg-slate-900 p-2 pl-10 text-sm text-white placeholder-gray-500 outline-none ring-1 ring-white/10 focus:ring-white/20"
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="rounded-lg p-2 hover:bg-gray-900"
        >
          {darkMode ? (
            <Sun className="h-5 w-5 text-white" />
          ) : (
            <Moon className="h-5 w-5 text-white" />
          )}
        </button>

        <Link
          href="/settings"
          className="ml-2 rounded-lg p-2 hover:bg-gray-900"
        >
          <Settings className="h-5 w-5 text-white" />
        </Link>

        <div className="mx-4 hidden h-6 w-px bg-white/10 md:block" />
      </div>
    </div>
  );
};

export default Navbar;