import React from 'react';
import bikeRider from '../../assets/agent-pending.png';

const Rider = () => {
    return (
        <div className='w-full h-341 bg-white px-25 pt-20 rounded-2xl mt-8 mb-32'>
            <div>
                <h1 className='text-secondary font-extrabold text-6xl'>Be a Rider</h1>
                <p className='text-[#606060] mt-4 mb-12'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                <h3 className='font-extrabold text-2xl text-secondary mb-5'>Tell us about yourself</h3>
            </div>
            <div className='flex items-start justify-between'>
                <div>
                    <fieldset className="fieldset w-130">
                        <label className="label text-sm font-semibold">Your Name</label>
                        <input type="email" className="w-full input bg-white" placeholder="Name" />
                        <label className="label text-sm font-semibold">Driving License Number</label>
                        <input type="number" className="w-full input bg-white" placeholder="Password" />
                        <label className="label text-sm font-semibold">Email</label>
                        <input type="email" className="w-full input bg-white" placeholder="Email" />

                        <label className="label text-sm font-semibold">Your District</label>
                        <input type="email" className="w-full input bg-white" placeholder="District name" />

                        <label className="label text-sm font-semibold">Your Religion</label>
                        <input type="email" className="w-full input bg-white" placeholder="Religion" />
                        <label className="label text-sm font-semibold">NID no.</label>
                        <input type="number" className="w-full input bg-white" placeholder="NID number" />

                        <label className="label text-sm font-semibold">Phone Number</label>
                        <input type="text" className="w-full input bg-white" placeholder="Phone Number" />

                        <label className="label text-sm font-semibold">Bike Registration Number</label>
                        <input type="number" className="w-full input bg-white" placeholder="Registration Number" />

                        <label className="label text-sm font-semibold">Tell Us About Yourself</label>
                        <input type="Text" className="w-full input bg-white" placeholder="Write about yourself" />

                        <button className="btn btn-primary text-secondary mt-4">Submit</button>
                    </fieldset>
                </div>
                <div>
                    <img src={bikeRider} className='w-116' alt="" />
                </div>
            </div>

        </div>
    );
};

export default Rider;