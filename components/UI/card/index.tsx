'use client'

import React, { MouseEvent } from 'react';
import { motion, Variants } from 'framer-motion';
import styles from '@/lib/styles';
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
            active === id ? 'lg:flex-[3.5] flex-[10] bg-[#e6e8f4]' : 'lg:flex-[0.5] flex-[2]'
        } flex items-center justify-center min-w-[170px] h-[500px] transition-[flex] duration-[0.7s] 
        ease-out-flex cursor-pointer`}
        onClick={handleCardClick}
        ref={ref}
    >
        <Image
            src={image}
            alt="image"
            className="absolute w-full h-full object-cover rounded-[24px]"
        />
        {active !== id ? (
            <h3 className="font-semibold sm:text-[26px] text-[18px] text-black absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
            {title}
            </h3>
        ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
            <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}>
                <Image src="" alt="headset" className="w-1/2 h-1/2 object-contain" />
            </div>
            <p className="font-normal text-[16px] text-blac leading-[20.16px uppercase">
                {description}
            </p>
            <h2 className="mt-[24px] font-semibold text-blac sm:text-[32px] text-[24px] ">{title}</h2>
            </div>
        )}
        </motion.div>
    );
};

export default Card;
