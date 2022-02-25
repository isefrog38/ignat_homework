import React, {useState} from 'react'
import "./bll/Styles.css";
import {CHECK, homeWorkReducer, initialState, InitialStateType, SORT} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function HW8() {
    const [people, setPeople] = useState<InitialStateType[]>(initialState)

    const finalPeople = people.map((people: InitialStateType) => (
        <li key={people._id}>
            Hi , I'm {people.name} and my age is {people.age}
        </li>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialState, {type: SORT, changeMove: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialState, {type: SORT, changeMove: 'down'}))
    const check = () => setPeople(homeWorkReducer(initialState, {type: CHECK, ageFilter: 18}))

    return (
        <div>
            <hr/>
            homeworks 8
            <p></p>
            <ul>{finalPeople}</ul>
            <div className={"Buttons"}>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={check}>check 18</SuperButton>
            </div>
            <hr/>
        </div>
    )
}

export default HW8
