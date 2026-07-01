"use client";

import { Sun, Moon } from 'lucide-react';
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="rounded-lg border border-2 border-(--border-whitemode) px-2 py-2 dark:border-(--border)"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}