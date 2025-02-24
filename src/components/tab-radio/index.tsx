import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
];

type Iprops = {
    options: string[],
    onChange?: (value: string) => void
    value: string
}

export default function TabRadio(props: Iprops) {

    const { value, options, onChange } = props;

    return (
        <div className="inline-flex border border-[#2E3134] rounded-md">
            {options.map((label: string, index: number) => (
                <button
                    key={index}
                    onClick={() => onChange?.(label)}
                    className={`
                        px-[14px] py-[11px] text-[14px] leading-[18px] cursor-pointer 
                        ${index !== 0 ? 'border-l border-[#2E3134]' : ''} 
                        ${value === label ? 'bg-[#3C4346] text-white' : 'bg-[#1E2021] text-[#FFFFFF80]'} 
                        ${index === 0 ? 'rounded-l-md' : ''} 
                        ${index === options.length - 1 ? 'rounded-r-md' : ''}`
                    }
                >
                    {label}
                </button>
            ))}
        </div>
    );
}