import {
    legacy_createStore as createStore,
    compose,
    applyMiddleware
} from "redux";
import { logger } from "./middleware/logger";
import { thunk } from "./middleware/thunk";
import taskReducer from "./task";

const middlewareEnhancer = applyMiddleware(logger, thunk);

const configureStore = () =>
    createStore(
        taskReducer,
        compose(
            middlewareEnhancer,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
export default configureStore;
