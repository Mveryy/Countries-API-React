import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import TData from "../components/Country";

type TCurrencies = {
  [key: string]: TCurrenciesObject
}

type TCurrenciesObject = {
  name: string;
  symbol: string;
}

type TName = {
  common: string;
  nativeName: TNativeName;
}

type TNativeName = {
  [key: string]: TNativeNameObject
}

type TNativeNameObject = {
  common: string
}

type TLanguages = {
  [key: string]: string
}

type TFlags = {
  svg: string
}

export type TData = {
  flags: TFlags;
  name: TName;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  tld: string;
  currencies: TCurrencies;
  borders: string[];
  languages: TLanguages;
}

type TContext = {
  data: TData[] | []
  search: string
  setSearch: (value: React.SetStateAction<string>) => void
  urlParams: string
  setUrlParams: React.Dispatch<React.SetStateAction<string>>
  clickedCountry: TData
  setClickedCountry: React.Dispatch<React.SetStateAction<TData>>
  region: string
  setRegion: React.Dispatch<React.SetStateAction<string>>
}

type ContextProviderProps = {
  children: ReactNode
}

const ContextAPI = createContext<TContext>({} as TContext)

const ContextAPIProvider = ({ children }: ContextProviderProps) => {
  const [data, setData] = useState<TData[]>([])
  const [search, setSearch] = useState("")
  const [urlParams, setUrlParams] = useState("all")
  const [clickedCountry, setClickedCountry] = useState<TData>({} as TData)
  const [region, setRegion] = useState("All")

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://restcountries.com/v3.1/all`)

      // sort response by alphabetical order
      const sortedData = res.data.sort(function (a: TData, b: TData) {
        if (a.name.common > b.name.common) {
          return 1;
        }
        if (a.name.common < b.name.common) {
          return -1;
        }
        // if a === b
        return 0;
      });
      setData(sortedData)
    }
    getData()
  }, [])

  return (
    <ContextAPI.Provider
      value={{
        data,
        search,
        setSearch,
        urlParams,
        setUrlParams,
        clickedCountry,
        setClickedCountry,
        region,
        setRegion,
      }}>

      {children}
    </ContextAPI.Provider>
  )
}

export default ContextAPI
export { ContextAPIProvider }

