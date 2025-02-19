import React from 'react';
import classNames from 'classnames';

type Iprops = {
    className?: string;
    text: string;
}

const Tag = (props: Iprops) => {
    const { text } = props
    return (
        <div className={classNames('token-tag inline-flex items-center justify-center px-[4px] text-[12px] leading-[16px] font-[300] text-[#9AA0AA] border-[1px] rounded-[4px] border-[#5C6068]', props.className)}>
            {text}
        </div>
    )
};

export default Tag;
