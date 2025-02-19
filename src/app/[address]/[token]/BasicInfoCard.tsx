'use client'

import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { Avatar, AvatarGroup } from '@mui/material';
import { CopyIcon, NoticeIcon, PoolInfoIcon, SearchIcon, TelegramIcon, TwitterIcon } from '@/components/icons'
import { useMessage } from '@/components/message';
import Fields from './Fields';



type Iprops = {

}

type ITabsType = {
    id: string,
    label?: string,
    onClick?: () => void,
    icon?: React.ReactElement,
}

export default function BasicInfoCard(props: Iprops) {

    const tabs: ITabsType[] = [{
        id: "name",
        label: 'Name',
        icon: <SearchIcon className='!text-[14px]' />
    }, {
        id: "ca",
        label: 'CA',
        icon: <SearchIcon className='!text-[14px]' />
    }, {
        id: "twitter",
        icon: <TwitterIcon className='!text-[14px]' />
    }, {
        id: "telegram",
        icon: <TelegramIcon className='!text-[14px]' />
    }]

    const handleClick = (item: ITabsType) => {

    }

    return (
        <div className='bg-[#18181B] rounded-[16px]'>
            <div className='grid grid-cols-4 h-[44px] rounded-t-[16px]'>
                {tabs.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={classNames('flex flex-col gap-[4px] items-center justify-center cursor-pointer bg-[#212125]', {
                                'rounded-tl-[16px]': index === 0,
                                'rounded-tr-[16px]': index === tabs.length - 1,
                            })}
                            onClick={() => handleClick(item)}
                        >
                            <div className={classNames('text-[#FFFFFF] w-full text-[12px] leading-[14.63px] flex flex-row items-center justify-center gap-[4px] border-r-[1px] border-[#3A3C43]', {
                                "border-r-[0px]": index === tabs.length - 1,
                            })}>
                                {item.icon}
                                {item.label}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='bg-[#18181B] pt-[12px] py-[16px]'>
                <div className="grid grid-cols-4 gap-[4px]">
                    <Fields label='MKT Cap' value="$76.3M" direction="vertical" />
                    <Fields label='Liq' value="$4.5M" direction="vertical" />
                    <Fields label='24h Vol' value="$63.1M" direction="vertical" />
                    <Fields label='Holders' value="86K" direction="vertical" />
                </div>
            </div>
        </div>
    )
}