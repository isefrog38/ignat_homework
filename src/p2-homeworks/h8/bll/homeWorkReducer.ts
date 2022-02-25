export const SORT = "SORT";
export const CHECK = "CHECK";
type ActionType = SortACType | CheckACType;
type SortACType = ReturnType<typeof SortAC>;
type CheckACType = ReturnType<typeof CheckAC>;
export type InitialStateType = {
    _id: number
    name: string
    age: number
};

export const initialState: InitialStateType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

export const homeWorkReducer = (state = initialState, action: ActionType): InitialStateType[] => { // need to fix any
    switch (action.type) {
        case SORT: {
            if (action.changeMove === "up") {
                return [...state.sort((a, b) => a.age > b.age ? -1 : 1)];
            } else if (action.changeMove === "down") {
                return [...state.sort((a, b) => a.age < b.age ? -1 : 1)];
            }
            return state
        }
        case CHECK: {
            return state.filter(el => el.age > action.ageFilter).sort((a, b) => a.age < b.age ? -1 : 1);
        }
        default:
            return state
    }
}

export const SortAC = (changeMove: string) => {
    return {type: SORT, changeMove} as const
};
export const CheckAC = (ageFilter: number) => {
    return {type: CHECK, ageFilter} as const
};