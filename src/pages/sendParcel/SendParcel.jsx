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
                <div>
                    <label className="label text-sm font-semibold mr-12">
                        <input type="radio" {...register('parcelType')} value="document" class="radio" defaultChecked />
                        Document</label>
                    <label className="label text-sm font-semibold">
                        <input type="radio" {...register('parcelType')} value="non-document" class="radio" />
                        Non-Document</label>

                </div>
                <div className='flex w-full gap-7 justify-between'>
                    <div className='w-full'>
                        <label className="label text-sm font-semibold">Parcel Name</label>
                        <input type="text" {...register('parcelName')} className="w-full input bg-white" placeholder="Parcel name" />
                    </div>

                    <div className='w-full'>
                        <label className="label text-sm font-semibold">Parcel Weight(kg)</label>
                        <input type="number" {...register('parcelWeight')} className="w-full input bg-white" placeholder="Eg: 34" />
                    </div>
                </div>
                <hr className='w-full border-[#000000]/10 my-7' />

                {/* Details */}

                <div className='flex w-full gap-7 justify-between'>
                    <div className='w-full'>
                        <h4 className='text-secondary font-extrabold mb-7'>Sender Details</h4>
                        <label className="label text-sm font-semibold">Sender Name</label>
                        <input type="text" {...register('senderName')} className="w-full input bg-white mb-5" placeholder="Sender name" />
                        <label className="label text-sm font-semibold">Address</label>
                        <input type="text" {...register('senderAddress')} className="w-full input bg-white mb-5" placeholder="Address" />
                        <label className="label text-sm font-semibold">Sender Phone no.</label>
                        <input type="number" {...register('senderPhone')} className="w-full input bg-white mb-5" placeholder="Sender Phone no." />
                        <label className="label text-sm font-semibold">Your District</label>
                        <input type="text" {...register('senderDistrict')} className="w-full input bg-white mb-5" placeholder="Your District" />
                        <label className="label text-sm font-semibold">Pick-up destination</label>
                        <input type="text" {...register('pickupLocation')} className="w-full input bg-white mb-5" placeholder="Pick-up destination" />
                    </div>

                    <div className='w-full'>
                        <h4 className='text-secondary font-extrabold mb-7'>Receiver Details</h4>
                        <label className="label text-sm font-semibold">Receiver Name</label>
                        <input type="text" {...register('receiverName')} className="w-full input bg-white mb-5" placeholder="Receiver name" />
                        <label className="label text-sm font-semibold">Receiver Address</label>
                        <input type="text" {...register('receiverAddress')} className="w-full input bg-white mb-5" placeholder="Receiver Address" />
                        <label className="label text-sm font-semibold">Receiver Phone no.</label>
                        <input type="number" {...register('receiverPhone')} className="w-full input bg-white mb-5" placeholder="Receiver Phone no." />
                        <label className="label text-sm font-semibold">Receiver District</label>
                        <input type="text" {...register('receiverDistrict')} className="w-full input bg-white mb-5" placeholder="Receiver District" />
                        <label className="label text-sm font-semibold">Delivery destination</label>
                        <input type="text" {...register('deliveryLocation')} className="w-full input bg-white mb-5" placeholder="Delivery destination" />
                    </div>
                </div>

                <input className="btn btn-primary text-secondary mt-4" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SendParcel;