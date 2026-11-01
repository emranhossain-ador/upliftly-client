"use client";

import { useLayoutEffect } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const COOKIE_NAME = "theme";

const readThemeCookie = (): Theme | null => {
  const match = document.cookie.match(/(?:^|; )theme=([^;]*)/);
  if (!match) return null;
  return decodeURIComponent(match[1]) === "dark" ? "dark" : "light";
};

const ThemeToggle = () => {
  // Re-apply the cookie theme after React's dev Strict Mode remount clears
  // attributes it doesn't manage on <html>. No-op in production.
  useLayoutEffect(() => {
    const theme = readThemeCookie();
    if (theme) {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next: Theme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";

    document.documentElement.classList.toggle("dark", next === "dark");
    document.cookie = `${COOKIE_NAME}=${next}; path=/; max-age=31536000; SameSite=Lax`;
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="flex h-9 w-9 items-center justify-center rounded-md border bg-background/60 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground cursor-pointer"
    >
      <span className="grid h-5 w-5 place-items-center ">
        <Sun
          aria-hidden="true"
          className="col-start-1 row-start-1 h-5 w-5 rotate-0 scale-100 opacity-100 transition-all duration-300 ease-in-out dark:-rotate-90 dark:scale-0 dark:opacity-0"
        />
        <Moon
          aria-hidden="true"
          className="col-start-1 row-start-1 h-5 w-5 rotate-90 scale-0 opacity-0 transition-all duration-300 ease-in-out dark:rotate-0 dark:scale-100 dark:opacity-100"
        />
      </span>
    </button>
  );
};

export default ThemeToggle;
