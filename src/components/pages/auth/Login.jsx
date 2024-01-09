import React from "react";

import { FcGoogle } from "react-icons/fc";

import LoginImage from "@/assets/images/login-image.png";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="w-[60rem] bg-white rounded-3xl overflow-hidden flex">
            <div className="w-1/2 px-16 py-8 flex flex-col items-center justify-center">
                <h1 className="text-4xl uppercase my-14 font-semibold">
                    BALAIFINDER
                </h1>
                <button className="flex w-full border border-gray-600 bg-[#F3F3F3] rounded-full px-2 py-1 justify-center items-center gap-x-2 uppercase">
                    <FcGoogle className="h-8 w-8" /> continue with google
                </button>
                <div className="flex items-center my-4 w-4/5 gap-x-4 justify-center">
                    <div className="bg-gray-600 h-[1px] flex-1" />
                    or
                    <div className="bg-gray-600 h-[1px] flex-1" />
                </div>
                <div className="w-full flex flex-col space-y-4">
                    <input
                        placeholder="Enter your email here"
                        className="w-full border bg-[#F3F3F3] border-gray-600 rounded-full px-5 py-2"
                    />
                    <div className="relative w-full flex flex-col space-y-2">
                        <input
                            placeholder="Enter your password here"
                            className="w-full border bg-[#F3F3F3] border-gray-600 rounded-full px-5 py-2"
                        />
                        <NavLink className="text-blue-400 text-xs font-semibold self-end">
                            FORGOT PASSWORD?
                        </NavLink>
                    </div>
                </div>
                <div className="gap-y-4 flex flex-col mt-8 w-fit items-center">
                    <button className="flex w-full text-white bg-[#19CEEB] rounded-full px-4 py-2 justify-center items-center gap-x-2 uppercase">
                        Login
                    </button>
                    <p className="text-xs">
                        NOT A MEMBER?{" "}
                        <NavLink to="register" className="font-semibold">SIGN UP NOW</NavLink>
                    </p>
                </div>
            </div>
            <img src={LoginImage} className="bg-cover h-full w-1/2" />
        </div>
    );
};

export default LoginPage;
