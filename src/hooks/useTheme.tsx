import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type TContext = {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

const ThemeContext = createContext<TContext>({} as TContext)

export default function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") !== "dark" ? "dark" : "dark"
  )

  useEffect(() => {
    const root = window.document.documentElement;

    const oldTheme = theme === "dark" ? "light" : "dark"

    root.classList.remove(oldTheme)
    root.classList.add(theme)

    localStorage.setItem("theme", theme)


  }, [theme])


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}