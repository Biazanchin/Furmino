export const subscribeContactFormSuccess = (formData: any) => ({
  type: "SUBSCRIBE_CONTACT_FORM_SUCCESS",
  payload: formData,
});
export const subscribeContactFormError = () => ({
  type: "SUBSCRIBE_CONTACT_FORM_ERROR",
});
