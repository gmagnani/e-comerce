import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import Image from "next/image";

import { formatCentsToBRL } from "@/helpers/money";

import { Button } from "../ui/button";

interface CartItemProps {
    id: string;
    productName: string;
    productVariantName: string;
    productVariantImageUrl: string;
    productVariantPriceInCents: number;
    quantity: number;
}

const CartItem = ({ productName, productVariantName, productVariantImageUrl, productVariantPriceInCents, quantity }: CartItemProps) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src={productVariantImageUrl} alt={productVariantName} width={78} height={78} className="rounded-lg" />
                <div className="flex flex-col gap-1">
                    <p className="font-semibold text-sm">{productName}</p>
                    <p className="text-muted-foreground text-xs font-medium">{productVariantName}</p>
                    <div className="flex items-center w-[100px] p-1 border justify-between rounded-lg">
                        <Button className="h-4 w-4" variant="ghost" onClick={() => { }}>
                            <MinusIcon />
                        </Button>
                        <p className="font-semibold text-xs">{quantity}</p>

                        <Button className="h-4 w-4" variant="ghost" onClick={() => { }}>
                            <PlusIcon />
                        </Button>
                    </div>
                </div>

            </div>
            <div className="flex flex-col items-end justify-center gap-2">
                <Button variant="outline" size="icon">
                    <TrashIcon />
                </Button>
                <p className="text-sm font-semibold">{formatCentsToBRL(productVariantPriceInCents)}</p>
            </div>
        </div>
    );
}

export default CartItem;