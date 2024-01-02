import { createStore } from "redux";
import todoReducer from "./reducers.js";

const store = createStore(todoReducer);

export default store;
