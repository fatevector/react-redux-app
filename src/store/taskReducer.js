import { TASK_UPDATED } from "./actionTypes";

export const taskReducer = (state = [], action) => {
    switch (action.type) {
        case TASK_UPDATED:
            const newArray = [...state];
            const elementIndex = newArray.findIndex(
                el => el.id === action.payload.id
            );
            newArray[elementIndex] = {
                ...newArray[elementIndex],
                ...action.payload
            };
            return newArray;
        default:
            return state;
    }
};
