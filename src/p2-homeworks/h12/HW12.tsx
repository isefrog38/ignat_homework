import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, initStateType, ThemesType} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";


function HW12() {

    const state = useSelector<AppStoreType, initStateType>(state => state.theme);
    const dispatch = useDispatch();

    const themes = ['dark', 'red', 'some'];
    const onChangeCallback = (theme: ThemesType) => dispatch(changeThemeAC(theme));

    return (
        <div className={s[state.theme]}>
            <hr/>
            <span className={s[state.theme + '-text']}>
                homeworks 12
            </span>
            <div className={s.supers}>
                <SuperSelect options={themes} onChangeOption={onChangeCallback}/>
                <SuperRadio options={themes} onChangeOption={onChangeCallback}/>
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
