import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import ContextAPI, { TData } from "../context/ContextAPI"

export default function Country(props: { item: TData }) {
  const { item } = props
  const { setClickedCountry } = useContext(ContextAPI)

  const navigate = useNavigate()

  function handleNavigate(item: TData) {
    setClickedCountry(item)
    navigate(`/${encodeURI(item.name.common)}`)
  }

  return (
    <div
      className="text-white flex flex-col gap-8 rounded-md w-[280px] overflow-auto h-[350px] bg-[white] dark:bg-darkElements cursor-pointer shadow-md"
      onClick={() => handleNavigate(item)}
    >
      <div className="h-[150px] flex items-center overflow-hidden">
        <img src={item.flags.svg} alt={`${item.name.common} flag`} />
      </div>
      <div className="ml-6 my-3 text-textLight dark:text-[white]">
        <h1 className="font-bold mb-4 text-lg ">{item.name.common}</h1>
        <p className="font-semibold">Population:
          <span className="font-light"> {item.population}</span>
        </p>
        <p className="font-semibold">Region:
          <span className="font-light"> {item.region}</span>
        </p>
        <p className="font-semibold">Capital:
          <span className="font-light"> {item.capital}</span>
        </p>
      </div>
    </div>
  )
}