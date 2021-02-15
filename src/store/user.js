import { createAction, handleActions } from "redux-actions";
import { createRequestAction } from "./createRequestAction";

export const [GETUSER, GETUSER_SUCCESS, GETUSER_FAIL] = createRequestAction("GETUSER");

export const getUser = createAction(GETUSER, (id) => ({ id }));

const initialState = {};

const user = handleActions(
    {
        [GETUSER_SUCCESS]: (state, { payload: user }) => ({
            ...state,
        }),
        [GETUSER_FAIL]: (state, { payload: error }) => ({
            ...state,
        }),
    },
    initialState
);

export default user;
