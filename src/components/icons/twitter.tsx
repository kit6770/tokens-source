import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function TwitterIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.12195 1.125H10.776L7.16245 5.255L11.4135 10.875H8.08495L5.47795 7.4665L2.49495 10.875H0.839953L4.70495 6.4575L0.626953 1.125H4.03995L6.39645 4.2405L9.12195 1.125ZM8.54145 9.885H9.45795L3.54195 2.063H2.55845L8.54145 9.885Z" fill="currentColor" />
            </svg>
        </SvgIcon>
    );
}