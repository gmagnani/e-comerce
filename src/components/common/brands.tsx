"use client"

import Image from "next/image";

import { Button } from "../ui/button";


interface BrandsProps {
    title: string;

}

const Brands = ({ title }: BrandsProps) => {

    return (
        <div className="space-y-6">
            <h3 className="font-semibold px-5">{title}</h3>
            <div className="px-5 flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                <div className="items-center text-center">
                    <Button variant="outline" size="icon" className="size-20 rounded-3xl" >
                        <Image src="/nike.svg" alt="Nike" width={32} height={32} />
                    </Button>
                    <h4 className="font-semibold text-sm ">Nike</h4>
                </div>
                <div className="items-center text-center">
                    <Button variant="outline" size="icon" className="size-20 rounded-3xl" >
                        <Image src="/adidas.svg" alt="Nike" width={32} height={32} />
                    </Button>
                    <h4 className="font-semibold text-sm ">Adidas</h4>
                </div>
                <div className="items-center text-center">
                    <Button variant="outline" size="icon" className="size-20 rounded-3xl" >
                        <Image src="/puma.svg" alt="Nike" width={32} height={32} />
                    </Button>
                    <h4 className="font-semibold text-sm ">Puma</h4>
                </div>
                <div className="items-center text-center">
                    <Button variant="outline" size="icon" className="size-20 rounded-3xl" >
                        <Image src="/newBalance.svg" alt="Nike" width={32} height={32} />
                    </Button>
                    <h4 className="font-semibold text-sm ">New Balance</h4>
                </div>
            </div>
        </div>
    );
}

export default Brands;