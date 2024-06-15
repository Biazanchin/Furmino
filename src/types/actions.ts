export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const DELETE = 'DELETE';

interface IncrementAction {
    type: typeof INCREMENT;
}

interface DecrementAction {
    type: typeof DECREMENT;
}

interface DeleteAction {
    type: typeof DELETE; 
}

export type CounterActionTypes = IncrementAction | DecrementAction | DeleteAction;
