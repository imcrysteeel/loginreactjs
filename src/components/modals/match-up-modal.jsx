import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import BalaiFinderLogo from "@/assets/Logo.svg"
import BasicMatchingPrefForm from "../match-up/forms/basic-matching-preference-form";
import { Link } from "react-router-dom";

const MatchUpModal = ({ isOpen = false, onClose, onOpenAdvancePref }) => {
    // const { modalState, modalKey, onClose } = useModalStore();

    // const isOpen = modalState && modalKey === "match-up";

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-6xl border-0 shadow-lg rounded-3xl">
                <div className="px-16 py-8 space-y-8 bg-white ">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center mb-12 gap-x-2">
                            <img src={BalaiFinderLogo} className="h-24" />
                            <Link to={"/"} className="text-4xl font-medium">BALAIFINDER</Link>
                        </div>
                        <h1 className="text-4xl font-medium uppercase">
                            PLEASE SELECT YOUR PREFERENCES
                        </h1>
                    </div>
                    <BasicMatchingPrefForm />
                    <p className="text-center">Want to set your personalized preferences for batch match? <span onClick={()=> onOpenAdvancePref(true)} className="font-semibold cursor-pointer">click Advance Preferences</span></p>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default MatchUpModal;
