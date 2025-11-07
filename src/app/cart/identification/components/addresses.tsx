"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const addressFormSchema = z.object({
    email: z.email("Email inválido"),
    fullName: z.string().min(3, "Nome completo muito curto"),
    cpf: z.string().length(11, "CPF deve conter 11 dígitos").regex(/^\d+$/, "CPF deve conter apenas números"),
    phone: z.string().length(11, "Celular deve conter 11 dígitos").regex(/^\d+$/, "Celular deve conter apenas números"),
    zipCode: z.string().length(8, "CEP deve conter 8 dígitos").regex(/^\d+$/, "CEP deve conter apenas números"),
    address: z.string().min(3, "Endereço muito curto"),
    number: z.string().min(1, "Número é obrigatório"),
    complement: z.string().optional(),
    neighborhood: z.string().min(2, "Bairro muito curto"),
    city: z.string().min(2, "Cidade muito curta"),
    state: z.string().length(2, "Estado deve conter 2 caracteres"),
});

type AddressFormValues = z.infer<typeof addressFormSchema>;

const Addresses = () => {
    const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
    const form = useForm<AddressFormValues>({
        resolver: zodResolver(addressFormSchema),
        defaultValues: {
            email: "",
            fullName: "",
            cpf: "",
            phone: "",
            zipCode: "",
            address: "",
            number: "",
            complement: "",
            neighborhood: "",
            city: "",
            state: "",
        },
    });

    async function onSubmit(values: AddressFormValues) {
        console.log(values);
    }

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Identificação</CardTitle>
                </CardHeader>
                <CardContent>
                    <RadioGroup value={selectedAddress || ""} onValueChange={setSelectedAddress}>
                        <Card>
                            <CardContent>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="add_new" id="add_new" />
                                    <Label htmlFor="add_new">Adicionar novo endereço</Label>
                                </div>
                            </CardContent>
                        </Card>
                    </RadioGroup>

                    {selectedAddress === "add_new" && (
                        <Card className="mt-4">
                            <CardHeader>
                                <CardTitle>Novo Endereço</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid gap-6 md:grid-cols-2">
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Email</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Digite seu email" {...field} type="email" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="fullName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Nome Completo</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Digite seu nome completo" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="cpf"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>CPF</FormLabel>
                                                        <FormControl>
                                                            <PatternFormat
                                                                format="###.###.###-##"
                                                                mask="_"
                                                                value={field.value}
                                                                onValueChange={(values) => {
                                                                    field.onChange(values.value);
                                                                }}
                                                                customInput={Input}
                                                                placeholder="000.000.000-00"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="phone"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Celular</FormLabel>
                                                        <FormControl>
                                                            <PatternFormat
                                                                format="(##) #####-####"
                                                                mask="_"
                                                                value={field.value}
                                                                onValueChange={(values) => {
                                                                    field.onChange(values.value);
                                                                }}
                                                                customInput={Input}
                                                                placeholder="(00) 00000-0000"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="zipCode"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>CEP</FormLabel>
                                                        <FormControl>
                                                            <PatternFormat
                                                                format="#####-###"
                                                                mask="_"
                                                                value={field.value}
                                                                onValueChange={(values) => {
                                                                    field.onChange(values.value);
                                                                }}
                                                                customInput={Input}
                                                                placeholder="00000-000"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="address"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Endereço</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Digite o endereço" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="number"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Número</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Digite o número" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="complement"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Complemento</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Digite o complemento (opcional)" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="neighborhood"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Bairro</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Digite o bairro" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="city"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Cidade</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Digite a cidade" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="state"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Estado</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="UF"
                                                                value={field.value}
                                                                maxLength={2}
                                                                className="uppercase"
                                                                onChange={(e) => {
                                                                    field.onChange(e.target.value.toUpperCase());
                                                                }}
                                                                onBlur={field.onBlur}
                                                                name={field.name}
                                                                ref={field.ref}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <Button type="submit" className="w-full">
                                            Salvar Endereço
                                        </Button>
                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

export default Addresses;