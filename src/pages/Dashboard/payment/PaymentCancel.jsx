import React from 'react';

const PaymentCancel = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-red-50">
                <div className="bg-white p-10 rounded-2xl shadow-xl text-center w-87.5">

                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-md">
                            <span className="text-white text-2xl">✕</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Payment Cancelled ❌
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-gray-500 mb-6">
                        Your payment was cancelled. No charges were made. You can try again anytime.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => (window.location.href = "my-parcels")}
                            className="w-1/2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition"
                        >
                            Try Again
                        </button>

                        <button
                            onClick={() => (window.location.href = "/")}
                            className="w-1/2 border border-gray-300 hover:bg-gray-100 py-2 rounded-lg font-medium transition"
                        >
                            Go Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentCancel;