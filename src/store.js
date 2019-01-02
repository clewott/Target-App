import { createStore } from "redux";
import { reducer } from "./reducers";

const makeStore = createStore(reducer);

export const store = makeStore;