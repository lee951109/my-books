import { all } from "redux-saga/effects";
import { authSaga } from "./auth";

/* Generator funtion(function*)란? 
  중간에 원하는 부분에서 멈추었다가, 
  그 부분부터 다시 실행할 수 있는 능력을 가진 함수..!
  arrow function이랑 같이 사용 못함.
*/
export default function* rootSaga() {
  yield all([authSaga()]);
}
