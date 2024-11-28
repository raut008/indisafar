// fetcher.js
const apiFetcher = async (endpoint, requestOptions = {}) => {
  try {
    // Default configuration for API calls
    const defaultConfig = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }

    // Merge default configuration with user-provided options
    const options = { ...defaultConfig, ...requestOptions }

    // Perform the API request
    const apiResponse = await fetch(endpoint, options)

    // Check for HTTP errors
    if (!apiResponse.ok) {
      const errorDetails = await apiResponse.json()
      throw new Error(
        `Error ${apiResponse.status}: ${
          errorDetails.message || apiResponse.statusText
        }`
      )
    }

    // Parse and return the JSON response
    const responseData = await apiResponse.json()
    return responseData
  } catch (error) {
    console.error('API Fetcher Error:', error)
    throw error // Re-throw error for further handling by the caller
  }
}

export default apiFetcher
