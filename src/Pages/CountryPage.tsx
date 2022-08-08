import { ArrowLeft } from "phosphor-react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import ContextAPI, { TData } from "../context/ContextAPI"

export function CountryPage() {
  const { clickedCountry, setClickedCountry } = useContext(ContextAPI)

  const navigate = useNavigate()

  function handleNavigate() {
    setClickedCountry({} as TData)
    navigate("/")
  }

  return (
    <div key={clickedCountry.name.common} className="text-white w-full px-6 lg:px-12">
      <button
        className="flex items-center px-6 py-2 dark:bg-darkElements bg-[white] mt-10 mb-14 rounded shadow-lg text-textLight dark:text-[white] font-semibold"
        onClick={() => handleNavigate()}
      >
        {<ArrowLeft size={24} weight="bold" className="mr-2 text-textLight dark:text-[white]" />}
        Back
      </button>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center xl:justify-center">
        <img src={clickedCountry.flags.svg} alt={`${clickedCountry.name.common} flag`} className="max-h-60 mb-10 self-center shadow lg:max-w-[45%] xl:max-h-fit xl:mb-0" />
        <div className="lg:ml-24 max-w-[600px]">
          <h1 className="font-bold text-2xl mb-8 text-textLight dark:text-[white]">
            {clickedCountry.name.common}
          </h1>
          <div className="lg:flex lg:justify-between gap-12">
            <div className="flex flex-col gap-2 mb-6 text-textLight dark:text-[white] ">
              <p className="font-semibold">Native Name:
                {clickedCountry.name.nativeName && <span className="font-light"> {Object.values(clickedCountry.name.nativeName)[0].common}</span>}
              </p>
              <p className="font-semibold">Population:
                <span className="font-light"> {clickedCountry.population}</span>
              </p>
              <p className="font-semibold">Region:
                <span className="font-light"> {clickedCountry.region}</span>
              </p>
              <p className="font-semibold">Sub region:
                <span className="font-light"> {clickedCountry.subregion}</span>
              </p>
              <p className="font-semibold">Capital:
                <span className="font-light"> {clickedCountry.capital}</span>
              </p>
            </div>

            <div className="flex flex-col gap-2 mb-6 text-textLight dark:text-[white]">
              <p className="font-semibold">Top Level Domain:
                <span className="font-light"> {clickedCountry.tld}</span>
              </p>
              <p className="font-semibold">Currencies:
                {clickedCountry.currencies && <span className="font-light"> {Object.values(clickedCountry.currencies)[0].name} ( {Object.values(clickedCountry.currencies)[0].symbol} )
                </span>}
              </p>
              <p className="font-semibold">Languages:
                {clickedCountry.languages && <span className="font-light"> {Object.values(clickedCountry.languages).sort().join(", ")}</span>}
              </p>
            </div>
          </div>

          {clickedCountry.borders &&
            (
              <div className="text-textLight dark:text-[white] ">
                <h2 className="font-semibold min-w-fit">Border Countries:</h2>
                <div className="flex flex-wrap gap-4 mt-4 pb-6">
                  {clickedCountry.borders?.sort().map(item =>
                    <div key={item} className="py-2 px-12 dark:bg-darkElements bg-[white] flex-1 text-center rounded shadow-md">
                      {item}
                    </div>
                  )}
                </div>
              </div>
            )
          }
        </div>
      </div>


    </div>
  )
}







