import React from 'react';
import s from "../AllStyles.module.css";
import {Link} from "react-router-dom";

export const Links = () => {
    return (
        <div>
            <div className={s.Nav_bar}>
                <a>
                    <Link className={s.Buttons} to={'/pre-junior'}>Pre-Junior</Link>
                </a>
                <a>
                    <Link className={s.Buttons} to={'/junior'}>Junior</Link>
                </a>
                <a>
                    <Link className={s.Buttons} to={'/junior-plus'}>Junior-Plus</Link>
                </a>
            </div>
        </div>
    );
};
