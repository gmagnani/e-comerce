import { useMutation, useQueryClient } from "@tanstack/react-query";

import { removeCartProducts } from "@/actions/remove-cart-products";

import { getUseCartQueryKey } from "../queries/use-cart";

export const getRemoveProductFromCartMutationKey = (cartItemId: string) => [
  "remove-cart-products",
  cartItemId,
] as const;

export const useRemoveProductFromCart = (cartItemId: string) => {   
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: getRemoveProductFromCartMutationKey(cartItemId),
    mutationFn: () => removeCartProducts({ cartItemId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getUseCartQueryKey() });
    },
  });
};
