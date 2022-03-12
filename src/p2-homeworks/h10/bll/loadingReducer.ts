import preloader from "../../../common/Preloader.svg";

export type StateLoadingReducerType = {
    preloader: string
    showLoader: boolean
};
export type LoadingAC = ReturnType<typeof loadingAC>;
export type ActionType = LoadingAC;
const initState: StateLoadingReducerType = {
    preloader: preloader,
    showLoader: false,
}

const LOADER = "LOADER";

export const loadingReducer = (state = initState, action: ActionType): StateLoadingReducerType => { // fix any
    switch (action.type) {
        case LOADER: {

            return {...state, showLoader: action.show}
        }
        default:
            return state
    }
}

export const loadingAC = (show: boolean) => (
    {type: LOADER, show}as const
)