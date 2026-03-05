import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';
const Coverage = () => {
    const position = [23.68, 90.35]
    const serviceCenter = useLoaderData();
    console.log(serviceCenter);
    return (
        <div className='bg-white py-20 px-25 rounded-4xl mt-8'>
            <h1 className='text-secondary font-extrabold text-5xl '>We are available in 64 districts</h1>


            <div className='h-106'>
                <MapContainer className='h-106' center={position} zoom={7} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {
                        serviceCenter.map((service, index) => {
                            return (<Marker key={index} position={[service.latitude, service.longitude]}>
                                <Popup>{service.district} <br />
                                {service.covered_area.join(', ')}
                                </Popup>
                            </Marker>)

                        })
                    }

                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;