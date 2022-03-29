import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "../localStorage";
import filterReduser from "../store/filter/sliceFilter";
import todoReduser from "../store/todo/sliceTodo";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    todo: todoReduser,
    filter: filterReduser,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
