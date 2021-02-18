import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "../store/user";
import { serverURL } from "./index";

function* getUserSaga(action) {
    console.log(action);
    try {
        yield put({
            type: LOGIN_SUCCESS,
            payload: action.payload.id,
        });
    } catch (e) {
        yield put({
            type: LOGIN_FAIL,
            payload: e,
            error: true,
        });
    }
}

export function* userSaga() {
    yield takeLatest(LOGIN, getUserSaga);
}
