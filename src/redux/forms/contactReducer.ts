interface ContactState {
  name: string;
  email: string;
  subject: string;
  message: string;
  subscriptionSuccess: boolean;
  subscriptionError: boolean;
}

const initialState: ContactState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  subscriptionSuccess: false,
  subscriptionError: false,
};

const ContactReducer = (state = initialState, action: any): ContactState => {
  switch (action.type) {
    case "SUBSCRIBE_CONTACT_FORM_SUCCESS":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        subject: action.payload.subject,
        message: action.payload.message,
        subscriptionSuccess: true,
        subscriptionError: false,
      };
    case "SUBSCRIBE_CONTACT_FORM_ERROR":
      return {
        ...state,
        subscriptionSuccess: false,
        subscriptionError: true,
      };
    default:
      return state;
  }
};

export default ContactReducer;
