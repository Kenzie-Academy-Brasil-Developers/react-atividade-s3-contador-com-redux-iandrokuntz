import { createStore, combineReducers } from "redux";

import reducerCounter from "./modules/counter/reducer";
const reducers = combineReducers({ count: reducerCounter });

const store = createStore(reducers);

export default store;