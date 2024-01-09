import React from "react";

import LoginModal from "@/components/modals/login-modal";
import RegisterModal from "@/components/modals/register-modal";

const ModalProvider = () => {
    
    return (
        <>
            <LoginModal />
            <RegisterModal />
        </>
    );
};

export default ModalProvider;
