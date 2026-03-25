import React from 'react';
import { useForm } from 'react-hook-form';

const SendParcel = () => {
    const {
        register, handleSubmit, formState: { errors } } = useForm();

    const handleSendParcel = (data) => {
        console.log(data);
    }

    return (
        <div className='w-full h-349 bg-white rounded-2xl mt-8 mb-8 px-27 py-20'>
            <h2 className='text-secondary font-extrabold text-5xl'>Send A Parcel</h2>
            <p className='mt-12 mb-7 text-3xl font-extrabold text-secondary'>Enter your parcel details</p>
            <form onSubmit={handleSubmit(handleSendParcel)}>

                {/* Document */}
                <div>
                    <label className="label text-sm font-semibold mr-12">
                        <input type="radio" {...register('parcelType')} value="document" class="radio" defaultChecked />
                        Document</label>
                    <label className="label text-sm font-semibold">
                        <input type="radio" {...register('parcelType')} value="non-document" class="radio" />
                        Non-Document</label>

                </div>

                {/* parcel name */}
                <div className='flex w-full gap-7 justify-between'>
                    <div className='w-full'>
                        <label className="label text-sm font-semibold">Parcel Name</label>
                        <input type="text" {...register('parcelName', { required: true })} className="w-full input bg-white" placeholder="Parcel name" />
                        {
                            errors.parcelName?.type == "required" && (<p className='text-secondary text-xs'>Parcel's name is required</p>)
                        }
                        
                    </div>

                    {/* parcel weight */}
                    <div className='w-full'>
                        <label className="label text-sm font-semibold">Parcel Weight(kg)</label>
                        <input type="number" {...register('parcelWeight', { required: true })} className="w-full input bg-white" placeholder="Eg: 34" />
                        {
                            errors.parcelWeight?.type == "required" && (<p className='text-secondary text-xs'>Parcel's weight is required</p>)
                        }
                    </div>
                </div>
                <hr className='w-full border-[#000000]/10 my-7' />

                {/* Details */}

                <div className='flex w-full gap-7 justify-between'>
                    <div className='w-full'>
                        <h4 className='text-secondary font-extrabold mb-7'>Sender Details</h4>

                        {/* Senders Name */}
                        <label className="label text-sm font-semibold">Sender Name</label>
                        <input type="text" {...register('senderName', { required: true })} className="w-full input bg-white " placeholder="Sender name" />
                        {
                            errors.senderName?.type == "required" && (<p className='text-secondary text-xs'>Sender's name is required</p>)
                        }

                        {/* Sender address */}
                        <label className="mt-5 label text-sm font-semibold">Address</label>
                        <input type="text" {...register('senderAddress', { required: true, minLength: 4 })} className="w-full input bg-white " placeholder="Address" />
                        {
                            errors.senderAddress?.type == "required" && (<p className='text-secondary text-xs'>Sender's Address is required</p>)
                        }
                        {
                            errors.senderAddress?.type == "minLength" && (<p className='text-secondary text-xs'>Location length has to be at least 4 character</p>)
                        }
                        

                        {/* Sender phone */}
                        <label className="mt-5 label text-sm font-semibold">Sender Phone no.</label>
                        <input type="number" {...register('senderPhone', { required: true, minLength:11 })} className="w-full input bg-white " placeholder="Sender Phone no." />
                        {
                            errors.senderPhone?.type == "required" && (<p className='text-secondary text-xs'>Sender's phone no. is required</p>)
                        }
                        {
                            errors.senderPhone?.type == "minLength" && (<p className='text-secondary text-xs'>Phone Number has be 11 digit</p>)
                        }

                        {/* sender district */}
                        <label className="mt-5 label text-sm font-semibold">Your District</label>
                        <input type="text" {...register('senderDistrict', { required: true })} className="w-full input bg-white " placeholder="Your District" />
                        {
                            errors.senderDistrict?.type == "required" && (<p className='text-secondary text-xs'>Sender's District is required</p>)
                        }

                        {/* Pickup Destination */}
                        <label className="mt-5 label text-sm font-semibold">Pick-up destination</label>
                        <input type="text" {...register('pickupLocation', { required: true, minLength:4 })} className="w-full input bg-white " placeholder="Pick-up destination" />
                        {
                            errors.pickupLocation?.type == "required" && (<p className='text-secondary text-xs'>Pick-up location is required</p>)
                        }
                        {
                            errors.pickupLocation?.type == "minLength" && (<p className='text-secondary text-xs'>Location length has to be at least 4 character</p>)
                        }

                    </div>

                    <div className='w-full'>
                        <h4 className='text-secondary font-extrabold mb-7'>Receiver Details</h4>

                        {/* receiver name */}
                        <label className="label text-sm font-semibold">Receiver Name</label>
                        <input type="text" {...register('receiverName', { required: true })} className="w-full input bg-white " placeholder="Receiver name" />
                        {
                            errors.receiverName?.type == "required" && (<p className='text-secondary text-xs'>Receiver's name is required</p>)
                        }

                        {/* receiver address */}
                        <label className="mt-5 label text-sm font-semibold">Receiver Address</label>
                        <input type="text" {...register('receiverAddress', { required: true, minLength:4 })} className="w-full input bg-white " placeholder="Receiver Address" />
                        {
                            errors.receiverAddress?.type == "required" && (<p className='text-secondary text-xs'>Receiver's Address is required</p>)
                        }
                        {
                            errors.receiverAddress?.type == "minLength" && (<p className='text-secondary text-xs'>Location length has to be at least 4 character</p>)
                        }

                        {/* receiver phone */}
                        <label className="mt-5 label text-sm font-semibold">Receiver Phone no.</label>
                        <input type="number" {...register('receiverPhone', { required: true, minLength:11 })} className="w-full input bg-white " placeholder="Receiver Phone no." />
                        {
                            errors.receiverPhone?.type == "required" && (<p className='text-secondary text-xs'>Receiver's phone no. is required</p>)
                        }
                        {
                            errors.receiverPhone?.type == "minLength" && (<p className='text-secondary text-xs'>Phone Number has be 11 digit</p>)
                        }

                        {/* receiver district */}
                        <label className="mt-5 label text-sm font-semibold">Receiver District</label>
                        <input type="text" {...register('receiverDistrict', { required: true })} className="w-full input bg-white " placeholder="Receiver District" />
                        {
                            errors.receiverDistrict?.type == "required" && (<p className='text-secondary text-xs'>Receiver's District is required</p>)
                        }

                        {/* delivey location */}
                        <label className="mt-5 label text-sm font-semibold">Delivery destination</label>
                        <input type="text" {...register('deliveryLocation', {required: true, minLength:4})} className="w-full input bg-white " placeholder="Delivery destination" />
                        {
                            errors.deliveryLocation?.type == "required" && (<p className='text-secondary text-xs'>Delivery Location is required</p>)
                        }
                        {
                            errors.deliveryLocation?.type == "minLength" && (<p className='text-secondary text-xs'>Location length has to be at least 4 character</p>)
                        }
                    </div>
                </div>

                <input className="btn btn-primary text-secondary mt-4" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SendParcel;