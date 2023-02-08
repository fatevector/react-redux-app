import React from 'react';
import ReactDOM from 'react-dom/client';

const createStore = (initialState) => {
  let state = initialState
  const getState = () => state
  return {getState}
}
const store = createStore([{id: 1, description: 'task 1', completed: false}])

const App = params => {
  console.log(store.getState());
  return <h1>App</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
