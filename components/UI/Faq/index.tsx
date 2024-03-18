'use client'
import React, { MouseEvent } from 'react';

interface FaqCardProps {
    id: string;
    question: string;
    answer: string;
    index: number;
    active: string;
    handleClick: (id: string) => void;
}

const FaqCard: React.ForwardRefRenderFunction<HTMLDivElement, FaqCardProps> = (
    { id, question, answer, active, handleClick },
    ) => {
    const handleFaqClick = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        handleClick(id);
    };

    return (
        <div
            className={`border  flex flex-col justify-center items-start
            border-gray-300 rounded-md p-4 cursor-pointer ${active === id ? 'bg-gray-100 ' : ''}`}
            onClick={handleFaqClick}
        >
            <h3 className="text-lg font-medium">{question}</h3>
            {active === id && <p className="mt-2 text-sm w-[700px] text-gray-600">{answer}</p>}
        </div>
    );
};

export default FaqCard;

