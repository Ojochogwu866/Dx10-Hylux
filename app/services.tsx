'use client'

import { services } from '@/lib/data';
import { useState } from 'react';
import Card from '@/components/UI/card';

export default function ServicesSection() {
    const [active, setActive] = useState("2");
    const handleCardClick = (id: string) => {
        setActive(id);
    };

    return (
        <div className="h-screen w-screen py-10 flex justify-center items-center  md:px-[100px] px-[20px]">
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
            {services.map((service, index) => (
            <Card
                key={service.id} 
                {...service}
                index={index}
                active={active}
                handleClick={handleCardClick}
            />
            ))}
        </div>
        </div>
    );
}
