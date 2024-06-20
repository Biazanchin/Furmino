export const subscribeFormSuccess = (formData: any) => ({
  type: "SUBSCRIBE_FORM_SUCCESS",
  payload: formData,
});

export const subscribeFormError = () => ({
  type: "SUBSCRIBE_FORM_ERROR",
});
