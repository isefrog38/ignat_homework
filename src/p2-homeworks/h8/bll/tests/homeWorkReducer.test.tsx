import React from 'react';
import {CHECK, CheckAC, homeWorkReducer, InitialStateType, SORT, SortAC} from '../homeWorkReducer';

let initialState: InitialStateType[];

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, SortAC("up"));

    expect(newState).not.toBe(initialState);
    expect(newState.length).toBe(6);
    expect(newState[0].name).toBe('Александр');
    expect(newState[1].name).toBe('Ирина');

})

test('sort name down', () => {
    const newState = homeWorkReducer(initialState, SortAC('down'));

    expect(newState).not.toBe(initialState);
    expect(newState.length).toBe(6);
    expect(newState[0].name).toBe('Кот');
    expect(newState[1].name).toBe('Коля');
})

test('check age 18', () => {
    const newState = homeWorkReducer(initialState,  CheckAC(18));

    expect(newState).not.toBe(initialState);
    expect(newState.length).toBe(4);
    expect(newState[0].name).toBe('Дмитрий');
    expect(newState[1].name).toBe('Виктор');
})
