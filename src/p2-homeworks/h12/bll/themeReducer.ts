export type ThemesType = 'dark' | 'red' | 'some';
type ChangeThemeType = {
    type: "CHANGE_THEME"
    theme: ThemesType
}
type ActionType = ChangeThemeType;
export type initStateType = {
    theme: ThemesType
}

const CHANGE_THEME = "CHANGE_THEME";

const initState: initStateType = {
    theme: 'some'
};

export const themeReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                ...state, theme: action.theme
            };
        }
        default:
            return state;
    }
};

export const changeThemeAC = (theme: ThemesType): ChangeThemeType => ({type: CHANGE_THEME, theme }as const); // fix any