import React from 'react';

function WeatherDetails(props) {
    return (
        <>
            <h5 className='border-bottom pb-3 mb-4 fw-normal'>Details</h5>
            <div className='city-other-details'>
                <div className='other-details-item'>
                    <h5 className='other-details-item-label'><i class="bi bi-wind me-2"></i>Wind</h5>
                    <div className='other-details-item-value'>{props.wind} <span style={{ fontWeight: '300' }}>km/h</span></div>
                </div>
                <div className='other-details-item'>
                    <h5 className='other-details-item-label'><i class="bi bi-droplet-fill me-2"></i>Humidity</h5>
                    <div className='other-details-item-value'>{props.humidity}<span style={{ fontWeight: '300' }}>%</span></div>
                </div>
                <div className='other-details-item'>
                    <h5 className='other-details-item-label'><i class="bi bi-brightness-low me-2"></i>UV Index</h5>
                    <div className='other-details-item-value'>{props.uvIndex}</div>
                </div>
                <div className='other-details-item'>
                    <h5 className='other-details-item-label'><i class="bi bi-thermometer me-2"></i>Pressure</h5>
                    <div className='other-details-item-value'>{props.pressure}<span style={{ fontWeight: '300' }}>hpa</span></div>
                </div>
            </div>
        </>
    );
}

export default WeatherDetails;