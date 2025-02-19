'use client'

import classNames from 'classnames'
import useSWRMutation from 'swr/mutation'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import BasilBookIcon from "../../../public/img/basil_book.svg"
import { ai_list_res } from './mock'
import AiCard from './AiCard'
import BtnGroups from '@/components/btn-groups'
import { RangeSlider } from '@/components/slide'
import MutiSelect from '@/components/muti-select'

import MilestoneMCPPumpTagIcon from "../../../public/img/milestone_MCP_pump_tag.svg"
import SmartWalletTagIcon from "../../../public/img/smart_wallet_tag.svg"
import DegenCallTagIcon from "../../../public/img/degen_call_tag.svg"
import HeavyBoughtTagIcon from "../../../public/img/heavy_bought_tag.svg"
import HotTagIcon from "../../../public/img/hot_tag.svg"
import FomoIcon from "../../../public/img/fomo_tag.svg"


import DogTagIcon from "../../../public/img/dog_tag.svg"
import RobotTagIcon from "../../../public/img/robot_tag.svg"
import PeopleTagIcon from "../../../public/img/people_tag.svg"
import SmileTagIcon from "../../../public/img/smile_tag.svg"
import DatabaseTagIcon from "../../../public/img/database_tag.svg"
import DataTable from '@/components/table'
import Filter from '@/components/filter'

type Iprops = {

}

export default function AiList(props: Iprops) {
    const [searchTime, setSearchTime] = useState<string>('5m');
    const [searchSignal, setSearchSignal] = useState<string[]>([]);
    const [searchCategories, setSearchCategories] = useState<string[]>([]);

    const categoriesOptions = [
        {
            key: 'Animal Themes',
            icon: DogTagIcon.src,
            text: 'Animal Themes',
            iconBackgroundColor: '#C8FF00',
            fullIcon: true,
        }, {
            key: 'AI Agent',
            icon: RobotTagIcon.src,
            text: 'AI Agent',
            iconBackgroundColor: '#8979FF',
            fullIcon: true,
        }, {
            key: 'Economic Models',
            icon: DatabaseTagIcon.src,
            text: 'Economic Models',
            iconBackgroundColor: '#EDD777',
            fullIcon: true,
        }, {
            key: 'Celebrity-Driven',
            icon: PeopleTagIcon.src,
            text: 'Celebrity-Driven',
            iconBackgroundColor: '#C277ED',
            fullIcon: true,
        }, {
            key: 'Meme',
            icon: SmileTagIcon.src,
            text: 'Meme',
            iconBackgroundColor: '#9EDDF8',
            fullIcon: true,
        }
    ]

    const signalOptions = [
        {
            key: 'Smart wallets buy',
            icon: SmartWalletTagIcon.src,
            text: 'Smart wallets buy',
            iconBackgroundColor: '#C8FF00',
        }, {
            key: 'Heavy bought',
            icon: HeavyBoughtTagIcon.src,
            text: 'Heavy bought',
            iconBackgroundColor: '#81E6D6',
        }, {
            key: 'Signals have appeared in 24h',
            icon: HotTagIcon.src,
            text: 'Signals have appeared in 24h',
            iconBackgroundColor: '#F1DF95',
        }, {
            key: 'Milestone MCP pump',
            icon: MilestoneMCPPumpTagIcon.src,
            text: 'Milestone MCP pump',
            iconBackgroundColor: '#B8AFFF',
        }, {
            key: 'Degen call',
            icon: DegenCallTagIcon.src,
            text: 'Degen call',
            iconBackgroundColor: '#9EDDF8',
        }, {
            key: 'FOMO',
            icon: FomoIcon.src,
            text: 'FOMO',
            iconBackgroundColor: '#9EDDF8',
        }
    ]

    const renderAiItem = (item: any) => {
        return (
            <AiCard key={item._id} data={item} />
        )
    }

    return (
        <div className='px-[20px] py-[16px]'>
            <div className='ai-list-header flex items-center justify-between mb-[16px]'>
                <div className='flex items-center gap-[6px] font-[800] text-[24px] leading-[29.05px] text-[#ffffff] py-[5.5px]'>
                    🔥Hot Signals
                    <img className='size-[18px]' src={BasilBookIcon.src} />
                </div>

                <div className='ai-list-content flex items-center justify-center gap-[16px]'>
                    <RangeSlider
                        max={100}
                        min={5}
                        onChange={(rangeValue) => { }}
                        sliderLabelSubfix="M"
                        label='MKT Cap'
                    />
                    <BtnGroups
                        options={['1m', '5m', '1h', '12h', '24h']}
                        value={searchTime}
                        onChange={setSearchTime}
                    />
                    <MutiSelect
                        label="Signal"
                        options={signalOptions}
                        calllback={(values: string[]) => {
                            setSearchSignal(values)
                        }}
                    />
                    <MutiSelect
                        label="Categories"
                        options={categoriesOptions}
                        calllback={(values: string[]) => {
                            setSearchSignal(values)
                        }}
                    />
                </div>
            </div>

            <div className='grid grid-cols-3 gap-[20px]'>
                {ai_list_res?.data?.results.map(renderAiItem)}
            </div>

        </div>
    )
}

