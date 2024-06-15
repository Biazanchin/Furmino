import { INCREMENT, DECREMENT, DELETE, CounterActionTypes } from '../../types/actions'

interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0
};

export const CounterReducer = (state: CounterState = initialState, action: CounterActionTypes): CounterState => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            if (state.count > 0) {
                return {
                    ...state,
                    count: state.count - 1
                };
            } else {
                return state;
            }
        case DELETE:
            return {
                ...state,
                count: 0 
            };
        default:
            return state;
    }
};
