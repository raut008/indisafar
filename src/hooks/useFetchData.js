import useSWR from 'swr'

// Custom hook to fetch data
const useFetchData = ({ url, fetcher, options }) => {
  // Fetcher function - define how to fetch data

  // Use SWR hook
  const { data, error, isLoading } = useSWR(url, fetcher, options)

  return {
    data,
    error,
    isLoading,
  }
}

export default useFetchData
