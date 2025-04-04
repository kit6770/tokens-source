import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function MoreIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3.11117" cy="7.99935" r="1.33333" fill="currentColor" />
                <circle cx="7.99984" cy="7.99935" r="1.33333" fill="currentColor" />
                <circle cx="12.889" cy="7.99935" r="1.33333" fill="currentColor" />
            </svg>
        </SvgIcon>
    );
}