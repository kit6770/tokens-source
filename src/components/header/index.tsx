'use client'

import classNames from 'classnames'
import useSWRMutation from 'swr/mutation'
import { useEffect } from 'react'
import AppLogo from '../../../public/img/app_logo.svg'

export default function PageHeader() {
    return (
        <div className='bg-[#000000] h-[60px] flex items-center justify-between px-[20px]'>
            <div className='flex items-center gap-[6px]'>
                <img className='size-[34px]' src={AppLogo.src} />
                <span className='font-[800] text-[20px] leading-[24.38px] text-[#ffffff]'>Token Dashboard</span>
            </div>

            <div className='flex items-center justify-end gap-[12px]'>
                <div className='bg-[#ffffff] text-[#18181B] rounded-[10px] py-[3px] px-[40px] leading-[34px] font-medium cursor-pointer'>
                    Connect
                </div>
            </div>
        </div>
    )
}
