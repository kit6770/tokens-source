import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function StarIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_336_48220" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="15">
                    <path d="M0 0.5H14V14.5H0V0.5Z" fill="white" />
                </mask>
                <g mask="url(#mask0_336_48220)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.61861 1.36649C5.7442 1.10682 5.94044 0.887801 6.1848 0.734545C6.42917 0.581288 6.71178 0.5 7.00023 0.5C7.28868 0.5 7.57129 0.581288 7.81566 0.734545C8.06003 0.887801 8.25626 1.10682 8.38186 1.36649L9.77048 4.10262L12.7035 4.63024C13.9407 4.85249 14.4325 6.42487 13.5566 7.36112L11.4829 9.58012L11.9064 12.6426C12.0849 13.935 10.7977 14.9062 9.67161 14.3314L7.00023 12.9646L4.32886 14.3296C3.20273 14.9054 1.91561 13.9341 2.09411 12.6417L2.51761 9.57924L0.443858 7.36024C-0.431142 6.42399 0.059733 4.85162 1.29698 4.62937L4.22998 4.10174L5.61861 1.36649Z" fill="currentColor" />
                </g>
            </svg>

        </SvgIcon>
    );
}