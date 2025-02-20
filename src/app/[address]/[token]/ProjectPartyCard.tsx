'use client'

import classNames from 'classnames'
import useSWRMutation from 'swr/mutation'
import { useEffect, useState } from 'react'
import Tag from '@/components/tag'
import { BuildingIcon, TwitterIcon } from '@/components/icons'



type Iprops = {

}

export default function ProjectPartyCard(props: Iprops) {

    const mockImg = "https://s3-alpha-sig.figma.com/img/30c6/2ecc/7bb53dc0a3806347ecfbbfd9780ab539?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tdAiyTZuKCDWk93wn54uUhVb-jq8ee4JZwdHWPk4Dy0opPoZLAixVU8Zf8M1btUPzOALgaJScxOmB~-EBQkmw82GvDHgzAL4lZivGZWSahyST2z48lBxwqrD26GSrCZkNe44j~QOVV7-8a7A93RBmfBF0ng-uqyolwpMa9CNJeN8n4F2-Pa-~0dwDUhSWS-xacd~QD53gVlzjcB12DrCMEpvXVllyfcPLcoPL6K1x1xpEjEurrFQG7zS0-XZEp8Tjfbe1htNUefrJYKguelATHEGh25R6s~fHpSSRC420ufWY1trGAaHdkkProOpBK6WO2WaSLlf5NxmKNi~njCeWg__"

    const twitterList = [{
        avatar: 'https://ipfs.io/ipfs/QmSkrC7Q5XZtsriT794m2ghnbBadmg1ZbjaaZBMgGzG6P1',
        name: 'David Portnoy',
        description: "Founder"
    }, {
        avatar: 'https://ipfs.io/ipfs/QmSkrC7Q5XZtsriT794m2ghnbBadmg1ZbjaaZBMgGzG6P1',
        name: 'Vlad Zamfir',
        description: "Executive Director"
    }]

    const renderTwitterCard = (item: any, index: number) => {
        return (
            <div key={index} className='flex items-center justify-between'>
                <div className='flex items-center gap-[12px] flex-1'>
                    <img className='size-[34px] rounded-full' src={item.avatar} />
                    <div className='flex flex-col gap-[4px]'>
                        <div className='text-[14px] leading-[17.07px] text-[#ffffff]'>{item.name}</div>
                        <div className='text-[#5C6068] text-[12px] leading-[16px]'>{item.description}</div>
                    </div>
                </div>
                <div className='w-24px flex items-center justify-center p-[5px] bg-[#FFFFFF26] rounded-full'>
                    <TwitterIcon className='text-[14px]' style={{ fontSize: '14px' }} />
                </div>
            </div>
        )
    }


    return (
        <div className='bg-[#18181B] rounded-[16px]'>
            <div className='card-cover rounded-t-[16px]'>
                <div
                    className='w-full h-[200px] bg-cover bg-center bg-no-repeat rounded-t-[16px]'
                    style={{
                        backgroundImage: `url(${mockImg})`,
                    }}
                />
            </div>
            <div className='px-[16px] pb-[16px]'>
                <div className='mt-[-90px]' style={{
                    background: "linear-gradient(180deg, rgba(24, 24, 27, 0) 0%, #18181B 94.66%)",
                }}>
                    <div className='text-[#ffffff] text-[24px] leading-[29.26px] mb-[8px] font-[700]'>
                        jailstool
                    </div>
                    <div className='text-[#ffffff] text-[12px] leading-[18px] font-[300]'>
                        JAILSTOOL is a memecoin created and promoted by David Portnoy, founder of Sports media platform Barstool Sports.
                    </div>

                    <div className='mt-[10px]'>
                        <div className='mt-[-8px]'>
                            <Tag text='MEME' className='mr-[8px] mt-[8px]' />
                            <Tag text='Pump Fun' className='mr-[8px] mt-[8px]' />
                        </div>
                        <div className='mt-[10px] flex items-center gap-[5px] text-[#5C6068]'>
                            <BuildingIcon />
                            <span>2025 Founded</span>
                        </div>
                    </div>

                    <div className="mt-[16px]">
                        <div className='leading-[14.63px] text-[12px] text-[#9AA0AA] mb-[16px]'>Team:</div>
                        <div className='flex flex-col gap-[16px]'>
                            {twitterList?.map(renderTwitterCard)}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

