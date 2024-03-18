'use client'
import { useState } from 'react';
import { faqData } from '@/lib/data'; 
import FaqCard from '@/components/UI/Faq';

export default function Faq() {

    const [active, setActive] = useState("1");
    const handleCardClick = (id: string) => {
        setActive(active === id ? "" : id); 
    };

    return (
        <div className="h-screen py-10 flex justify-center items-center w-10/12 mx-auto">
            <div className="flex flex-col space-y-5">
                {faqData.map((faq, index) => (
                    <FaqCard
                        key={faq.id} 
                        {...faq}
                        index={index}
                        active={active}
                        handleClick={handleCardClick}
                    />
                ))}
            </div>
        </div>
    );
}
