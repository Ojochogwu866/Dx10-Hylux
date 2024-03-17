'use client'
// Card.tsx
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
        <h3 className="font-semibold  text-[18px] p-4 text-black absolute z-0 lg:bottom-20 lg:-rotate-90 lg:origin-[0,0]">
          <span>{title}</span>
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            {description}
          </p>
          <h2 className="mt-[24px]  font-semibold text-black sm:text-[32px] text-[24px]">{title}</h2>
        </div>
      )}
    </motion.div>
  );
};

export default Card;
