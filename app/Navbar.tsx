"use client";

import { Menu, Search, Sun, Moon } from "lucide-react";

type NavbarProps = {
  dark: boolean;
  onToggleTheme: () => void;
  onMenuClick: () => void;
};

export default function Navbar({ dark, onToggleTheme, onMenuClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-slate-200 bg-white/80 px-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 sm:px-6">
      <button
        onClick={onMenuClick}
        aria-label="Open menu"
        className="rounded-md p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
      >
        <Menu size={20} />
      </button>

      <div className="relative hidden max-w-sm flex-1 sm:block">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm outline-none placeholder:text-slate-400 focus:border-cyan-400 dark:border-slate-800 dark:bg-slate-800 dark:text-white"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          onClick={onToggleTheme}
          aria-label="Switch light or dark mode"
          className="rounded-md p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
          JD
        </div>
      </div>
    </header>
  );
}