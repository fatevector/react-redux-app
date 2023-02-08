import { createAction } from "@reduxjs/toolkit";

const update = createAction("task/updated");
const remove = createAction("task/removed");

export const taskCompleted = id => update({ id, completed: true });

export const titleChanged = id => update({ id, title: `New title for ${id}` });

export const taskDeleted = id => remove({ id });

const taskReducer = (state = [], action) => {
    switch (action.type) {
        case update.type:
            const newArray = [...state];
            const elementIndex = newArray.findIndex(
                el => el.id === action.payload.id
            );
            newArray[elementIndex] = {
                ...newArray[elementIndex],
                ...action.payload
            };
            return newArray;
        case remove.type:
            return state.filter(el => el.id !== action.payload.id);
        default:
            return state;
    }
};

export default taskReducer;
