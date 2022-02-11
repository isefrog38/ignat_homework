import React from 'react';
import s from './AllStyles.module.css';
import {Links} from "./Links";
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
