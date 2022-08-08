import axios from "axios"
import { useEffect, useState } from "react"

const api = axios.create({
  baseURL: 'https://restcountries.com/v3.1'
})

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    async function getData() {
      const response = await api.get(url)
      setData(response.data)
    }
    getData()
  }, [url])

  return
  { data }

}