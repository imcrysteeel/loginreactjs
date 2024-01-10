import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import useModalStore from "@/store/useModalStore";
import ForgotPasswordForm from "../auth/forgot-password-form";

const ForgotPasswordModal = () => {
    const { modalState, modalKey, onClose } = useModalStore();

    const isOpen = modalState && modalKey === "forgot-password-modal"

    return (
        <Dialog open={isOpen} onOpenChange={onClose} >
            <DialogContent className="p-0 bg-transparent border-0 w-fit max-w-fit h-fit">
                <ForgotPasswordForm />
            </DialogContent>
        </Dialog>
    );
};

export default ForgotPasswordModal;
