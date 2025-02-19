import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import classNames from 'classnames';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { InputAdornment, OutlinedInput, TextField } from '@mui/material';


type FilterColumnProps = {
    title: string;
    options: {
        text?: string;
        value?: number;
    }[];
    unit?: string;
    hiddenRange?: boolean;
}

type Iprops = {
    children?: React.ReactNode;
    popoverKey: string;
    columns: FilterColumnProps[];
}

export default function Filter(props: Iprops) {
    const { popoverKey, columns = [] } = props;
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
    const [values, setValues] = useState<string[]>([]);



    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const ColorButton = styled(Button)<ButtonProps>(({ theme, color, className }) => ({
        class: className,
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    }));

    const TextFieldSX = {
        width: '90px',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#2F2F31',    // 设置边框颜色
            borderRadius: "12px"
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0ABF52',    // 设置悬停时的边框颜色
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0ABF52', // 设置聚焦时的边框颜色
        },
        '& .MuiInputBase-input': {
            color: '#ffffff',         // 设置输入文字颜色为黑色
            padding: '6px 0px 6px 14px'
        },
        '& .MuiTypography-root': {
            color: '#5C6068',
        }
    }

    const renderItem = (item: FilterColumnProps, index: number) => {
        return (
            <div className={classNames("flex flex-col gap-[8px] items-start border-b-[1px] border-[#2F2F31] pb-[16px] pt-[16px]", {
                'border-b-[0px]': index === columns.length - 1
            })}>
                <div className="text-[#FFFFFF80] text-[14px] leading-[18px] font-medium">{item.title}</div>
                {(item?.options || []).map((o) => {
                    return (
                        <div className="bg-[#212125] text-[#ffffff] rounded-[12px] border-[1px] border-[#2F2F31] w-[213px] flex items-center justify-center text-[14px] leading-[30px] cursor-pointer">
                            {o.text}
                        </div>
                    )
                })}
                {!item?.hiddenRange && (
                    <div className='flex flex-row gap-[9px] items-center justify-center'>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">{item.unit}</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            sx={TextFieldSX}
                        />
                        <div className='text-[#ffffff] text-[14px] leading-[30px]'>to</div>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">{item.unit}</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            sx={TextFieldSX}
                        />
                    </div>
                )}
            </div>
        )
    }

    const renderContent = () => {
        return (
            <div className='px-[16px] bg-[#212125]'>
                {columns.map(renderItem)}
                <div className='flex items-center justify-between gap-[13px] pb-[16px]'>
                    <ColorButton variant="contained" className="!bg-[#2F2F31] !text-[#ffffff] w-full">
                        Reset
                    </ColorButton>
                    <ColorButton variant="contained" className='!bg-[#ffffff] !text-[#000000] w-full'>
                        Apply
                    </ColorButton>
                </div>
            </div>
        );
    }

    const open = Boolean(anchorEl);
    const id = open ? `${popoverKey}_filter_simple-popover` : undefined;

    return (
        <>
            <div
                aria-describedby={id}
                onClick={handleClick}
                className='inline-block cursor-pointer'
            >
                <FilterAltIcon className='text-[#5C6068]' />
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
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



export const FilterDemo = () => {
    return (
        <Filter
            popoverKey="test"
            columns={[
                {
                    title: "Lig ($)",
                    options: [{
                        text: "$ > 10K",
                        value: 10000,
                    }, {
                        text: "$ > 100K",
                        value: 100000,
                    }, {
                        text: "$ > 300K",
                        value: 300000,
                    }],
                    unit: "K",
                },
                {
                    title: "MC ($)",
                    options: [{
                        text: "$ > 50K",
                        value: 50000,
                    }, {
                        text: "$ > 100K",
                        value: 100000,
                    }, {
                        text: "$ > 500K",
                        value: 500000,
                    }],
                    unit: "K",
                }
            ]}
        >
        </Filter>
    )
}