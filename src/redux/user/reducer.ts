interface UserState {
    email: string;
    subscriptionSuccess: boolean;
    subscriptionError: boolean;
}

const initialState: UserState = {
    email: '',
    subscriptionSuccess: false,
    subscriptionError: false,
};

const userReducer = (state = initialState, action: any): UserState => {
    switch (action.type) {
        case 'SUBSCRIBE_EMAIL_SUCCESS':
            return {
                ...state,
                subscriptionSuccess: true,
                subscriptionError: false,
            };
        case 'SUBSCRIBE_EMAIL_ERROR':
            return {
                ...state,
                subscriptionSuccess: false,
                subscriptionError: true,
            };
        default:
            return state;
    }
};

export default userReducer;