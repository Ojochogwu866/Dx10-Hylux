'use client'

import React, { MouseEvent } from 'react';
import { motion, Variants } from 'framer-motion';
import { fadeIn } from '@/lib/motion';
import Image from 'next/image';

interface CardProps {
    id: string;
    image: string;
    title: string;
    description: string;
    index: number;
    active: string;
    handleClick: (id: string) => void;
}

const Card: React.ForwardRefRenderFunction<HTMLDivElement, CardProps> = (
    { id, image, title, description, index, active, handleClick },
    ref
    ) => {
    const handleCardClick = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        handleClick(id);
    };

  const cardVariants: Variants = fadeIn('right', 'spring', index * 0.5, 0.75);

  return (
    <motion.div
        variants={cardVariants}
        className={`relative ${
            active === id ? 'lg:flex-initial w-80 rounded-b-[24px]' : 'lg:flex-1 w-44 p-4'
        } flex items-center justify-center bg-[#e6e8f4] min-w-[170px] h-[500px] p-4 transition-all duration-500 ease-out-flex cursor-pointer`}
        onClick={handleCardClick}
        ref={ref}
    >
        <Image
            src={image}
            alt="image"
            className="absolute w-full h-full object-cover rounded-[24px]"
        />
        {active !== id ? (
            <h3 className="font-semibold  text-lg p-4 text-black absolute flex z-0 
            lg:bottom-20 transform-gpu -rotate-90 whitespace-nowrap lg:origin-[0,0]">
                <span className=''>{title}</span>
            </h3>
        ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
            <h2 className="mt-[14px] font-semibold text-black text-lg">{title}</h2>
            <p className="font-normal mt-4 text-sm leading-[20.16px] text-white uppercase">
                {description}
            </p>
        </div>
        )}
    </motion.div>
  );
};

export default Card;
