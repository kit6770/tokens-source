import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Checkbox from '@mui/material/Checkbox';


type MutiSelectOptionProps = {
    key: string;
    icon?: any;
    text: string;
    iconBackgroundColor?: string;
    fullIcon?: boolean;
}

type Iprops = {
    children?: React.ReactNode;
    label?: string;
    options: MutiSelectOptionProps[];
    calllback?: (values: string[]) => void;
}

export default function MutiSelect(props: Iprops) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
    const { label, options = [], calllback } = props;
    const [values, setValues] = useState<string[]>([]);
    const [allChecked, setAllChecked] = useState<boolean>(false);


    const handleAllCheckedChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        if (checked) {
            setValues(options.map((i) => i.key))
        } else {
            setValues([]);
        }
        setAllChecked(checked);
    }

    const handleItemChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean, item: MutiSelectOptionProps) => {
        let _value: string[] = [];
        if (checked) {
            _value = [...values, item?.key]
        } else {
            _value = [...values.filter((i) => i !== item?.key)]
        }
        setValues(_value);
        calllback?.(_value);
        if (_value.length === options?.length) {
            setAllChecked(true)
        } else {
            setAllChecked(false)
        }
    }


    const renderContent = () => {
        return (
            <React.Fragment>
                <div className='flex flex-col bg-[#212125] py-[16px] pl-[26px] pr-[15px] rounded-2xl'>
                    <div className='flex items-center justify-between'>
                        <div className="text-[18px] leading-[30px] text-[#ffffff]">Filter</div>
                        <div className='flex items-center justify-center gap-[12px]'>
                            <div className="text-[16px] leading-[19.5px] text-[#ffffff]">All</div>
                            <Checkbox
                                sx={{
                                    color: "#97979780",
                                    '&.Mui-checked': {
                                        color: "#0ABF52",
                                    },
                                }}
                                onChange={handleAllCheckedChange}
                                checked={allChecked}
                            />
                        </div>
                    </div>

                    {options.map((i) => {
                        return (
                            <div key={i.key} className='flex items-center justify-between'>
                                <div className='flex items-center justify-center gap-[16px]'>
                                    {
                                        i.fullIcon ? (
                                            <img src={i.icon} className="size-[20px] rounded-full" />
                                        ) : (

                                            <div className='size-[20px] flex items-center justify-center rounded-full' style={{ backgroundColor: i.iconBackgroundColor }}>
                                                <img src={i.icon} className="size-[10px]" />
                                            </div>
                                        )
                                    }
                                    <div className="text-[16px] leading-[19.5px] text-[#ffffff]">{i.text}</div>
                                </div>
                                <Checkbox
                                    key={`checkbox-${i.key}`}
                                    sx={{
                                        color: "#97979780",
                                        '&.Mui-checked': {
                                            color: "#0ABF52",
                                        },
                                    }}
                                    checked={!!values?.find((j) => j === i.key)}
                                    onChange={(e, checked) => handleItemChange(e, checked, i)}
                                />
                            </div>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? `${label || "muti"}_simple-popover` : undefined;

    return (
        <>
            <div
                aria-describedby={id}
                onClick={handleClick}
                className="flex items-center justify-center bg-[#1E2021] border-[1px] border-[#2E3134] rounded-[16px] px-[16px] py-[10px]"
            >
                <div className='text-[16px] leading-[20px] text-[#8D8D8D]'>{`${label}： `}</div>
                <div className='text-[16px] leading-[24px] text-[#5C6068]'>
                    {
                        allChecked ? "All" : (values?.length > 1 ? values.length : (values?.[0] || "None"))
                    }
                </div>
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                sx={{
                    '& .MuiPaper-root': {
                        borderRadius: '16px',
                        padding: '0px',
                    },
                }}
            >
                {renderContent()}
            </Popover>
        </>
    );
}
