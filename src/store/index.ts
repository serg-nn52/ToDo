import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReduser";
import { loadState, saveState } from "../localStorage";

export const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware())
  );

  store.subscribe(() => {
    saveState(store.getState());
  });
  return store;
};
