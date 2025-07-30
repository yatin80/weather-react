import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import {BASE_URL} from './../constancs/ApiConstancs';

function Forcast(props) {
    const [forCastData, setForCastData] = useState(null);

    useEffect(() => {
        const fetchForCastData = async () => {
            try {
                const response = await fetch(`${BASE_URL}${props.city}&days=7&aqi=no&alerts=no`);
                const data = await response.json();
                setForCastData(data);
            } catch (error) {
                console.log("Error fetching forecast data:", error);

            }
        };
        fetchForCastData();
    }, [props.city]);

    console.log("forecast data", forCastData);

    const forecastDays = forCastData?.forecast?.forecastday || [];

    forecastDays.sort((a, b) => new Date(a.date) - new Date(b.date));

    const getDayName = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'short' });
    };

    // Group forecast days into chunks of 2
    const groupedForecasts = [];
    for (let i = 0; i < forecastDays.length; i += 2) {
        groupedForecasts.push(forecastDays.slice(i, i + 2));
    }

    return (
        <div className='border-top border-bottom py-4 fw-normal mb-4'>
            <Carousel
                selectedItem={0}  
                showIndicators={true}
                showStatus={false}
                showThumbs={false}
                autoPlay={false}
                infiniteLoop={true}
                showArrows={false}
                interval={4000}
                transitionTime={600}
                
            >
                {groupedForecasts.map((group, index) => (
                    <div key={index} className='d-flex justify-content-center gap-4'>
                        {group.map((day, idx) => (
                            <div key={idx} className='border rounded-3 p-3 text-center' style={{ minWidth: '150px' }}>
                                <h5>{getDayName(day.date)}</h5>
                                {/* <div>{day.date}</div> */}
                                <div className='text-center mb-2'>
                                    <img src={day.day.condition.icon} alt={day.day.condition.text}
                                        style={{ width: '50px' }} />
                                </div>
                                <div>Max: {day.day.maxtemp_c}°C</div>
                                <div>Min: {day.day.mintemp_c}°C</div>
                                <div>{day.day.condition.text}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Forcast;
