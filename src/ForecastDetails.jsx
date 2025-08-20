import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function ForecastDetails() {
    const { date } = useParams();
    const location = useLocation();
    const dayData = location.state?.dayData;
    const navigate = useNavigate();

    console.log("Date:", location);

    if (!dayData) {
        return <div>No data available for this day.</div>;
    }
    const backPage = () => {
        navigate(-1);
    }

    return (
        <div className="container py-4">
            <button className="btn btn-outline-light mb-2" onClick={backPage}>
                <i class="bi bi-arrow-left me-1"></i>Back
            </button>
            <div className='content-container d-flex flex-column align-items-center justify-content-start '>
                <h2 className='text-center'>Forecast Details for <br />{date}</h2>

                <div className="text-center mb-3">
                    <img src={dayData.day.condition.icon} alt={dayData.day.condition.text} />
                    <h4 className='mb-1'>{dayData.day.condition.text}</h4>
                    <p>Chance of Rain: <strong>{dayData.day.daily_chance_of_rain}%</strong></p>
                </div>

                <div className='d-flex align-items-center w-100 flex-wrap  mb-4'>
                    <div className='card p-3 bg-transparent text-white text-center w-50 border-white'>
                        <i class="bi bi-thermometer-high fs-1"></i>
                        <h5 className='fs-3 mt-2 mb-0'>{dayData.day.maxtemp_c}°C</h5>
                        <p className='m-0'>Max Temp </p>
                    </div>
                    <div className='card p-3 bg-transparent text-white text-center w-50 border-white'>
                        <i class="bi bi-thermometer fs-1 "></i>
                        <h5 className='fs-3 mt-2 mb-0'>{dayData.day.mintemp_c}°C</h5>
                        <p className='m-0'>Min Temp </p>
                    </div>
                    <div className='card p-3 bg-transparent text-white text-center w-50 border-white'>
                        <i className="bi bi-droplet-fill fs-1"></i>
                        <h5 className='fs-3 mt-2 mb-0'>{dayData.day.avghumidity}%</h5>
                        <p className='m-0'>Humidity </p>
                    </div>
                    <div className='card p-3 bg-transparent text-white text-center w-50 border-white'>
                        <i className="bi bi-brightness-low fs-1"></i>
                        <h5 className='fs-3 mt-2 mb-0'>{dayData.day.uv}</h5>
                        <p className='m-0'>UV Index</p>
                    </div>
                </div>

                {/* <p><strong>Max Temp:</strong> {dayData.day.maxtemp_c}°C</p> */}
                {/* <p><strong>Min Temp:</strong> {dayData.day.mintemp_c}°C</p> */}
                {/* <p><strong>Humidity:</strong> {dayData.day.avghumidity}%</p> */}
                {/* <p><strong>Chance of Rain:</strong> {dayData.day.daily_chance_of_rain}%</p> */}
                {/* <p><strong>UV Index:</strong> {dayData.day.uv}</p> */}
            </div>
        </div>
    );
}

export default ForecastDetails;
