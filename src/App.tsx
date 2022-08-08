import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ContextAPI from "./context/ContextAPI";
import ThemeContextProvider from "./hooks/useTheme";
import { CountryPage } from "./Pages/CountryPage";
import { Home } from "./Pages/Home";

export default function App() {
  const { clickedCountry } = useContext(ContextAPI)

  return (
    <div className="w-full min-h-screen bg-lightBg dark:bg-darkBg">
      <ThemeContextProvider>
        <Header />
      </ThemeContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/${encodeURI(clickedCountry?.name?.common)}`} element={<CountryPage />} />
      </Routes>
    </div>
  )

}
