import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

// import * as Actions from "./actions/index";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

// Actions.verifyAuth();

window.store = store;

export default store;
