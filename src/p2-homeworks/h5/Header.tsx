import React from 'react';
import {HomePage} from "./HomePage";
import {Links} from "./pages/Links";
import {AllRoutes} from "./Routes";
import {Error404} from "./pages/Error404";

let error = {

}

function Header() {
    return (
        <>
            <Links/>
            { error ? <HomePage/> : <Error404/>}
            <hr/>
            <AllRoutes/>
        </>
    )
}

export default Header
