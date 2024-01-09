import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import useModalStore from "@/store/useModalStore";
import LoginForm from "../auth/login-form";

const LoginModal = () => {
    const { modalState, modalKey, onClose } = useModalStore();

    const isOpen = modalState && modalKey === "login-modal"

    return (
        <Dialog open={isOpen} onOpenChange={onClose} >
            <DialogContent className="p-0 bg-transparent border-0 w-fit max-w-fit h-fit">
                <LoginForm />
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal;
