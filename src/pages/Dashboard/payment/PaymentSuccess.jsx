import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState({
        transactionId: null,
        trackingId: null
    });
    const axiosSecure = useAxiosSecure();
    const sessionId = searchParams.get('session_id');
    console.log(sessionId);

    useEffect(() => {
        axiosSecure.patch(`/payment-success?session_id=${sessionId}`).then(res => setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId
        }))
    }, [sessionId, axiosSecure])

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50">
            <div className="bg-white p-10 rounded-2xl shadow-xl text-center w-87.5">

                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-2xl">✔</span>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Payment Successful 🎉
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-6">
                    Your payment has been successfully processed. Now you can explore more products.
                </p>
                <p className="text-sm text-gray-500 mb-6">
                    Your transaction ID: {paymentInfo.transactionId || 'Loading...'}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                    Your parcel tracking ID: {paymentInfo.trackingId || 'Loading...'}
                </p>


                {/* Button */}
                <button
                    onClick={() => (window.location.href = "/")}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition"
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default PaymentSuccess;