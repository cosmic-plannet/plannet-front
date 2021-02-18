import { all, fork } from "redux-saga/effects";
import { userSaga } from "./user";
// export const serverURL =
//   'https://api.dahaengback.shop';

export default function* rootSaga() {
    yield all([fork(userSaga)]);
}
