import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-700 bg-black/60 dark:bg-white/10 hover:bg-blue-500/20 hover:dark:bg-yellow-400/20 transition-colors shadow-md"
      >
        <Sun className="w-5 h-5 text-yellow-400" />
      </button>
    );
  }

  return (
    <button
      aria-label="Toggle theme"
      className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-700 bg-black/60 dark:bg-white/10 hover:bg-blue-500/20 hover:dark:bg-yellow-400/20 transition-colors shadow-md"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-blue-600" />
      )}
    </button>
  );
}
