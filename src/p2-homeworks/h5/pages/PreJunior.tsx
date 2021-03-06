import React from 'react'
import s from './../AllStyles.module.css';
import HW1 from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW3 from '../../h3/HW3'
import HW4 from '../../h4/HW4'
import HW6 from "../../h6/HW6";

export function PreJunior() {
    return (
        <div className={s.main_pre_jun}>
            <h1>{`${"Level Pre-Junior ==> Your Pages"}`}</h1>
            <HW1/>
            <HW2/>
            <HW3/>
            <HW4/>
            <HW6/>
        </div>
    )
}

