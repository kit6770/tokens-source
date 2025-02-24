'use client'

import classNames from 'classnames'
import useSWRMutation from 'swr/mutation'
import { useEffect } from 'react'
import AppLogo from '../../../public/img/app_logo.svg'
import SOLLogo from "../../../public/img/sol_colorful.svg"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function PageHeader() {
    const pathname = usePathname()

    const renderSearch = () => {
        return (
            <InputBase
                placeholder="Search"
                inputProps={{ 'aria-label': 'search google maps' }}
                startAdornment={<SearchIcon className='text-[#5C6068]' />}
                sx={{
                    width: 334,
                    backgroundColor: '#212125',  // 背景颜色
                    borderRadius: '16px',          // 边框圆角
                    paddingLeft: '10px',          // 内边距
                    border: 'solid 1px #2F2F31',
                    paddingRight: '10px',         // 内边距
                    '& .MuiInputBase-input': {
                        color: '#fff',              // 文字颜色
                        padding: "12px 8px 13px",
                    },
                    '& .MuiInputBase-input::placeholder': {
                        color: '#5C6068',              // placeholder 颜色
                    },
                    '& fieldset': {
                        borderColor: '#2F2F31',        // 边框颜色
                    },
                    '&:hover fieldset': {
                        borderColor: '#2F2F31',     // hover 状态的边框颜色
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#2F2F31',     // 聚焦时的边框颜色
                    },
                }}
            />
        );
    }

    const renderNavigation = () => {
        return (
            <div className="flex flex-row items-center justify-center ml-[60px] gap-10">
                <Link
                    href={"/"}
                    className={`${pathname === "/"
                        ? "text-[#fff] font-bold border-b-[2px] border-[#fff]"
                        : "text-[#8D8D8D]"
                        } text-[#8D8D8D] cursor-pointer py-[8px] font-[500] text-[16px] leading-[40px]`}
                >
                    Signal
                </Link>
                <Link
                    href={'/watch-list'}
                    className={`${pathname === "/watch-list"
                        ? "text-[#fff] font-bold border-b-[2px] border-[#fff]"
                        : "text-[#8D8D8D]"
                        } text-[#8D8D8D] text-[16px] cursor-pointer py-[8px]`}
                >
                    WatchList
                </Link>
            </div>
        )
    }

    const renderAppInfo = () => {
        return (
            <div className='flex items-center gap-[6px]'>
                <img className='size-[34px]' src={AppLogo.src} />
                <span className='font-[800] text-[20px] leading-[24.38px] text-[#ffffff]'>Token Dashboard</span>
            </div>
        )
    }

    const renderNetworkArea = () => {
        return (
            <div className='flex flex-row items-center justify-start gap-[6px] w-[140px] px-[10px] py-[14px] rounded-[16px] bg-[#212125] border-[1px] border-[#2F2F31]'>
                <img src={SOLLogo.src} className='size-[20px]' />
                <div className='text-[14px] leading-[17.07px] text-[#ffffff]'>SOL</div>
            </div>
        )
    }

    const renderLoginArea = () => {
        return (
            <div className='bg-[#ffffff] text-[#18181B] rounded-[10px] py-[3px] px-[40px] leading-[34px] font-medium cursor-pointer'>
                Connect
            </div>
        )
    }

    return (
        <div className='bg-[#000000] h-[60px] flex items-center justify-between px-[20px]'>
            <div className='flex flex-row items-center'>
                {renderAppInfo()}
                {renderNavigation()}
            </div>

            <div className='flex flex-row items-center justify-end gap-[12px]'>
                {renderSearch()}
                {renderNetworkArea()}
                {renderLoginArea()}
            </div>
        </div>
    )

}
