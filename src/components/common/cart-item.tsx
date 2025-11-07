
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

import { formatCentsToBRL } from "@/helpers/money";
import { useDecreaseCartProductQuantity } from "@/hooks/mutations/use-decrease-cart-product-quantity";
import { useIncreaseCartProductQuantity } from "@/hooks/mutations/use-increase-cart-product-quantity";
import { useRemoveProductFromCart } from "@/hooks/mutations/use-remove-product-from-cart";

import { Button } from "../ui/button";

interface CartItemProps {
    id: string;
    productVariantId: string;
    productName: string;
    productVariantName: string;
    productVariantImageUrl: string;
    productVariantPriceInCents: number;
    quantity: number;
}

const CartItem = ({ id, productVariantId, productName, productVariantName, productVariantImageUrl, productVariantPriceInCents, quantity }: CartItemProps) => {
    const removeProductFromCartMutation = useRemoveProductFromCart(id);
    const decreaseCartProductQuantityMutation = useDecreaseCartProductQuantity(id);
    const increaseCartProductQuantityMutation = useIncreaseCartProductQuantity(productVariantId);
    const handleDecreaseCartProductQuantityClick = () => {
        decreaseCartProductQuantityMutation.mutate(undefined, {
            onSuccess: () => {
                toast.success("Quantidade do produto diminuída");
            },
            onError: () => {
                toast.error("Erro ao diminuir quantidade do produto");
            }
        });
    };
    const handleIncrementCartProductQuantityClick = () => {
        increaseCartProductQuantityMutation.mutate(undefined, {
            onSuccess: () => {
                toast.success("Quantidade do produto aumentada");
            },
            onError: () => {
                toast.error("Erro ao aumentar quantidade do produto");
            }
        });
    };
    const handleDeleteClick = () => {
        removeProductFromCartMutation.mutate(undefined, {
            onSuccess: () => {
                toast.success("Produto removido do carrinho");
            },
            onError: () => {
                toast.error("Erro ao remover produto do carrinho");
            }
        });
    };
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src={productVariantImageUrl} alt={productVariantName} width={78} height={78} className="rounded-lg" />
                <div className="flex flex-col gap-1">
                    <p className="font-semibold text-sm">{productName}</p>
                    <p className="text-muted-foreground text-xs font-medium">{productVariantName}</p>
                    <div className="flex items-center w-[100px] p-1 border justify-between rounded-lg">
                        <Button className="h-4 w-4" variant="ghost" onClick={handleDecreaseCartProductQuantityClick}>
                            <MinusIcon />
                        </Button>
                        <p className="font-semibold text-xs">{quantity}</p>

                        <Button className="h-4 w-4" variant="ghost" onClick={handleIncrementCartProductQuantityClick}>
                            <PlusIcon />
                        </Button>
                    </div>
                </div>

            </div>
            <div className="flex flex-col items-end justify-center gap-2">
                <Button variant="outline" size="icon" onClick={handleDeleteClick}>
                    <TrashIcon />
                </Button>
                <p className="text-sm font-semibold">{formatCentsToBRL(productVariantPriceInCents)}</p>
            </div>
        </div>
    );
}

export default CartItem;