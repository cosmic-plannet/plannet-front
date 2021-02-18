import { createAction, handleActions } from "redux-actions";
import { createRequestAction } from "./createRequestAction";

export const [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL] = createRequestAction("LOGIN");

export const login = createAction(LOGIN, (id) => ({ id }));

const initialState = {
    username: "",
};

const user = handleActions(
    {
        [LOGIN_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            username: user,
        }),
        [LOGIN_FAIL]: (state, { payload: error }) => ({
            ...state,
        }),
    },
    initialState
);

export default user;
