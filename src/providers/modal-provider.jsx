import React from "react";

import LoginModal from "@/components/modals/login-modal";
import RegisterModal from "@/components/modals/register-modal";
import ForgotPasswordModal from "@/components/modals/forgot-password";

const ModalProvider = () => {
    
    return (
        <>
            {/* Add nyo dito mga modal na madadagdag */}
            <LoginModal />
            <RegisterModal />
            <ForgotPasswordModal />
        </>
    );
};

export default ModalProvider;
