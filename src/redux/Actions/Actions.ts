import { INCREMENT, DECREMENT, DELETE } from "../../types/actions";


export const setIncrement = (data: number) => {
    return {
        type: INCREMENT,
        data: data
    };
};

export const setDecrement = (data: number) => {
    return {
        type: DECREMENT,
        data: data
    };
};

export const setDelete = (data: number) => {
    return {
        type: DELETE,
        data: data
    };
};