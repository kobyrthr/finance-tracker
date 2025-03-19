import { z } from 'zod';

const addressSchema = z.object({
  street: z.string().min(1, 'is required'),
  city: z.string().min(1, 'is required'),
  postCode: z.string().min(1, 'is required'),
  country: z.string().min(1, 'is required'),
});

export const formSchema = z
  .object({
    id: z.string().optional(),
    clientName: z.string().min(1, 'is required'),
    clientEmail: z.string().email('is invalid'),
    senderAddress: addressSchema,
    clientAddress: addressSchema,
    paymentDue: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'is invalid',
    }),
    paymentTerms: z.coerce.number().int().min(1, 'is required'),
    description: z.string().min(1, 'is required'),
    items: z.array(
      z
        .object({
          name: z.string().min(1, 'is required'),
          quantity: z.number(),
          price: z.number().min(1, 'is required'),
          total: z.coerce.number().optional(),
        })
        .transform((data) => ({ ...data, total: data.price * data.quantity }))
    ),
    total: z.coerce.number(),
    status: z.string(),
  })
  .transform((data) => ({
    ...data,
    total: data.items.reduce((acc, item) => acc + item.total, 0),
  }));
