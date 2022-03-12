import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, StateLoadingReducerType} from "./bll/loadingReducer";

function HW10() {

    let state = useSelector<AppStoreType, StateLoadingReducerType>( state => state.loading);
    let dispatch = useDispatch();

    const setLoading = () => {
        dispatch(loadingAC( true ))
         function showDown (){
            window.setInterval(() => {
                dispatch(loadingAC( false ))
            }, 5000)
        }
        showDown()
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {state.showLoader
                ? (
                    <div><img src={state.preloader} alt={"Loading"} /></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            <hr/>
        </div>
    )
}

export default HW10
