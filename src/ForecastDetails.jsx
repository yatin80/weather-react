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
            <button className="btn btn-outline-primary mb-2" onClick={backPage}>
                <i class="bi bi-arrow-left me-1"></i> Go Back
            </button>
            <div className='content-container d-flex flex-column align-items-center justify-content-start '>
                <h2>Forecast Details for {date}</h2>

                <div className="text-center mb-3">
                    <img src={dayData.day.condition.icon} alt={dayData.day.condition.text} />
                    <h4>{dayData.day.condition.text}</h4>
                </div>
                <p><strong>Max Temp:</strong> {dayData.day.maxtemp_c}°C</p>
                <p><strong>Min Temp:</strong> {dayData.day.mintemp_c}°C</p>
                <p><strong>Humidity:</strong> {dayData.day.avghumidity}%</p>
                <p><strong>Chance of Rain:</strong> {dayData.day.daily_chance_of_rain}%</p>
                <p><strong>UV Index:</strong> {dayData.day.uv}</p>
            </div>
        </div>
    );
}

export default ForecastDetails;
