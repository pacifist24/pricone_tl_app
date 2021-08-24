import { configureStore /*, ThunkAction, Action*/ } from "@reduxjs/toolkit";

import tlReducer from "../ducks/tl";
import styleReducer from "../ducks/style";
import favsReducer from "../ducks/favs";

export function makeStore() {
  return configureStore({
    reducer: { tl: tlReducer, style: styleReducer, favs: favsReducer },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   AppState,
//   unknown,
//   Action<string>
// >

export default store;
