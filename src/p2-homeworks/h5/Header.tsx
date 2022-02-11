import React from 'react';
import s from './AllStyles.module.css';
import {Links} from "./pages/Links";
import {Routings} from "./Routings";

function Header() {
    return (
        <div className={s.block}>
            <Links/>
            <hr/>
            <Routings/>
        </div>
    )
}

export default Header
