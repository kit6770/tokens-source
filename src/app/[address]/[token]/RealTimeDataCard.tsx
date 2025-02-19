'use client'

import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { Avatar, AvatarGroup } from '@mui/material';
import { CopyIcon, NoticeIcon, PoolInfoIcon } from '@/components/icons'
import { useMessage } from '@/components/message';
import Fields from './Fields';



type Iprops = {

}

type IDurationType = {
    label: string,
    value: number,
}

export default function RealTimeDataCard(props: Iprops) {
    const [selected, setSelected] = useState<string>('5m')

    const duration: IDurationType[] = [{
        label: '1m',
        value: 60
    }, {
        label: '5m',
        value: 300
    }, {
        label: '1h',
        value: 3600
    }, {
        label: '24h',
        value: 86400
    }]

    const handleClick = (item: IDurationType) => {
        setSelected(item.label);
    }

    return (
        <div className='bg-[#18181B] rounded-[16px]'>
            <div className='grid grid-cols-4 h-[44px] rounded-t-[16px]'>
                {duration.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={classNames('flex flex-col gap-[4px] items-center justify-center cursor-pointer bg-[#212125]', {
                                'rounded-tl-[16px]': index === 0,
                                'rounded-tr-[16px]': index === duration.length - 1,
                                '!bg-[#18181B]': selected === item.label,
                            })}
                            onClick={() => handleClick(item)}
                        >
                            <div className={classNames('text-[#FFFFFF80] text-[14px] leading-[17.6px]', {
                                '!text-[#ffffff]': selected === item.label,
                            })}>
                                {item.label}
                            </div>
                            <div className='text-[12px] leading-[14.43px] text-[#88D693]'>+0.08%</div>
                        </div>
                    )
                })}
            </div>
            <div className='bg-[#18181B] p-[12px] flex flex-col gap-[12px] rounded-b-[16px]'>
                <Fields label='Vol' value="$206.8K" />
                <Fields label='Buys' value="342/$74K" textColor='#88D693' />
                <Fields label='Sell' value="260/$139K" />
                <Fields label='Net Buy' value="-$67K" />
            </div>
        </div>
    )
}