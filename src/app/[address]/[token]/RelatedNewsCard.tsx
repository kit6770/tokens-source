'use client'

import classNames from 'classnames'
import useSWRMutation from 'swr/mutation'
import { useEffect, useState } from 'react'
import Tag from '@/components/tag'
import { BuildingIcon, TwitterIcon } from '@/components/icons'



type Iprops = {

}

export default function RelatedNewsCard(props: Iprops) {


    const newsList = [{
        title: "Dave Portnoy’s Endorsement Sends JAILSTOOL Memecoin Soaring",
        tag: "The Defiant",
        date: "Feb 11, 2025",
    }, {
        title: "Kraken lists 'JAILSTOOL' memecoin adopted by Barstool's Dave Portnoy, boosting $200 million token",
        tag: "The Block",
        date: "Feb 10, 2025",
    }]

    const renderNewsItem = (data: any, index: number) => {
        return (
            <div key={index} className='bg-[#212125] rounded-[12px] p-[10px]'>
                <div className="text-[#ffffff] text-[12px] leading-[18px] mb-[4px]">{data.title}</div>
                <div className="flex items-center justify-between text-[#5C6068] text-[12px] leading-[18px]">
                    <div>{data.tag}</div>
                    <div>{data.date}</div>
                </div>
            </div>
        )
    }


    return (
        <div className='bg-[#18181B] rounded-[16px] p-[16px]'>
            <div className="text-[14px] leading-[18px] font-[300] mb-[16px] text-[#ffffff]">Related News</div>
            <div className='flex flex-col gap-[16px]'>
                {newsList.map(renderNewsItem)}
            </div>
        </div>
    )
}

