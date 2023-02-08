import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import * as actions from "./store/actionTypes";
import { createStore } from "./store/createStore";
import { taskReducer } from "./store/taskReducer";

const initialState = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false }
];

const store = createStore(taskReducer, initialState);

const App = params => {
    const [state, setState] = useState(store.getState());

    useEffect(() => {
        store.subscribe(() => {
            setState(store.getState());
        });
    }, []);

    const completeTask = id => {
        store.dispatch({
            type: actions.TASK_UPDATED,
            payload: { id, completed: true }
        });
    };

    const changeTitle = id => {
        store.dispatch({
            type: actions.TASK_UPDATED,
            payload: { id, title: `New title for ${id}` }
        });
    };

    return (
        <>
            <h1>App</h1>
            <ul>
                {state.map(el => (
                    <li key={el.id}>
                        <p>{el.title}</p>
                        <p>{`Completed: ${el.completed}`}</p>
                        <button onClick={() => completeTask(el.id)}>
                            Complete
                        </button>
                        <button onClick={() => changeTitle(el.id)}>
                            Change title
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
        <App />
    </React.StrictMode>
);
