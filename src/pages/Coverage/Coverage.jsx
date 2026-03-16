import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';
const Coverage = () => {
    const position = [23.68, 90.35]
    const serviceCenter = useLoaderData();
    console.log(serviceCenter);
    const mapRef = useRef(null);
    const handleSearch = (e) => {
        e.preventDefault();
        const location = e.target.location.value;
        const district = serviceCenter.find(c => c.district.toLowerCase().includes(location.toLowerCase()));

        if (district) {
            const coord = [district.latitude, district.longitude];
            mapRef.current.flyTo(coord, 14);
        }
        e.target.location.blur();
    }

    return (
        <div className='bg-white py-20 px-25 rounded-4xl mt-8 mb-31'>
            <h1 className='text-secondary font-extrabold text-5xl '>We are available in 64 districts</h1>

            <hr className='border-[#000000]/10 w-full   mt-12' />
            <h1 className='text-secondary font-extrabold text-3xl mt-12'>We deliver almost all over Bangladesh</h1>
            <div className='mt-4'>
                <form onSubmit={handleSearch}>
                    <div className="join ">
                        <div>
                            <label className="focus-within:outline-none focus-within:bg-[#E8F0FE] input rounded-l-[50px] join-item bg-[#E8F0FE]">

                                <input name='location' className='   rounded-[50px]  ' placeholder="eg: Bhola, Magura..." required />
                            </label>
                            <div className="validator-hint hidden">Enter district location</div>
                        </div>

                        <input className="btn bg-primary join-item rounded-[50px] -ms-5 z-1" type="submit" value="Search" />
                    </div>
                </form>
            </div>
            <div className='h-106 mt-12'>
                <MapContainer className='h-106' ref={mapRef} center={position} zoom={7} scrollWheelZoom={false}>
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