import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./modules/reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./modules/rootSaga";

const create = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  //saga를 사용해서 비동기를 좀 더 편리하게 사용한다.
  sagaMiddleware.run(rootSaga);

  return store;
};

export default create;
