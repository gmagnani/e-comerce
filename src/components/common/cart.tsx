"use client"
import { useQuery } from "@tanstack/react-query";
import { ShoppingBasketIcon } from "lucide-react";
import Image from "next/image";

import { getCart } from "@/actions/get-cart";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

const Cart = () => {
    const { data: cart, isPending: cartIsPending } = useQuery({
        queryKey: ["cart"],
        queryFn: async () => getCart()
    })
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <ShoppingBasketIcon />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                </SheetHeader>
                <div>
                    {cartIsPending && <p>Carregando...</p>}
                    {cart?.items.map((item) => (
                        <div key={item.id}>
                            <Image
                                src={item.productVariant.imageUrl}
                                alt={item.productVariant.product.name}
                                width={100}
                                height={100}
                            />
                            <div>
                                <p>{item.productVariant.product.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default Cart;