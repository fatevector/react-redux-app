import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const taskReducer = (state, action) => {
    switch (action.type) {
        case "task/completed":
            const newArray = [...state];
            const elementIndex = newArray.findIndex(
                el => el.id === action.payload.id
            );
            newArray[elementIndex].completed = true;
            return newArray;
        default:
            break;
    }
};

const createStore = (reducer, initialState) => {
    let state = initialState;
    const listeners = [];
    const getState = () => [...state];
    const dispatch = action => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };
    const subscribe = listener => {
        listeners.push(listener);
    };
    return { getState, dispatch, subscribe };
};
const store = createStore(taskReducer, [
    { id: 1, description: "Task 1", completed: false },
    { id: 2, description: "Task 2", completed: false }
]);

const App = params => {
    const [state, setState] = useState(store.getState());

    useEffect(() => {
        store.subscribe(() => {
            setState(store.getState());
        });
    }, []);

    const completeTask = id => {
        store.dispatch({ type: "task/completed", payload: { id } });
    };

    return (
        <>
            <h1>App</h1>
            <ul>
                {state.map(el => (
                    <li key={el.id}>
                        <p>{el.description}</p>
                        <p>{`Completed: ${el.completed}`}</p>
                        <button onClick={() => completeTask(el.id)}>
                            Complete
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
