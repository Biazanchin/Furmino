export const subscribeEmailSuccess = (email: string) => ({
  type: "SUBSCRIBE_EMAIL_SUCCESS",
  payload: { email },
});

export const subscribeEmailError = () => ({
  type: "SUBSCRIBE_EMAIL_ERROR",
});
