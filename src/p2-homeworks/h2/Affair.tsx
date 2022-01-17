import React from 'react'
import {AffairType} from "./HW2";
import a from "./Affairs.module.css"

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    const activeClass = a.item + " " ;

    return (
        <div className={a.affair}>
            <div className={a.item}>{props.affair.name}</div>
            <div className={activeClass + a[props.affair.priority]} >[{props.affair.priority}]</div>

            <button onClick={deleteCallback}
                    className={activeClass + a.button} >X</button>
        </div>
    )
}

export default Affair
