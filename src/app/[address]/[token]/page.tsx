'use client'

import classNames from 'classnames'
import { useEffect } from 'react'
import { useParams } from 'next/navigation';
import ProjectPartyCard from './ProjectPartyCard';
import RelatedNewsCard from './RelatedNewsCard';
import DegenCallCard from './DegenCallCard';
import PoolInfoCard from './PoolInfoCard';
import RealTimeDataCard from './RealTimeDataCard';
import BasicInfoCard from './BasicInfoCard';
import KLineCard from './KLineCard';
import SmartListCard from './SmartListCard';

export default function TokenDetail() {
    const { address, token } = useParams();
  return (
      <div className='h-full bg-black flex flex-row gap-[10px] w-full p-[16px] pb-[24px]'>
        <div className='w-[272px] flex flex-col gap-[10px] overflow-auto hide-scrollbar'>
            <ProjectPartyCard />
            <RelatedNewsCard />
        </div>
        <div className='flex-1 flex flex-col gap-[10px] overflow-auto hide-scrollbar'>
            <KLineCard />
            <SmartListCard />
        </div>
        <div className='w-[320px] flex flex-col gap-[10px] overflow-auto hide-scrollbar'>
            <DegenCallCard />
            <BasicInfoCard />
            <PoolInfoCard />
            <RealTimeDataCard />
        </div>
      </div>
  )
}

