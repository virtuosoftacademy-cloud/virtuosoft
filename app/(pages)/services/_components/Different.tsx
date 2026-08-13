import { differentCard } from '@/app/_constant'
import React from 'react'
import DifferentCard from './DifferentCard'

function Different() {
    return (
        <>
            <div className='mx-auto max-w-7xl'>
                <div className="text-center">
                    <h4 className={`text-4xl md:text-[45px] lg:text-6xl font-light`}>What Make Us</h4>
                    <h4 className={`flex justify-center gap-2 text-5xl md:text-[45px] lg:text-6xl font-black italic `}>
                        <strong>
                           Different?
                        </strong>
                        {/* <div className="bg-chart-1 rounded-full size-2 lg:size-4 mt-14" /> */}
                    </h4>
                </div>
                {/* Cards */}
                <div className='flex flex-wrap justify-center items-center md:gap-4 xl:gap-8 pt-20'>
                 {
                    differentCard.map((differentData,index)=>
                        <DifferentCard differentData={differentData} key={index}/>
                    )
                 }
                </div>
            </div>
        </>
    )
}

export default Different
