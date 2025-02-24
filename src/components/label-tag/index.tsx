import React from 'react';
import classNames from 'classnames';

type Iprops = {
    className?: string;
    text: string;
    icon?: string;
    bgColor?: string;
}

const LabelTag = (props: Iprops) => {
    const { text, icon, bgColor, className } = props
    return (
        <div
            style={{ backgroundColor: bgColor }}
            className={classNames("px-[8px] py-[5px] items-center justify-center gap-[6px] rounded-[20px] inline-flex mr-[6px] mt-[6px]", className)}
        >
            <img src={icon} className='size-[14px]' />
            <div className="text-[12px] leading-[18px]">{text}</div>
        </div>
    )
};

export default LabelTag;
