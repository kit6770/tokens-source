'use client'

import classNames from 'classnames'
import useSWRMutation from 'swr/mutation'
import { useEffect } from 'react'
import useSWR from 'swr'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import AISummaryIcon from "../../../public/img/ai_summary.svg"
import BatteryIcon from "../../../public/img/battery.svg"
import SuccessIcon from "../../../public/img/success.svg"
import InfoImageIcon from "../../../public/img/info.svg";
import CopyIcon from "../../../public/img/copy.svg";

import SmartWalletTagIcon from "../../../public/img/smart_wallet_tag.svg"
import DegenCallTagIcon from "../../../public/img/degen_call_tag.svg"
import HeavyBoughtTagIcon from "../../../public/img/heavy_bought_tag.svg"
import HotTagIcon from "../../../public/img/hot_tag.svg"
import MilestoneMCPPumpTagIcon from "../../../public/img/milestone_MCP_pump_tag.svg"

import GmgnIcon from "../../../public/img/gmgn_logo.svg"
import LiteLogoIcon from "../../../public/img/lite_logo.svg"
import BullXLogoIcon from "../../../public/img/bullX_logo.svg"
import App3LogoIcon from "../../../public/img/app3_logo.svg"
import App4LogoIcon from "../../../public/img/app4_logo.svg"
import UniversalX from "../../../public/img/universalX.svg"
import Trojan from "../../../public/img/trojan.svg"
import GMGNSniperBot from "../../../public/img/gmgn_sniper_bot.svg"

import CapsuleIcon from "../../../public/img/capsule_icon.svg"
import TwitterIcon from "../../../public/img/twitter_icon.svg"
import NetworkIcon from "../../../public/img/network_icon.svg"

import { InfoIcon, MoreIcon } from '@/components/icons'
import ITooltip from '@/components/tooltip'
import LabelTag from '@/components/label-tag'

type Iprops = {
    data: any
}

export default function AiCard(props: Iprops) {

    const tagList = [
        {
            icon: SmartWalletTagIcon.src,
            title: 'Smart wallets buy',
            color: "#C8FF00"
        }, {
            icon: HeavyBoughtTagIcon.src,
            title: 'Heavy bought',
            color: "#81E6D6"
        }, {
            icon: HotTagIcon.src,
            title: '9 Signals have appeared in 24h',
            color: "#F1DF95"
        }, {
            icon: MilestoneMCPPumpTagIcon.src,
            title: 'Milestone MCP pump',
            color: "#B8AFFF"
        }, {
            icon: DegenCallTagIcon.src,
            title: 'Degen call',
            color: "#9EDDF8"
        },
    ]

    const appList = [
        {
            name: 'gmgn',
            icon: GmgnIcon.src,
            url: '',
        },
        {
            name: 'lite',
            icon: LiteLogoIcon.src,
            url: '',
        },
        {
            name: 'bullx',
            icon: BullXLogoIcon.src,
            url: '',
        },
        {
            name: 'app3',
            icon: App3LogoIcon.src,
            url: '',
        },
        {
            name: 'app4',
            icon: App4LogoIcon.src,
            url: '',
        },
        {
            name: 'UniversalX',
            icon: UniversalX.src,
            url: '',
        },
        {
            name: 'Trojan',
            icon: Trojan.src,
            url: '',
        },
        {
            name: 'GMGNSniperBot',
            icon: GMGNSniperBot.src,
            url: '',
        },
    ]

    const renderCardFieldInfoArea = () => {
        return (
            <div className='grid grid-cols-4 gap-2 py-[12px] border-b-[1px] border-b-[#2F2F31]'>
                <FieldInfoItem label='Price' value='$0.007375' />
                <FieldInfoItem label='MC' value='$7.3M' />
                <FieldInfoItem label='Pool' value='$385.6K' />
                <FieldInfoItem label='Holder' value='6,544' />
            </div>
        )
    }

    const renderSmartMoneyArea = () => {
        return (
            <div className='pt-[12px] pb-[16px] border-b-[#2F2F31] border-b-[1px]'>
                <div className='flex items-center justify-between mb-[24px]'>
                    <div className='flex items-center justify-center text-[14px] text-[#ffffff] leading-[17.07px] gap-[6px]'>
                        <div className='text-[#63AC6D] underline cursor-pointer'>5 smart wallets</div>
                        <div>Buy</div>
                    </div>

                    <div className='flex items-center justify-center gap-[6px] text-[14px] text-[#ffffff] leading-[17.07px]'>
                        <span>Avg Buy</span>
                        <span>$3,573.64</span>
                    </div>
                </div>

                <div className='mt-[-6px]'>
                    {tagList.map((i, index) => {
                        return (
                            <LabelTag
                                key={index}
                                text={i.title}
                                icon={i.icon}
                                bgColor={i.color}
                            />
                        )
                    })}
                </div>

            </div>
        )
    }

    const renderCardHeader = () => {
        return (
            <div className='px-[16px]'>
                <div className='flex justify-between items-center mb-[6px] '>
                    <div className='relative'>
                        <img className='w-[34px] h-[16px]' src={BatteryIcon.src} />
                        <div className='w-[24px] h-[8px] flex items-center justify-center gap-[1px] absolute top-[4px] left-[4px]'>
                            {new Array(5).fill(0).map((i, index) => {
                                return (
                                    <div key={index} className='w-[4px] h-[8px] bg-[#88D693]' />
                                )
                            })}
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <div className='bg-[#88D693] py-[1px] px-[8px] flex items-center justify-center rounded-[4px] gap-[4px]'>
                            <img className='size-[12px]' src={AISummaryIcon.src} alt="ai-summary" />
                            <span className='text-[12px] leading-[18px]'>AI Summary</span>
                        </div>
                        <div className='text-[#ffffff] text-[12px] leading-[18px]'>
                            02/12 10:00:19
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-[8px]">
                    <div className='flex items-center gap-[4px]'>
                        <img src={SuccessIcon.src} className='size-[12px]' />
                        <span className='text-[12px] leading-[16px] text-[#ffffff]'>No mint</span>
                    </div>
                    <div className='flex items-center gap-[4px]'>
                        <img src={SuccessIcon.src} className='size-[12px]' />
                        <span className='text-[12px] leading-[16px] text-[#ffffff]'>Blacklist</span>
                    </div>
                    <div className='flex items-center gap-[4px]'>
                        <img src={SuccessIcon.src} className='size-[12px]' />
                        <span className='text-[12px] leading-[16px] text-[#ffffff]'>Top10 18.5%</span>
                    </div>
                    <div className='flex items-center gap-[4px]'>
                        <span className='text-[12px] leading-[16px] text-[#ffffff]'>Burnt 100% 🔥</span>
                    </div>
                </div>
            </div>
        )
    }

    const renderContentTopArea = () => {
        return (
            <div className='card-info-top flex items-center justify-between'>
                <div className='flex items-center justify-center gap-[8px]'>
                    <img className='size-[44px] rounded-full' src='https://ipfs.io/ipfs/QmSkrC7Q5XZtsriT794m2ghnbBadmg1ZbjaaZBMgGzG6P1' alt='ai-icon' />
                    <div className='info-header-left'>
                        <div className='flex items-center justify-start mb-[6px] gap-[6px]'>
                            <div className='text-[#ffffff] font-[700] text-[16px] leading-[19.5px]'>ai16z</div>
                            <div className='flex items-center justify-center gap-[6px]'>
                                <img src={CapsuleIcon.src} className='size-[12px] cursor-pointer' />
                                <img src={TwitterIcon.src} className='size-[12px] cursor-pointer' />
                                <img src={NetworkIcon.src} className='size-[12px] cursor-pointer' />
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-[12px]'>
                            <div className='flex items-center justify-center gap-[5px] text-[12px] leading-[14.63px] text-[#5C6068]'>
                                1d 9CB8i...ump
                                <img src={CopyIcon.src} className='size-[16px] cursor-pointer' />
                            </div>
                            <div className='rounded-[4px] border-[#5C6068] border-[1px] text-[#5C6068] pl-[4px] pr-[16px]'>
                                Ai Agent
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='size-[46px] flex items-center justify-center rounded-[8px]' style={{ background: "linear-gradient(225deg, #1BE9C9 0%, #C8FF00 66.35%)" }}>
                        <span className='font-[700] text-[24px] leading-[18px]'>3</span>
                        <span className='font-[700] text-[24px] leading-[18px]'>x</span>
                    </div>
                    <Tooltip
                        title={(
                            <div className='flex flex-row items-center justify-center gap-[4px] text-[#ffffff] p-[10px] rounded-[16px] bg-[#212325]'>
                                <InfoIcon className='text-[#ffffff]' />
                                <span>Maximum Increase after First Alert</span>
                            </div>
                        )}
                        placement="top"
                        slotProps={{
                            popper: {
                                sx: {
                                    [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                                    {
                                        marginBottom: '0px',
                                        padding: '0px',
                                        borderRadius: "16px",
                                    },
                                },
                                modifiers: [
                                    {
                                        name: 'preventOverflow',
                                        options: {
                                            boundary: 'viewport', // 防止 Tooltip 超出视口时关闭
                                        },
                                    },
                                ],
                            },
                        }}

                    >
                        <img src={InfoImageIcon.src} className='size-[14px] absolute top-[2px] right-[2px] cursor-pointer' />
                        {/* <InfoIcon className='text-[#ffffff] size-[14px] absolute top-[2px] right-[2px] cursor-pointer' /> */}
                    </Tooltip>
                </div>
            </div>
        )
    }

    const renderAppActionArea = () => {
        return (
            <div className='flex flex-row justify-end items-center gap-[13px] pt-[16px]'>
                {appList?.slice(0, 5).map((i) => {
                    return (
                        <div key={i.name} className='rounded-[8px] bg-[#2F2F31] p-[4px] cursor-pointer'>
                            <img className='size-[16px]' src={i.icon} />
                        </div>
                    )
                })}
                <ITooltip title={(
                    <div className='flex flex-col items-center gap-[24px] px-[24px] py-[16px]'>
                        {
                            appList?.slice(5)?.map((i, index) => {
                                return (
                                    <div key={index} className='flex flex-row gap-[16px] w-full cursor-pointer'>
                                        <img className='size-[20px]' src={i.icon} />
                                        <div className='text-[#FFFFFF] text-[16px] leading-[19.5px]'>{i.name}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )}>
                    <MoreIcon className='text-[16px] text-[#ffffff] cursor-pointer' />
                </ITooltip>
            </div>
        )
    }

    const renderCardContent = () => {
        return (
            <div className='bg-[#18181B] border-t-[1px] border-[#2F2F31] rounded-[16px] p-[16px]'>
                {renderContentTopArea()}
                {renderCardFieldInfoArea()}
                {renderSmartMoneyArea()}
                {renderAppActionArea()}
            </div>
        )
    }

    return (
        <div className='rounded-[16px] border-[1px] border-[#2F2F31] bg-[#212125]'>
            <div className="pt-[14px]">
                {renderCardHeader()}
                {renderCardContent()}
            </div>
        </div>
    )
}


const FieldInfoItem = ({
    label,
    value,
}: {
    label?: string,
    value?: string,
}) => {
    return (
        <div className='flex flex-col gap-[2px]'>
            <div className='text-[#5C6068] text-[12px] leading-[14.63px]'>{label}</div>
            <div className='text-[#88D693] text-[12px] leading-[14.63px]'>{value}</div>
        </div>
    )
}