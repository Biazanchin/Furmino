interface CheckoutState {
  firstName: string;
  lastName: string;
  companyName?: string;
  zipCode: number;
  country: string;
  streetAddress: string;
  city: string;
  province: string;
  addOnAddress?: string;
  email: string;
  addInformation?: string;
  subscriptionSuccess: boolean;
  subscriptionError: boolean;
}

const initialState: CheckoutState = {
  firstName: "",
  lastName: "",
  companyName: "",
  zipCode: 0,
  country: "",
  streetAddress: "",
  city: "",
  province: "",
  addOnAddress: "",
  email: "",
  addInformation: "",
  subscriptionSuccess: false,
  subscriptionError: false,
};

const CheckoutReducer = (state = initialState, action: any): CheckoutState => {
  switch (action.type) {
    case "SUBSCRIBE_FORM_SUCCESS":
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        companyName: action.payload.companyName,
        zipCode: action.payload.zipCode,
        country: action.payload.country,
        streetAddress: action.payload.streetAddress,
        city: action.payload.city,
        province: action.payload.province,
        addOnAddress: action.payload.addOnAddress,
        email: action.payload.email,
        addInformation: action.payload.addInformation,
        subscriptionSuccess: true,
        subscriptionError: false,
      };
    case "SUBSCRIBE_FORM_ERROR":
      return {
        ...state,
        subscriptionError: true,
      };
    default:
      return state;
  }
};

export default CheckoutReducer;
