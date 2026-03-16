import React, { useEffect, useState } from 'react';

const AboutUs = () => {
    const [activeTab, setActiveTab] = useState("story");

    const [tabContent, setTabContent] = useState({});

    useEffect(()=>{
        fetch('/infoTab.json')
        .then(res=> res.json())
        .then(data=> setTabContent(data));
    },[])
  
  console.log(tabContent);
    return (
        <div className='bg-white h-217 rounded-4xl py-20 px-25 mb-44 mt-8'>
            <h1 className='text-secondary font-extrabold text-5xl'>About Us</h1>
            <p className='text-[#606060] mt-4 mb-12'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.</p>
            <hr className='border-[#000000]/10 w-full mb-12' />
            <div>
                <div className="w-full  mx-auto">
                    <div className="flex gap-2 mb-4">
                        {["story", "mission", "success", "Team & Others"].map((tab) => (
                            <button
                                key={tab}
                                className={`px-4 pb-2 font-extrabold text-2xl transition-colors hover:cursor-pointer ${activeTab === tab
                                        ? "border-b-2 border-secondary text-[#5B6A2E]"
                                        : "text-gray-600 hover:text-secondary"
                                    }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="text-[#606060] text-xl">{tabContent[activeTab]}</div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;