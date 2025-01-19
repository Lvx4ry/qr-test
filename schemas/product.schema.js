import z from "zod";

const prodcutSchema = z.object({
  id: z.number().int().positive(),
  nombre: z.string(),
  marca: z.string(),
  precio: z.number().positive(),
  stock: z.number().int().positive(),
});

export const validateProduct = (input) => {
  const product = prodcutSchema.safeParse(input);
  return product;
};

export const partialValidateProduct = (input) => {
  const product = prodcutSchema.partial().safeParse(input);
  return product;
};
