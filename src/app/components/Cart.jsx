import Image from 'next/image'
import React from 'react'

export const Cart = ({ titulo, desc, img }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
                <Image className="rounded-t-lg" src={img} alt={titulo} />
            </div>
            <div className="p-5">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{titulo}</h5>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>

            </div>
        </div>
    )
}
