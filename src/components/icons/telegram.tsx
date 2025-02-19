import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function TelegramIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_336_47727)">
                    <mask id="mask0_336_47727" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="15">
                        <path d="M0.5 0.5H14.5V14.5H0.5V0.5Z" fill="currentColor" />
                    </mask>
                    <g mask="url(#mask0_336_47727)">
                        <path d="M14.3764 2.72857L12.2764 12.6301C12.1201 13.3301 11.7048 13.5004 11.1191 13.1726L7.92008 10.8159L6.37775 12.3011C6.20625 12.4726 6.06275 12.6161 5.73492 12.6161L5.96358 9.35757L11.8914 4.00024C12.1481 3.77157 11.8331 3.64207 11.4901 3.8719L4.16108 8.4849L1.00175 7.50024C0.31575 7.28674 0.30175 6.81424 1.14408 6.4864L13.4897 1.72874C14.0614 1.51524 14.5608 1.85707 14.3764 2.72857Z" fill="currentColor" />
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_336_47727">
                        <rect width="14" height="14" fill="currentColor" transform="translate(0.5 0.5)" />
                    </clipPath>
                </defs>
            </svg>

        </SvgIcon>
    );
}