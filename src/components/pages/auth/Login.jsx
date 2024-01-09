import React, { useState } from "react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import LoginImage from "@/assets/images/login-image.png";
import { FcGoogle } from "react-icons/fc";

import { NavLink } from "react-router-dom";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email("Must be a valid email address"),
    password: z.string().min(1, { message: "Please provide a password" }),
});

const LoginPage = () => {
    const [error, setError] = useState("");

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
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
                <h1 className="text-4xl font-semibold uppercase my-14">BALAIFINDER</h1>
                <Form {...form}>
                    <form
                        className="flex flex-col items-center w-full"
                        onSubmit={form.handleSubmit(handleOnSubmit)}
                    >
                        <div className="flex flex-col w-full space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                className="w-full border bg-[#F3F3F3] border-gray-600 rounded-full px-5 py-2 focus-visible:ring-0"
                                                placeholder="Enter your password here"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                className="w-full border bg-[#F3F3F3] border-gray-600 rounded-full px-5 py-2 focus-visible:ring-0"
                                                placeholder="Enter your password here"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                        <FormDescription className="flex justify-end">
                                            <NavLink className="self-end text-xs font-semibold text-blue-400">
                                                FORGOT PASSWORD?
                                            </NavLink>
                                        </FormDescription>
                                    </FormItem>
                                )}
                            />
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
                                <NavLink
                                    to="register"
                                    className="font-semibold"
                                >
                                    SIGN UP NOW
                                </NavLink>
                            </p>
                        </div>
                    </form>
                </Form>
            </div>
            <img src={LoginImage} className="w-1/2 h-full bg-cover" />
        </div>
    );
};

export default LoginPage;
