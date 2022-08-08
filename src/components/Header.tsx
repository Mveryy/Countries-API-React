import { Moon, Sun } from "phosphor-react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import ContextAPI, { TData } from "../context/ContextAPI"
import { useTheme } from "../hooks/useTheme"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const { setClickedCountry } = useContext(ContextAPI)

  const handleDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  function resetCountry() {
    setClickedCountry({} as TData)
  }

  return (
    <header className="w-full h-16 flex bg-[white] dark:bg-darkElements items-center justify-between px-6 text-white shadow sm:px-8 lg:px-14">
      <Link to="/">
        <h1
          className="font-extrabold text-textLight dark:text-[white]"
          onClick={() => resetCountry()}
        >
          Where in the world ?
        </h1>
      </Link>
      {theme === "light" ?
        <button onClick={handleDarkMode} className="flex items-center gap-2">
          <Sun size={22} weight="fill" />
          <p className="text-textLight font-semibold">Light Mode</p>
        </button>

        :

        <button onClick={handleDarkMode} className="flex items-center gap-2">
          <Moon size={22} color="#ffffff" weight="fill" />
          <p className="text-[white] font-semibold">Dark Mode</p>
        </button>
      }
    </header>
  )
}