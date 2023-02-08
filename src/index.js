import React from 'react';
import ReactDOM from 'react-dom/client';

const taskReducer = (state, action) => {
    switch (action.type) {
    case 'task/completed':
        const newArray = [...state]
        const elementIndex = newArray.findIndex(el => el.id === action.payload.id)
        newArray[elementIndex].completed = true
        return newArray
    default:
        break;
    }
}

const createStore = (reducer, initialState) => {
    let state = initialState
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
    }
    return {getState, dispatch}
}
const store = createStore(taskReducer, [{id: 1, description: 'task 1', completed: false}])

const App = params => {
    const completeTask = () => {
        store.dispatch({type: 'task/completed', payload: {id: 1}})
        console.log(store.getState());
    }
    console.log(store.getState());
    return <><h1>App</h1><button onClick={completeTask}>Complete</button></>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
