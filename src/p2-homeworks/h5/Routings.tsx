import React from 'react'
import s from './AllStyles.module.css';
import { Route, Routes, Navigate} from "react-router-dom";
import {PreJunior} from "./pages/PreJunior";
import {Error404} from "./pages/Error404";
import {JuniorPlus} from "./pages/Junior+";
import {Junior} from "./pages/Junior";
import {HomePage} from "./HomePage";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    HOME: '/home-page'
}

export function Routings() {
    return (
        <div className={s.block_size}>
            <Routes>
            <Route path={'/'} element={<Navigate to={PATH.HOME}/>}/>
            <Route path={PATH.HOME} element={<HomePage/>}/>
            <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
            <Route path={PATH.JUNIOR} element={<Junior/>}/>
            <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
            <Route path={'*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

