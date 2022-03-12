import React, {ChangeEvent} from 'react'
import {DefaultInputPropsType} from "../c7-SuperRange/SuperRange";

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        ...restProps
    }
) => {


    return (
        <>
            <input
                type={'range'}
                /*onChange={onChangeCallback}*/

                {...restProps}
            />
        </>
    )
}

export default SuperDoubleRange
