'use client'
import * as React from 'react';
import Link from 'next/link';

const menuItems = [
    {
        topList: [
            {
                path: '/agency',
                text: "Agency"
            },
            {
                path: '/portfolio',
                text: "Portfolio"
            },
        ]
    }
];

export default function NavBar() {

    return (
        <div className=' w-full flex items-center justify-between bg-white p-5  lg:py-6 rounded-md'>
            <div className=' text-base font-medium capitalize'>
                <div className=''>
                    Hylux
                </div>
            </div>
            <div className="flex gap-2 items-center">
                  {menuItems.map((cat, index) => (
                    <div key={index}>
                        {cat.topList && (
                            <ul className='flex gap-4 list-none' >
                                {cat.topList.map((item, index) => (
                                    <li className=' no-underline' key={index}>
                                        <Link className=' no-underline' href={item.path}>
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
                </div>
        </div>
    );
}