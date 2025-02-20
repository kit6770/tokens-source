'use client'

import classNames from 'classnames'
import React, { useEffect, useState, useRef } from 'react'
import { Avatar, AvatarGroup } from '@mui/material';
import { BrocoliIcon, CapsuleIcon, CopyIcon, EagleIcon, NoticeIcon, PoolInfoIcon, StarIcon } from '@/components/icons'
import { useMessage } from '@/components/message';
import Fields from './Fields';
import { getChain } from '@/utils/utils';



type Iprops = {

}

export default function KLineCard(props: Iprops) {
    const iframeRef = useRef(null);

    // const { data } = useContract(0, contractAddress)

    // const { symbol } = getChain(data?.chain_id) || {}

    // const url = React.useMemo(() => {
    //     if (symbol && data?.pool_platform_address) {
    //         const light_chart = '0'
    //         const _url = `https://www.geckoterminal.com/${symbol}/pools/${data?.pool_platform_address}?embed=1&info=0&swaps=0&grayscale=1&light_chart=${light_chart}`
    //         // const _url = `https://www.dextools.io/widget-chart/en/${symbol}/pe-light/${
    //         //   data?.pool_platform_address
    //         // }?theme=light&chartType=3&chartResolution=30&drawingToolbars=false&headerColor=#00B953&t=${Date.now()}`
    //         // const _url = `https://www.gmgn.cc/kline/sol/${data?.token_address}?theme=${theme}&interval=5`
    //         return _url
    //     }
    // }, [data?.pool_platform_address, symbol])

    const renderCardHeader = () => {
        return (
            <div className='mb-[24px] flex flex-row items-center justify-between'>
                <div className='flex items-center gap-[12px] flex-row'>
                    <StarIcon className='text-[#5C6068]' />
                    <img src="https://ipfs.io/ipfs/QmSkrC7Q5XZtsriT794m2ghnbBadmg1ZbjaaZBMgGzG6P1" className='size-[40px] rounded-full' />
                    <div className='flex flex-col gap-[4px]'>
                        <div className='flex flex-row items-center gap-[8px]'>
                            <div className='text-[18px] leading-[21.94px] font-[600] text-[#FFFFFF]'>jailstool</div>
                            <div className='text-[12px] leading-[14.63px] font-[300] text-[#5C6068]'>Stool Pr</div>
                            <CapsuleIcon className="!text-[12px]" />
                            <EagleIcon className="!text-[12px] text-[#9AA0AA]" />
                        </div>
                        <div className='flex flex-row items-center gap-[4px]'>
                            <div className='text-[12px] leading-[14.63px] text-[#5C6068]'>4d</div>
                            <BrocoliIcon className='!text-[12px] text-[#88D693]' />
                            <div className='text-[12px] leading-[14.63px] text-[#88D693]'>Buy</div>
                            <div className='text-[12px] leading-[14.63px] text-[#5C6068]'>Axrie...ump</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[4px]'>
                    <div className='text-[16px] leading-[19.5px] text-[#88D693]'>$0.007375</div>
                    <div className='flex flex-row gap-[4px] text-[14px] leading-[17.07px] '>
                        <div className='text-[#5C6068]'>24h</div>
                        <div className='text-[#88D693]'>+8.50%</div>
                    </div>
                </div>
            </div>
        )
    }

    const renderCardContent = () => {
        return (
            <iframe
                ref={iframeRef}
                src="https://www.geckoterminal.com/zh/base/pools/0x74f8a8c18010659a456c8584e625996ab62c1b62?embed=1&info=0&swaps=0&grayscale=1&light_chart=0"
                width="100%"
                height="600px"
                frameBorder={0}
                onLoad={handleLoad} // 加载完成后触发
                style={{ border: "none", overflow: "hidden" }}>
            </iframe>
        )
    }

    const handleLoad = () => {
        // @ts-ignore
        const iframeDocument = iframeRef?.current?.contentDocument || iframeRef?.current?.contentWindow?.document;
        if (iframeDocument) {
            // 在这里执行你需要的 JavaScript
            iframeDocument.body.style.backgroundColor = 'transparent !important;'; // 示例
            console.log('Iframe loaded and JS executed!');
        }
    };

    return (
        <div className='bg-[#18181B] rounded-[16px] py-[16px] px-[12px]'>
            {renderCardHeader()}
            {renderCardContent()}
        </div>
    )
}

