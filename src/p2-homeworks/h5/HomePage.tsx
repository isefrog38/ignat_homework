import React from 'react';
import s from './AllStyles.module.css';

export const HomePage = () => {
    return (
        <div className={s.welcome}>
            <div>
                <h1> Choose your level</h1>
                <div className={s.arrow}>
                    <div></div>
                </div>
            </div>
            <img
                className={s.img_welcome}
                src={"https://media.tenor.com/images/46d22155b56b5181332efa15a2440f01/tenor.png"}/>
        </div>
    );
};
