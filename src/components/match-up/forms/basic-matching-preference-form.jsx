import React from "react";
import z from "zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../ui/form";
import { Button } from "../../ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select";

const BasicMatchingPrefForm = () => {
    const form = useForm({
        // Create your zod schema & Add nyo nlng here yung zod resolver just like in login-form.jsx
        defaultValues: {
            price: "",
            location: "",
            numberOfBedrooms: "",
            propertySize: "",
            typeOfProperty: "",
            typeOfNeighborhood: "",
        },
    });

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit((value) => {
                    // TODO HERE ...
                    console.log(value);
                })}
                className="w-full pb-16"
            >
                <div className="grid grid-cols-2 gap-y-8 gap-x-24">
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem className="flex flex-col ">
                                <FormLabel className="w-full text-center uppercase">
                                    Price
                                </FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="rounded-full border-sky-500 border-[3px]">
                                            <SelectValue
                                                placeholder=""
                                                className=""
                                            />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="A">A</SelectItem>
                                            <SelectItem value="B">B</SelectItem>
                                            <SelectItem value="C">C</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem className="flex flex-col ">
                                <FormLabel className="w-full text-center uppercase">
                                    Location
                                </FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="rounded-full border-sky-500 border-[3px]">
                                            <SelectValue placeholder="" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="A">A</SelectItem>
                                            <SelectItem value="B">B</SelectItem>
                                            <SelectItem value="C">C</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="typeOfProperty"
                        render={({ field }) => (
                            <FormItem className="flex flex-col ">
                                <FormLabel className="w-full text-center uppercase">
                                    type of property
                                </FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="rounded-full border-sky-500 border-[3px]">
                                            <SelectValue placeholder="" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="A">A</SelectItem>
                                            <SelectItem value="B">B</SelectItem>
                                            <SelectItem value="C">C</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </form>
        </Form>
    );
};

export default BasicMatchingPrefForm;
