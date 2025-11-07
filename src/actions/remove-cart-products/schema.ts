import z from "zod";

export const removeCartProductsSchema = z.object({
  cartItemId: z.uuid(),
});