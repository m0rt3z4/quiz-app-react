import { useEffect, useState } from 'react'
import axiosInstance from '../services/axios/interceptor'
export function useRequest(config) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axiosInstance
      .request(config)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [config])

  return { data, error, loading }
}
