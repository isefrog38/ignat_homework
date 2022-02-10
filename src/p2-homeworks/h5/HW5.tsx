import React from 'react'
import s from './AllStyles.module.css';
import Header from './Header'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div className={s.main}>
            <HashRouter>
                <Header/>
            </HashRouter>
        </div>
    )
}

export default HW5
