import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false }
];

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        update(state, action) {
            const elementIndex = state.findIndex(
                el => el.id === action.payload.id
            );
            state[elementIndex] = {
                ...state[elementIndex],
                ...action.payload
            };
        },
        remove(state, action) {
            return state.filter(el => el.id !== action.payload.id);
        }
    }
});

const { actions, reducer: taskReducer } = taskSlice;
const { update, remove } = actions;

export const taskCompleted = id => update({ id, completed: true });

export const titleChanged = id => update({ id, title: `New title for ${id}` });

export const taskDeleted = id => remove({ id });

export default taskReducer;
