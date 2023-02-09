import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
    titleChanged,
    taskDeleted,
    completeTask,
    getTasks
} from "./store/task";
import createStore from "./store/store";
import { Provider, useSelector, useDispatch } from "react-redux";

const store = createStore();

const App = params => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks());
    }, []);

    const changeTitle = taskId => {
        dispatch(titleChanged(taskId));
    };

    const deleteTask = taskId => {
        dispatch(taskDeleted(taskId));
    };

    return (
        <>
            <h1>App</h1>
            <ul>
                {state.map(el => (
                    <li key={el.id}>
                        <p>{el.title}</p>
                        <p>{`Completed: ${el.completed}`}</p>
                        <button onClick={() => dispatch(completeTask(el.id))}>
                            Complete
                        </button>
                        <button onClick={() => changeTitle(el.id)}>
                            Change title
                        </button>
                        <button onClick={() => deleteTask(el.id)}>
                            Delete
                        </button>
                        <hr />
                    </li>
                ))}
            </ul>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
