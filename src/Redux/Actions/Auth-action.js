import { SHOW_LOADING, SHOW_ERROR, HIDDEN_ERROR, HIDDEN_LOADING, LOGOUT } from "../Types";

export const logoutAction = () => {
    return {
        type: LOGOUT
    }
}

export const showLoadingAction = () => {
    return {
        type: SHOW_LOADING
    }
}

export const hiddenLoadingAction = () => {
    return {
        type: HIDDEN_LOADING
    }
}

export const hiddenErrorAction = () => {
    return {
        type: HIDDEN_ERROR
    }
}

export const showErrorAction = () => {
    return {
        type: SHOW_ERROR
    }
}