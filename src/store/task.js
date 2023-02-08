const TASK_UPDATED = "task/updated";
const TASK_DELETED = "task/deleted";

export const taskCompleted = id => {
    return {
        type: TASK_UPDATED,
        payload: { id, completed: true }
    };
};

export const titleChanged = id => {
    return {
        type: TASK_UPDATED,
        payload: { id, title: `New title for ${id}` }
    };
};

export const taskDeleted = id => {
    return {
        type: TASK_DELETED,
        payload: { id }
    };
};

const taskReducer = (state = [], action) => {
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
        case TASK_DELETED:
            return [...state].filter(el => el.id !== action.payload.id);
        default:
            return state;
    }
};

export default taskReducer;
