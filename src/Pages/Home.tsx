import { MagnifyingGlass } from "phosphor-react";
import { useContext } from "react";
import { Countries } from "../components/Countries";
import ContextAPI from "../context/ContextAPI";

export const Home: React.FC = () => {
  const { search, setSearch, setRegion } = useContext(ContextAPI)

  return (
    <div>
      <div className="flex flex-col py-6 px-4 gap-10 mb-4 sm:flex-row sm:px-8">

        <div className="w-full relative">
          <MagnifyingGlass size={24} weight="bold" className="absolute ml-7 mt-4 text-inputLight dark:text-[white]" aria-disabled />

          <input type="search" onChange={(e) => setSearch(e.currentTarget.value)} value={search} placeholder="Search for a country..." className="bg-[white] dark:bg-darkElements text-inputLight dark:text-[white] py-4 rounded-md pl-20 pr-6 w-full font-semibold shadow-lg sm:max-w-md" />

        </div>

        <select
          className="w-1/2 bg-[white] dark:bg-darkElements border-none text-textLight dark:text-[white] py-4 rounded-md shadow-md font-semibold pl-4 sm:max-w-[280px]"
          onChange={(e) => setRegion(e.currentTarget.value)}
        >
          <option disabled selected hidden >Filter by Region</option>
          <option className="font-semibold">All</option>
          <option className="font-semibold">Africa</option>
          <option className="font-semibold">Americas</option>
          <option className="font-semibold">Asia</option>
          <option className="font-semibold">Europe</option>
          <option className="font-semibold">Oceania</option>
        </select>

      </div>
      <Countries />
    </div>
  )
}

