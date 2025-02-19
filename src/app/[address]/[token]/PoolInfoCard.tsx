'use client'

import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { Avatar, AvatarGroup } from '@mui/material';
import { CopyIcon, NoticeIcon, PoolInfoIcon } from '@/components/icons'
import { useMessage } from '@/components/message';
import Fields from './Fields';



type Iprops = {

}

export default function PoolInfoCard(props: Iprops) {

    

    return (
        <div className='bg-[#18181B] rounded-[16px] py-[16px] px-[12px]'>
            <div className='flex items-center justify-between mb-[16px]'>
                <div className='text-[14px] leading-[17.07px] text-[#ffffff]'>Pool info</div>
                <PoolInfoIcon className='text-[#9AA0AA] size-[12px]' />
            </div>
            <div className='flex flex-col gap-[16px]'>
                <Fields label='Total liq' value="$4.5M(11.71K SOL)" />
                <Fields label='Total supply' value="999.9M" />
                <Fields label='Pair' value="EtcwB...P72" copy />
                <Fields label='Token creator' value="6mgU4...Fmh(1.39SOL)" copy />
                <Fields label='Pool created' value="02/09/2025 04:43" />
            </div>
        </div>
    )
}

