import React, { useEffect, useRef, useState } from 'react';
import { BASE_URL } from '../constancs/ApiConstancs';
import { Carousel } from 'react-responsive-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

function HourlyWeather(props) {
    // const [hourData, setHourData] = useState(null);

    const {hourData} = props;

    const [emblaRef] = useEmblaCarousel({ loop: false });

    // useEffect(() => {

    //     const fetchHourData = async () => {
    //         try {
    //             const response = await fetch(`${BASE_URL}${props.city}&days=1&aqi=no&alerts=no`);
    //             const data = await response.json();
    //             // console.log("hourly data", data);
    //             setHourData(data);

    //         } catch (error) {
    //             console.log("Error fetching hourly data:", error);
    //         }
    //     }

    //     fetchHourData();


    // }, [props.city]);

    // console.log("Hourly Data", hourData.forecast?.forecastday[0]?.hour);

    const hourList = hourData?.forecast?.forecastday[0]?.hour || [];

    const currentHour = new Date().getHours();


    const shortHourList = [
        ...hourList.slice(currentHour),
        ...hourList.slice(0, currentHour)
    ]

    // console.log("Current Hour", shortHourList);




    return (
        <div style={{ backgroundColor: 'rgba(0,0,0,0.10)' }} className='p-3 rounded-3 mb-4'>
            <section className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {
                            shortHourList.map((hour, index) => (
                                <div key={index} className='embla__slide'>
                                    <h6 className='m-0 fw-normal fs-6'>{hour.time.split(" ")[1]}</h6>

                                    <img src={hour.condition.icon} alt={hour.condition.text} className='my-2' style={{ width: '66px' }} />

                                    <h5 className='m-0 fs-4 fw-normal'>{hour.temp_c}</h5>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </section>
            {/* <Carousel
                showIndicators={false}
                shhowsStatus={false}
                showThumbs={false}
            >

                {
                    shortHourList.map((hour, index) => (
                        <div key={index}>
                            <h6 className='m-0'>{hour.time.split(" ")[1]}</h6>

                            <img src={hour.condition.icon} alt={hour.condition.text} className='my-2' style={{ width: '76px' }} />

                            <h5 className='m-0'>{hour.temp_c}</h5>
                        </div>

                    ))
                }
            </Carousel> */}

        </div>
    );
}

export default HourlyWeather;