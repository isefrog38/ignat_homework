import React, {useEffect} from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: Array<number>) => void
    value?: Array<number>
}
export const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,

    }
) => {

    const [value2, setValue2] = React.useState<Array<number>>([0, 100]);

    useEffect(()=>{
        debugger
        if(value) {
            setValue2(value)
        }
    },[value])

    const minDistance = 10;

    const handleChange2 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue2([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue2([clamped - minDistance, clamped]);
            }
        } else {
            if (onChangeRange) {
                onChangeRange(newValue)
            }
            setValue2(newValue as number[])
        }
    };

    return (
        <Box sx={{width: 120}}>
            <Slider
                getAriaLabel={() => 'Minimum distance shift'}
                value={value2}
                onChange={handleChange2}
                valueLabelDisplay="auto"
                disableSwap
            />
        </Box>
    )
}