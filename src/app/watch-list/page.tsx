'use client'

import BtnGroups from '@/components/btn-groups'
import { EditIcon } from '@/components/icons'
import MutiSelect from '@/components/muti-select'
import DataTable from '@/components/table'
import classNames from 'classnames'
import { useEffect, useState } from 'react'


const signalOptions = [
    {
        key: 'Smart wallets buy',
        text: 'Smart wallets buy',
        iconBackgroundColor: '#C8FF00',
    }, {
        key: 'Heavy bought',
        text: 'Heavy bought',
        iconBackgroundColor: '#81E6D6',
    }, {
        key: 'Signals have appeared in 24h',
        text: 'Signals have appeared in 24h',
        iconBackgroundColor: '#F1DF95',
    }, {
        key: 'Milestone MCP pump',
        text: 'Milestone MCP pump',
        iconBackgroundColor: '#B8AFFF',
    }, {
        key: 'Degen call',
        text: 'Degen call',
        iconBackgroundColor: '#9EDDF8',
    }, {
        key: 'FOMO',
        text: 'FOMO',
        iconBackgroundColor: '#9EDDF8',
    }
]

export default function AIView() {
    const [groups, setGroups] = useState(signalOptions);
    const [searchGroups, setSearchGroups] = useState<string[]>([]);
    const [searchDuration, setSearchDuration] = useState<string>("5m")

    useEffect(() => {
        fetch('/tokens/dex-api/v1/data/get_twitter_tweets_by_uid?tweet_user_id=1160678898478096386&limit=2')
    }, [])

    const renderHeader = () => {
        return (
            <div className='flex flex-row items-center justify-between mb-[14px]'>
                <div className='flex items-center justify-between gap-[16px]'>
                    <MutiSelect
                        label="Signal"
                        options={signalOptions}
                        calllback={(values: string[]) => {
                            setSearchGroups(values)
                        }}
                    />
                    <BtnGroups
                        options={['1m', '5m', '1h', '12h', '24h']}
                        value={searchDuration}
                        onChange={setSearchDuration}
                    />
                </div>
                <div className='flex flex-row items-center justify-center gap-[8px] cursor-pointer'>
                    <EditIcon className="!text-[18px]" />
                    <div className='text-[16px] leading-[24px] font-[500]'>Edit Favorite Group</div>
                </div>
            </div>
        )
    }

    const renderContent = () => {
        return (
                <DataTable
                    columns={[
                        {
                            key: "token",
                            title: "Token",
                            dataIndex: "token",
                            width: "30%",
                            render: (token, data) => {
                                return (
                                    <div className='text-[red]'>{token}</div>
                                )
                            }
                        },
                        {
                            key: "created",
                            title: "Created",
                            dataIndex: "created",
                            sortable: true,
                        },
                        {
                            key: "holder",
                            title: "Holder",
                            dataIndex: "holder",
                            sortable: true,
                        },
                        {
                            key: "smartWalletsBuy",
                            title: "Smart wallets buy",
                            dataIndex: "smartWalletsBuy",
                            sortable: true,
                        },
                        {
                            key: "5m TXs",
                            title: "5m TXs",
                            dataIndex: "5m TXs",
                            sortable: true,
                        },
                        {
                            key: "5m Vol",
                            title: "5m Vol",
                            dataIndex: "5m Vol",
                            sortable: true,
                        },
                        {
                            key: "Price",
                            title: "Price",
                            dataIndex: "Price",
                            sortable: true,
                        },
                        {
                            key: "5m",
                            title: "5m",
                            dataIndex: "5m",
                            sortable: true,
                        },
                        {
                            key: "1h",
                            title: "1h",
                            dataIndex: "1h",
                            sortable: true,
                        },
                        {
                            key: "24h",
                            title: "24h",
                            dataIndex: "24h",
                            sortable: true,
                        },
                    ]}
                    dataSource={[
                        {
                            token: "Bitcoin",
                            created: "BTC",
                            holder: "Bitcoin",
                            "smartWalletsBuy": "0.01%",
                            "5m TXs": "0.01%",
                            "5m Vol": "dhsdah"
                        }
                    ]}
                />
        );
    }

    return (
        <div className='h-full bg-black overflow-scroll text-[#ffffff] p-[24px]'>
            {renderHeader()}
            {renderContent()}
        </div>
    )
}

