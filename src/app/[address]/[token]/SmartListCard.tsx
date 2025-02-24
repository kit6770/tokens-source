'use client'

import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { Avatar, AvatarGroup } from '@mui/material';
import { CopyIcon, NoticeIcon, PoolInfoIcon } from '@/components/icons'
import { useMessage } from '@/components/message';
import Fields from './Fields';
import DataTable, { ITableColumnsProps } from '@/components/table';
import TabRadio from '@/components/tab-radio';



type Iprops = {

}

export default function SmartListCard(props: Iprops) {
    const [currentTab, setCurrentTab] = useState<string>('Smart 13');
    const [smartData, setSmartData] = useState<any>([]);
    const [kolData, setKolData] = useState<any>([]);

    const kolColumns: ITableColumnsProps[] = [
        {
            title: 'Maker',
            dataIndex: 'maker',
            key: 'maker',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Call Time',
            dataIndex: 'Call Time',
            key: 'Call Time',
            sortable: true,
        },
        {
            title: 'Increase',
            dataIndex: 'Increase',
            key:'Increase',
            sortable: true,
        },
        {
            title: '30D Win Rate',
            dataIndex: '30D Win Rate',
            key:'30D Win Rate',
            sortable: true,
        },
        {
            title: 'Price',
            dataIndex: 'Price',
            key:'Price',
            sortable: true,
        },
    ]

    const smartColumns: ITableColumnsProps[] = [
        {
            title: 'Trader',
            dataIndex: 'Trader',
            key: 'Trader',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'SOL Bal/Age',
            dataIndex: 'SOL Bal/Age',
            key: 'SOL Bal/Age',
        },
        {
            title: 'Pnl',
            dataIndex: 'Pnl',
            key: 'Pnl',
            sortable: true,
        },
        {
            title: 'Reailzed',
            dataIndex: 'Reailzed',
            key: 'Reailzed',
            sortable: true,
        },
        {
            title: 'Unreailzed',
            dataIndex: 'Unreailzed',
            key: 'Unreailzed',
            sortable: true,
        },
        {
            title: 'Holding',
            dataIndex: 'Holding',
            key: 'Holding',
        },
        {
            title: 'Avg Cost/Sold',
            dataIndex: 'Avg Cost/Sold',
            key: 'Avg Cost/Sold',
        },
        {
            title: 'TXs',
            dataIndex: 'TXs',
            key: 'TXs',
        },
    ]

    const renderSmartTable = () => {
        return (
            <DataTable
                dataSource={smartData}
                columns={smartColumns}
            />
        )
    }

    const renderKolTable = () => {
        return (
            <DataTable
                dataSource={kolData}
                columns={kolColumns}
            />
        )
    }

    return (
        <div className='bg-[#18181B] rounded-[16px] py-[16px] px-[12px]'>
            <TabRadio
                options={['Smart 13', 'KOL 24']}
                onChange={setCurrentTab}
                value={currentTab}
            />
            {currentTab === "Smart 13" && renderSmartTable()}
            {currentTab === "KOL 24" && renderKolTable()}
        </div>
    )
}

