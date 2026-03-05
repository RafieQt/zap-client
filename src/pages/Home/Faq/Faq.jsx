import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {

    const [faqs, setFaqs] = useState([]);
    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const res = await fetch('/faq.json');
                if (!res.ok) throw new Error("failed to fetch FAQS");
                const data = await res.json();
                setFaqs(data);

            } catch (error) {
                console.log(error);
            }
        }
        fetchFaqs();
    }, [])

    const [openIndex, setOpenIndex] = useState(null);
    return (
        <div className=' flex items-center flex-col mb-25'>
            <h1 className='text-secondary text-4xl text-center font-bold'>Frequently Asked Question (FAQ)</h1>
            <p className='text-[#606060] text-center pb-10'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>
            {
                faqs.map((faq, index) =>
                    <div key={index} className="dropdown dropdown-bottom dropdown-center w-265 mb-4">
                        <button onClick={() => { setOpenIndex(openIndex === index ? null : index) }} className={`btn text-secondary w-265 flex items-center justify-between rounded-t-2xl ${openIndex === index ? "bg-[#E6F2F3]" : "bg-white rounded-b-2xl"} hover:bg-[#E6F2F3]`}><p>{faq.question}</p><IoIosArrowDown className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`} /></button>
                        {openIndex === index && (
                            <div className="bg-[#E6F2F3] rounded-b-2xl p-4 shadow-sm">
                                <p className="text-[#606060]">
                                    {faq.answer}
                                </p>
                            </div>
                        )}
                    </div>)
            }
            <div>
                <button className='py-4 px-8 bg-primary rounded-xl font-bold text-xl mt-10 hover:cursor-pointer hover:text-secondary hover:shadow-2xs shadow-secondary transition-transform duration-300'>See More FAQ's</button>
            </div>
        </div>
    );
};

export default Faq;