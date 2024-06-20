import { z } from "zod";

const checkoutFormSchema = z.object({
  firstName: z
    .string()
    .min(3, "First Name must be at least 3 characters long")
    .regex(/^[A-Z]/, "First Name must start with a upper letter")
    .min(1, "First Name is required"),
  lastName: z
    .string()
    .min(3, "Last Name must be at least 3 characters long")
    .regex(/^[A-Z]/, "Last Name must start with a upper letter")
    .min(1, "Last Name is required"),
  zipCode: z
    .string()
    .regex(/^\d{8}$/, "ZIP Code must contain only numbers")
    .length(8, "ZIP Code must be exactly 8 digits")
    .min(1, "ZIP Code is required"),
  country: z.string().min(1, "Country is required"),
  streetAddress: z.string().min(1, "Street Address is required"),
  city: z.string().min(1, "City is required"),
  province: z.string().min(1, "Province is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
});

export default checkoutFormSchema;
