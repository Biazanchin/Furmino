import { z } from 'zod';

const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' })
    .refine(value => {
      // Verifica se todas as palavras começam com letra maiúscula
      const words = value.split(' ');
      return words.every(word => /^[A-Z]/.test(word));
    }, {
      message: 'All names must start with an uppercase letter'
    })
    .refine(value => /^[A-Za-z ]*$/.test(value), {
      message: 'Name must only contain letters'
    })
    .refine(value => value.trim().length > 0, {
      message: 'Name is required'
    }),
  email: z.string()
    .email({ message: 'Invalid email format' })
    .refine(value => value.trim().length > 0, {
      message: 'Email is required'
    }),
  subject: z.string().optional(),
  message: z.string()
    .min(10, { message: 'Message must be at least 10 characters long' })
    .refine(value => value.trim().length > 0, {
      message: 'Message is required'
    }), 
});

export { contactFormSchema };
