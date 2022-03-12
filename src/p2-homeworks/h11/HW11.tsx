import React, {useEffect, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange';
import s from './common/c7-SuperRange/SuperRange.module.css';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import {restoreState, saveState} from "../h6/localStorage/localStorage";

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState(100)

    useEffect(() => {
        saveState("input_polzunok", value1);
        setValue1(restoreState<number>("input_polzunok", +setValue1))
    },[value1, value2])

    return (
        <>
            homeworks 11
            <p/>
            <div className={s.main_block}>
                <div className={s.input_and_text_block}>
                    <span className={s.number}>{value1}</span>
                    <SuperRange
                        onChangeRange={setValue1}
                        value={value1}
                    />
                </div>

                <div className={s.input_and_text_block}>
                    <span className={s.number}>{value1}</span>
                    {/*<SuperDoubleRange
                        onChangeRange={setValue2}
                        value={value2}
                    />*/}
                    <span className={s.number}>{value2}</span>
                </div>
            </div>
            <hr/>
        </>

    )
}

export default HW11
