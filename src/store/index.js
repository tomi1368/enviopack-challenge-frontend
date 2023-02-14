"redux";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const composeWithDevTools =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

const store = (preloadedState) => {
  return {
    ...createStore(
      rootReducer(history),
      preloadedState,
      composeWithDevTools(
        applyMiddleware(routerMiddleware(history), sagaMiddleware)
      )
    ),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};

export default store;
