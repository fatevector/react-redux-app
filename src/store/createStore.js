export const createStore = (reducer, initialState) => {
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
