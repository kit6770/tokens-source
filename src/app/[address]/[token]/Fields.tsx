import { CopyIcon } from "@/components/icons";
import { useMessage } from "@/components/message";
import classNames from "classnames";

function Fields({
    label,
    value,
    copy,
    textColor = "#ffffff",
    direction = "horizontal"
}: {
    label?: string,
    value?: string,
    copy?: boolean,
    textColor?: string
    direction?: "horizontal" | "vertical"
}) {
    const showMessage = useMessage();

    const handleCopy = () => {
        if (value) {
            navigator.clipboard.writeText(value)
            showMessage("Copy Success!")
        }
    }

    if (direction === "vertical") {
        return (
            <div className='flex flex-col gap-[4px] items-center justify-between'>
                <div className='text-[12px] leading-[14.63px] text-[#5C6068]'>{label}</div>
                <div className='text-[12px] leading-[14.63px] text-[#ffffff] flex items-center justify-between gap-[4px]'>
                    <div style={{ color: textColor }}>
                        {value}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='flex items-center justify-between'>
            <div className='text-[12px] leading-[14.63px] text-[#5C6068]'>{label}</div>
            <div className='text-[12px] leading-[14.63px] text-[#ffffff] flex items-center justify-between gap-[4px]'>
                <div style={{ color: textColor }}>
                    {value}
                </div>
                {copy && <CopyIcon className='text-[#5C6068] size-[12px] cursor-pointer' onClick={() => handleCopy()} />}
            </div>
        </div>
    )
}

export default Fields;