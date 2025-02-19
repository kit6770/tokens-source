'use client'

import classNames from 'classnames'
import useSWRMutation from 'swr/mutation'
import { useEffect } from 'react'
import useSWR from 'swr'
import TrumpetIcon from "../../../public/img/trumpet.svg"

type Iprops = {
  tips?: string
}

export default function MessageTip(props: Iprops) {
  return (
    <div className='bg-[#C8FF004D] py-[10px] flex items-center justify-center text-[#ffffff] gap-[8px] leading-[14.63px] text-[12px]'>
      <img src={TrumpetIcon.src} alt='logo' className='w-[14px]' />
      {props.tips}
    </div>
  )
}

