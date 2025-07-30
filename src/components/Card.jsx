import React from 'react'

export default function Card(props) {
    return (
        <>
            <div className='city-details'>
                <h2 className='city-name'>{props.searchCity}</h2>
                <h4 className='weather-text'>
                    {props.weatherText}
                </h4>
                {/* <div className='city-date'>
                    Today <span className=''>{props.lastUpdate}</span>
                </div> */}
            </div>
            <div className='city-temp-details'>
                <div className='temp-icon'>
                    <img src={props.weatherIcon} alt="weather icon" />
                </div>
                <h2 className='temp'>
                    {props.currentTem}
                    <span className='temp-unit'>°</span>
                </h2>
            </div>

            {/* <div className='city-other-details'>
                <div className='other-details-item'>
                    <h5 className='other-details-item-label'><i class="bi bi-wind me-2"></i>Wind</h5>
                    <div className='other-details-item-value'>{props.wind} <span style={{fontWeight:'300'}}>km/h</span></div>
                </div>
                <div className='other-details-item'>
                    <h5 className='other-details-item-label'><i class="bi bi-droplet-fill me-2"></i>Humidity</h5>
                    <div className='other-details-item-value'>{props.humidity}<span style={{fontWeight:'300'}}>%</span></div>
                </div>
                <div className='other-details-item'>
                    <h5 className='other-details-item-label'><i class="bi bi-wind me-2"></i>UV Index</h5>
                    <div className='other-details-item-value'>{props.uvIndex}</div>
                </div>
                <div className='other-details-item'>
                    <h5 className='other-details-item-label'><i class="bi bi-droplet-fill me-2"></i>Pressure</h5>
                    <div className='other-details-item-value'>{props.pressure}<span style={{fontWeight:'300'}}>hpa</span></div>
                </div>
            </div> */}


            {/* <h4 className='weather-text'>
                It's {props.weatherText}
            </h4> */}
            {/* <div className='card'>
                <div className='last-update'>{props.lastUpdate}</div>
                <div className='weather-icon'>
                    <img src={props.weatherIcon} alt="weather icon" />
                </div>
                <div>
                    <h3 style={{ margin: '0px' }}>Weather in {props.searchCity}</h3>

                    <h4> {props.searchState}, {props.searchCountry}</h4>

                    <h4><span>Temp:</span> <span style={{ fontWeight: 'bold' }}>{props.currentTem}.C</span></h4>
                </div>
            </div> */}
        </>
    )
}
