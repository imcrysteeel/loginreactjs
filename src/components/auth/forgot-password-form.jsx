import React, { useState } from "react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import LoginImage from "@/assets/images/login-image.png";
import BalaifinderLogo from "@/assets/Logo.svg"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useModalStore from "@/store/useModalStore";

const formSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email("Must be a valid email address")
});

const ForgotPasswordForm = () => {
    const { onOpen } = useModalStore();
    const [error, setError] = useState("");

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""
        },
    });

    const loading = form.formState.isSubmitting;

    const handleOnSendRecoveryCode = (values) => {
        try {
            setError("");
            console.log("User credentials here -> ", values);
            // TODO: Send Recovery Code Logic here
        } catch (e) {
            setError("Something went wrong");
        }
    };

    return (
        <div className="w-[60rem] bg-white rounded-3xl overflow-hidden flex">
            <div className="flex flex-col items-center justify-center w-1/2 px-16 py-8">
                <img src={BalaifinderLogo} className="w-64 h-64 bg-fit"/>
                <h1 className="text-4xl font-semibold uppercase mb-14">BALAIFINDER</h1>
                <p className="mb-6 text-sm text-center">Enter your email address & we will send your code</p>
                <Form {...form}>
                    <form
                        className="flex flex-col items-center w-full"
                        onSubmit={form.handleSubmit(handleOnSendRecoveryCode)}
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
                                                placeholder="Enter your account email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
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
                                Send
                            </Button>
                            <p className="text-xs">
                                Remember you password?{" "}
                                <span
                                    onClick={()=>onOpen("login-modal")}
                                    className="font-semibold cursor-pointer"
                                >
                                    SIGN IN NOW
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

export default ForgotPasswordForm;
