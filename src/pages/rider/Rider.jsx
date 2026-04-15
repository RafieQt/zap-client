import React from 'react';
import bikeRider from '../../assets/agent-pending.png';
import { useForm, useWatch } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useLoaderData } from 'react-router';

const Rider = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const serviceCenters = useLoaderData();

    const regionDuplicate = serviceCenters.map(c => c.region);
    const regions = [...new Set(regionDuplicate)];
    const reiderRegion = useWatch({ control, name: "riderRegion" });

    const districtByRegion = (region) => {
        const regionDistricts = serviceCenters.filter(c => c.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    }

    const handleRider = (data) => {
        console.log(data);
    }

    return (
        <div className='w-full h-341 bg-white px-25 pt-20 rounded-2xl mt-8 mb-32'>
            <div>
                <h1 className='text-secondary font-extrabold text-6xl'>Be a Rider</h1>
                <p className='text-[#606060] mt-4 mb-12'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                <h3 className='font-extrabold text-2xl text-secondary mb-5'>Tell us about yourself</h3>
            </div>
            <div className='flex items-start justify-between'>
                <div>
                    <form onSubmit={handleSubmit(handleRider)}>
                        <fieldset className="fieldset w-130">
                            {/* rider name */}
                            <label className="label text-sm font-semibold">Your Name</label>
                            <input type="text" {...register('riderName', { required: true })} className="w-full input bg-white" placeholder="Name" />
                            {
                                errors.riderName?.type == "required" && (<p className='text-secondary text-xs'>Rider's name is required</p>)
                            }

                            {/* driving license */}
                            <label className="label text-sm font-semibold">Driving License Number</label>
                            <input type="number" {...register("licenseNumber", { required: true })} className="w-full input bg-white" placeholder="Password" />
                            {
                                errors.licenseNumber?.type == "required" && (<p className='text-secondary text-xs'>Rider's license number is required</p>)
                            }

                            {/* rider mail */}
                            <label className="label text-sm font-semibold">Email</label>
                            <input type="text" {...register("riderMail", { required: true })} className="w-full input bg-white" placeholder="Email" />
                            {
                                errors.riderMail?.type == "required" && (<p className='text-secondary text-xs'>Rider's license number is required</p>)
                            }

                            {/* Rider Region */}
                            <label className="mt-5 label text-sm font-semibold">Your Region</label>
                            <fieldset className="fieldset">
                                <select {...register("riderRegion", { required: true })} className="select bg-white" defaultValue="">
                                    <option value="" disabled={true}>Pick a Region</option>
                                    {
                                        regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }

                                </select>
                            </fieldset>
                            {
                                errors.riderRegion && (<p className='text-secondary text-xs'>Region is required!</p>)
                            }

                            {/* Rider District */}
                            <label className="label text-sm font-semibold">Your District</label>
                            <fieldset className="fieldset">
                                <select {...register("riderDistrict", { required: true })} className="select bg-white" defaultValue="">
                                    <option value="" disabled={true}>Pick a District</option>
                                    {
                                        districtByRegion(reiderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }

                                </select>
                            </fieldset>
                            {
                                errors.riderDistrict && (<p className='text-secondary text-xs'>District is required!</p>)
                            }

                            {/* rider religion */}
                            <label className="label text-sm font-semibold">Your Religion</label>
                            <input type="text" {...register("riderReligion", { required: true })} className="w-full input bg-white" placeholder="Religion" />
                            {
                                errors.riderReligion?.type == "required" && (<p className='text-secondary text-xs'>Rider's religion is required</p>)
                            }

                            {/* rider NID */}
                            <label className="label text-sm font-semibold">NID no.</label>
                            <input type="number" {...register("riderNID", { required: true, minLength:10 })} className="w-full input bg-white" placeholder="NID number" />
                            {
                                errors.riderNID?.type == "required" && (<p className='text-secondary text-xs'>Rider's NID is required</p>)
                            }
                            {
                                errors.riderNID?.type == "minLength" && (<p className='text-secondary text-xs'>Phone Number has be 10 digit</p>)
                            }

                            {/* rider phone number */}
                            <label className="label text-sm font-semibold">Phone Number</label>
                            <input type="text" {...register("riderPhone", { required: true, minLength: 11 })} className="w-full input bg-white" placeholder="Phone Number" />
                            {
                                errors.riderPhone?.type == "required" && (<p className='text-secondary text-xs'>Rider's phone number is required</p>)
                            }
                            {
                                errors.riderPhone?.type == "minLength" && (<p className='text-secondary text-xs'>Phone Number has be 11 digit</p>)
                            }

                            {/* Registration number */}
                            <label className="label text-sm font-semibold">Bike Registration Number</label>
                            <input type="number" {...register("riderRegNo", { required: true })} className="w-full input bg-white" placeholder="Registration Number" />
                            {
                                errors.riderRegNo?.type == "required" && (<p className='text-secondary text-xs'>Rider's bike registration number is required</p>)
                            }

                            {/* About Rider */}
                            <label className="label text-sm font-semibold">Tell Us About Yourself</label>
                            <input type="Text" {...register("riderAbout", { required: true })} className="w-full input bg-white" placeholder="Write about yourself" />
                            {
                                errors.riderAbout?.type == "required" && (<p className='text-secondary text-xs'>Write down few words about you!</p>)
                            }

                            <button className="btn btn-primary text-secondary mt-4">Submit</button>
                        </fieldset>
                    </form>
                </div>
                <div>
                    <img src={bikeRider} className='w-116' alt="" />
                </div>
            </div>

        </div>
    );
};

export default Rider;