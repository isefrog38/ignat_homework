import React, {useEffect, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange';
import s from './common/c7-SuperRange/SuperRange.module.css';
import {restoreState, saveState} from "../h6/localStorage/localStorage";
import {SuperDoubleRange} from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value, setValue] = useState<number>(0)
    const [valueAll, setValueAll] = useState<number[]>([0, 100])

    useEffect(() => {
        saveState("input_polzunok", value);
        setValue(restoreState<number>("input_polzunok", + setValue))
    },[value])

    return (
        <>
            homeworks 11
            <p/>
            <div className={s.main_block}>
                <div className={s.input_and_text_block}>
                    <span className={s.number}>{value}</span>
                    <SuperRange
                        onChangeRange={setValue}
                        value={value}
                    />
                </div>
                <div className={s.input_and_text_block}>
                    <span className={s.number}>{valueAll[0]}</span>
                        <SuperDoubleRange
                            onChangeRange={setValueAll}
                            value={valueAll}
                        />
                    <span className={s.number}>{valueAll[1]}</span>
                </div>
            </div>
            <hr/>
        </>

    )
}

export default HW11
