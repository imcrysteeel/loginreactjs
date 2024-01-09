import React, { useState } from "react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormControl,
    FormField,
    FormLabel,
    FormItem,
    FormMessage,
} from "@/components/ui/form";

import BalaifinderLogo from "@/assets/Logo.svg";
import LoginImage from "@/assets/images/login-image.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    firstname: z.string().min(1, { message: "Email is required" }),
    lastname: z.string().min(1, { message: "Last name is required" }),
    address: z.string().min(1, { message: "Address is required" }),
    contact: z.string().min(11, { message: "Contact Number is required" }),
    age: z.number(),
});

const RegisterPage = () => {
    const [error, setError] = useState("");

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "", // Kagaya nito etc
            address: "",
            // ADD MO PA DITO MGA NEED NA FIELD pero yung value empty string lang ""
        },
    });

    const loading = form.formState.isSubmitting;

    const handleOnSubmit = (values) => {
        try {
            setError("");
            console.log("User credentials here -> ", values);
            // TODO: Login Logic here
        } catch (e) {
            setError("Something went wrong");
        }
    };

    return (
        <div className="w-[60rem] bg-white rounded-3xl overflow-hidden flex">
            <div className="flex flex-col items-center justify-center w-1/2 px-16 py-8">
                {/* <img src={BalaifinderLogo} className="w-64 h-64 bg-fit" /> */}
                <h1 className="text-4xl font-semibold uppercase mb-5">
                    BALAIFINDER
                </h1>
                <p>Account Creation</p>
                <Form {...form}>
                    <form
                        className="flex flex-col items-center w-full"
                        onSubmit={form.handleSubmit(handleOnSubmit)}
                    >
                        <div className="flex flex-col w-full space-y-4">
                            <FormField
                                control={form.control}
                                name="firstname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                className="w-full border bg-[#F3F3F3] border-gray-600 rounded-full px-5 py-2 focus-visible:ring-0"
                                                placeholder=""
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                className="w-full border bg-[#F3F3F3] border-gray-600 rounded-full px-5 py-2 focus-visible:ring-0"
                                                placeholder=""
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="address"
                                // THEN NEED MO PALITAN TONG NAME DAPAT SAME SA MAY TAAS NA FORMVALUES
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Address</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                className="w-full border bg-[#F3F3F3] border-gray-600 rounded-full px-5 py-2 focus-visible:ring-0"
                                                placeholder=""
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/*  TAS YAN COPY MO LANG PARA LUMABAS YUNG FIELD */}
                        </div>
                        <p className="my-4 text-xs text-destructive">{error}</p>
                        <div className="flex flex-col items-center mt-2 gap-y-4 w-fit">
                            <Button
                                type="submit"
                                disabled={loading}
                                className="flex w-full text-white bg-[#19CEEB] hover:bg-[#19d3ebca] rounded-full px-4 py-2 justify-center items-center gap-x-2 uppercase"
                            >
                                Login
                            </Button>
                            <p className="text-xs">
                                NOT A MEMBER?{" "}
                                <span
                                    onClick={() => onOpen("register-modal")}
                                    className="font-semibold cursor-pointer"
                                >
                                    SIGN UP NOW
                                </span>
                            </p>
                        </div>
                    </form>
                </Form>
            </div>
            <img src={LoginImage} className="w-1/2 h-full bg-cover" />
        </div>
    );
};

export default RegisterPage;
