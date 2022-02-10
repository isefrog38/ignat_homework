import React from 'react'
import {Route, Routes} from "react-router-dom";
import {PreJunior} from "./pages/PreJunior";
import {Error404} from "./pages/Error404";
import {JuniorPlus} from "./pages/Junior+";
import {Junior} from "./pages/Junior";
import HW5 from "./HW5";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus'
}

export function AllRoutes() {
    return (
        <div>
            <Routes>
            <Route path={'/'} element={HW5}/>
            <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
            <Route path={PATH.JUNIOR} element={<Junior/>}/>
            <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>


            <Route element={() => <Error404/>}/>

            </Routes>
        </div>
    )
}

