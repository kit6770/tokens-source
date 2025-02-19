'use client'

import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { Avatar, AvatarGroup } from '@mui/material';
import { NoticeIcon } from '@/components/icons'



type Iprops = {

}

export default function DegenCallCard(props: Iprops) {

    const users = [
        { name: 'Remy Sharp', src: 'https://ipfs.io/ipfs/QmSkrC7Q5XZtsriT794m2ghnbBadmg1ZbjaaZBMgGzG6P1' },
        { name: 'Travis Howard', src: 'https://ipfs.io/ipfs/QmSkrC7Q5XZtsriT794m2ghnbBadmg1ZbjaaZBMgGzG6P1' },
        { name: 'Cindy Baker', src: '' },  // 没有头像，展示第一个字母
        { name: 'Agnes Walker', src: '' },  // 没有头像，展示第一个字母
        { name: 'Trevor Henderson', src: 'https://ipfs.io/ipfs/QmSkrC7Q5XZtsriT794m2ghnbBadmg1ZbjaaZBMgGzG6P1' }
    ];

    return (
        <div className='bg-[#88D69333] rounded-[16px] py-[16px] px-[12px]'>
            <div className='flex items-center justify-between mb-[24px]'>
                <div className='text-[14px] leading-[17.07px] text-[#ffffff]'>Degen call</div>
                <NoticeIcon className='transform -scale-x-100 text-[#88D693]' />
            </div>
            <div className='flex items-center justify-between'>
                <AvatarGroup max={8} sx={{ justifyContent: 'left' }}>
                    {users.map((i: any, index: number) => {
                        return (
                            <Avatar
                                key={index}
                                sx={{ width: 32, height: 32 }}
                                alt="Remy Sharp"
                                src={i.src}
                            >
                                {i.name?.slice(0, 1)?.toUpperCase()}
                            </Avatar>
                        );
                    })}
                </AvatarGroup>
                <div className='text-[#FFFFFF] text-[20px] leading-[24.38px] font-[500]'>{users.length}</div>
            </div>
        </div>
    )
}

