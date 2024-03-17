'use client'
import { work } from '@/lib/data';
import React from 'react';
import Image from 'next/image';

export default function WorkSection() {
    return (
        <div className="h-screen w-screen py-10 flex justify-end items-center  md:px-[100px] px-[20px]">
            <div className='flex flex-col gap-10 h-full'>
                {work.map((works, index) => (
                    <React.Fragment key={index}>
                        <Work {...works} />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

type WorkProps = (typeof work)[number];

function Work({
    title,
    image,
    description,
    organization,
}: WorkProps) {
    return (
        <div className=' w-full h-full'>
            <Image className='w-full h-full' src={image} alt={title} />
            <div className=' flex flex-col justify-end items-start w-1/2 space-y-3'>
                <h2>{title}</h2>
                <p>{organization}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}
