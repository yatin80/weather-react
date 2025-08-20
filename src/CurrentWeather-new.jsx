import { useEffect, useState } from 'react'
import Input from './components/Input'
import Card from './components/Card'
import Button from './components/Button'
import Forcast from './components/Forcast'
import { BASE_URL } from './constancs/ApiConstancs'
import HourlyWeather from './components/HourlyWeather'
import CurrentWeatherDetails from './components/CurrentWeatherDetails'

function CurrentWeather() {
    const [city, setCity] = useState("")
    const [weatherData, setWeatherData] = useState(null)
    const [inputValue, setInputValue] = useState("")

    // ✅ Fetch weather data
    const fetchData = async (cityName) => {
        if (!cityName) return
        try {
            const response = await fetch(`${BASE_URL}${cityName}&days=7&aqi=no&alerts=no`)
            const data = await response.json()
            setWeatherData(data)
        } catch (error) {
            console.error("Error fetching weather:", error)
        }
    }

    // ✅ When city changes → fetch data
    useEffect(() => {
        if (city) {
            fetchData(city)
            localStorage.setItem("lastCity", city) // save for later
        }
    }, [city])

    // ✅ On component mount → restore saved city OR use geolocation
    useEffect(() => {
        const savedCity = localStorage.getItem("lastCity")
        if (savedCity) {
            setCity(savedCity)
        } else {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const { latitude, longitude } = position.coords
                    setCity(`${latitude},${longitude}`)
                })
            } else {
                alert("Geolocation is not available. Please enable your Location")
            }
        }
    }, [])

    // ✅ Handlers
    const handleSearch = (e) => {
        e.preventDefault()
        if (!inputValue.trim()) return
        setCity(inputValue)
        setInputValue("")
    }

    const handleRefresh = (e) => {
        e.preventDefault()
        setCity("")
        setWeatherData(null)
        setInputValue("")
        localStorage.removeItem("lastCity")
    }

    return (
        <div className='container vh-100'>
            <div className='content-container d-flex flex-column align-items-center justify-content-start vh-100'>
                {/* Search Box */}
                <div className='city-search-input py-2 px-2 rounded-5 d-flex justify-content-between align-items-center gap-2'>
                    <Input
                        placeholder="Enter city here"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="flex-grow-1 bg-transparent text-white border-0"
                    />
                    <div className='btn-search rounded-5'>
                        <Button
                            btnIcon="search"
                            clickHandler={handleSearch}
                            className="h6 m-0"
                        />
                    </div>
                </div>

                {/* Weather Display */}
                <div className='w-100'>
                    {city && weatherData ? (
                        <Card
                            searchCity={weatherData?.location?.name}
                            searchState={weatherData?.location?.region}
                            searchCountry={weatherData?.location?.country}
                            currentTem={weatherData?.current?.temp_c}
                            weatherIcon={weatherData?.current?.condition?.icon}
                            weatherText={weatherData?.current?.condition?.text}
                        />
                    ) : (
                        <h2 className='error'>Please enter a city to get weather data</h2>
                    )}

                    {weatherData ? (
                        <>
                            <CurrentWeatherDetails
                                lastUpdate={weatherData?.current?.last_updated}
                                humidity={weatherData?.current?.humidity}
                                wind={weatherData?.current?.wind_kph}
                                pressure={weatherData?.current?.pressure_mb}
                                uvIndex={weatherData?.current?.uv}
                            />
                            <HourlyWeather
                                city={city}
                                hourData={weatherData}
                            />
                            <Forcast
                                city={city}
                                forCastData={weatherData}
                            />
                        </>
                    ) : (
                        <p className='text-white'>No data available</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather
