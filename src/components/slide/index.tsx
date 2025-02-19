import React, { useState } from 'react';
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

function ValueLabelComponent(props: SliderValueLabelProps) {
    const { children, value } = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}


const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#3a8589',
    height: 6,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
        height: 16,
        width: 17,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        '&:hover': {
            boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
        },
        '& .airbnb-bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    '& .MuiSlider-track': {
        height: 6,
        backgroundColor: '#77ED91',
    },
    '& .MuiSlider-rail': {
        color: '#FFFFFF33',
        opacity: 1,
        height: 6,
        ...theme.applyStyles('dark', {
            color: '#bfbfbf',
            opacity: undefined,
        }),
    },
}));

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> { }

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
        </SliderThumb>
    );
}

type RangeSliderProps = {
    max?: number;
    min?: number;
    onChange: (value: number[]) => void;
    style?: React.CSSProperties
    defaultValue?: number[]
    sliderLabelSubfix?: string
    label?: string
}

export function RangeSlider(props: RangeSliderProps) {
    const { max, min, onChange, style, defaultValue = [30, 60], sliderLabelSubfix, label } = props;
    const [sliderValue, setSliderValue] = useState<number[]>(defaultValue);
    const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        setSliderValue(newValue as number[]);
        onChange(newValue as number[])
    };

    return (
        <div className='flex flex-row items-center justify-center gap-[16px] px-[16px] rounded-[12px] border-[1px] border-[#2E3134]'>
            <div className='text-[16px] leading-[20px] text-[#8D8D8D]'>{label}</div>
            <div className="flex flex-row items-center justify-center gap-[12px]">
                <div className="text-[12px] leading-[20px] text-[#ffffff]">{`${sliderValue[0]}${sliderLabelSubfix}`}</div>
                <Box sx={{ width: 212 }}>
                    <AirbnbSlider
                        slots={{ thumb: AirbnbThumbComponent }}
                        defaultValue={defaultValue}
                        onChange={(e, value, activeThumb) => handleChange(e, value, activeThumb)}
                        min={min}
                        max={max}
                    />
                </Box>
                <div className="text-[12px] leading-[20px] text-[#ffffff]">{`${sliderValue[1]}${sliderLabelSubfix}`}</div>
            </div>
        </div>
    );

}
