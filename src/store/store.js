import { legacy_createStore as createStore } from "redux";
import taskReducer from "./task";

const configureStore = () => createStore(taskReducer);
export default configureStore;
