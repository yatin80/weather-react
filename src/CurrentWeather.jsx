import { useEffect, useState } from 'react'
import Input from './components/Input'

import Card from './components/Card'
import Button from './components/Button'
import Forcast from './components/Forcast';

import { BASE_URL } from './constancs/ApiConstancs'
import HourlyWeather from './components/HourlyWeather';
import CurrentWeatherDetails from './components/CurrentWeatherDetails';

function CurrentWeather(props) {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [inputValue, setInputValue] = useState("");

    // const baseUrl = "https://api.weatherapi.com/v1/current.json?key=63959549db7e4b01b7562618252407"
    // const baseUrl = "https://api.weatherapi.com/v1/forecast.json?key=63959549db7e4b01b7562618252407&q=";

    // https://api.weatherapi.com/v1/forecast.json?key=63959549db7e4b01b7562618252407&q=${props.city}&days=7&aqi=no&alerts=no




    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${BASE_URL}${city}&days=7&aqi=no&alerts=no`);
            const data = await response.json();
            // console.log(data);
            setWeatherData(data);
        }

        fetchData();
    }, [city]);
    console.log("weather data", weatherData);

    const handleSearch = (e) => {
        e.preventDefault();
        setCity(inputValue);
        setInputValue("");

    }

    // console.log("input value", inputValue);

    const handleRefresh = (e) => {
        e.preventDefault();
        setCity("");
        setWeatherData(null);
        setInputValue("");
    }

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            // console.log("position", position);
            const { latitude, longitude } = position.coords;
            setCity(`${latitude},${longitude}`);

        })

    }

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return (
        <>
            <div className='container vh-100'>
                <div className='content-container d-flex flex-column align-items-center justify-content-start vh-100'>
                    {/* <h1 className='bg-red'>Weather Applicatin</h1> */}
                    <div className='city-search-input py-2 px-2 rounded-5 d-flex justify-content-between align-items-center gap-2'>
                        <Input
                            placeholder="Enter city here"
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
                    <div className='w-100'>
                        {/* {
                  weatherData && weatherData.error ? (
                    <h2 className='error'>City not found</h2>
                  ) : null
                } */}
                        {city || !weatherData ? (
                            <Card
                                searchCity={weatherData?.location?.name}
                                searchState={weatherData?.location?.region}
                                searchCountry={weatherData?.location?.country}
                                currentTem={weatherData?.current?.temp_c}
                                weatherIcon={weatherData?.current?.condition?.icon}
                                weatherText={weatherData?.current?.condition?.text}
                            // lastUpdate={weatherData?.current?.last_updated}
                            // humidity={weatherData?.current?.humidity}
                            // wind={weatherData?.current?.wind_kph}
                            // pressure={weatherData?.current?.pressure_mb}
                            // uvIndex={weatherData?.current?.uv}
                            />
                        ) : (
                            <h2 className='error'>Please enter a city to get weather data</h2>
                        )}

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
                    </div>
                </div>
            </div>
        </>
    );
}

export default CurrentWeather;