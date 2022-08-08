import { useContext } from "react";
import ContextAPI from "../context/ContextAPI";
import Country from "./Country";

export function Countries() {
  const { search, data, region } = useContext(ContextAPI)

  const searchFilteredCountry = search.length > 0
    ? data?.filter(letter => (letter.name.common.toLowerCase()).includes(search.toLowerCase()))
    : []

  let filteredRegion
  if (region != 'All') {
    filteredRegion = data.filter(country => country.region === region)
  } else {
    filteredRegion = data
  }

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {
        search.length > 0
          ? searchFilteredCountry?.map(item => (<Country item={item} key={item.name.common} />))
          : filteredRegion?.map(item => (<Country item={item} key={item.name.common} />))
      }
    </div>
  )
}

