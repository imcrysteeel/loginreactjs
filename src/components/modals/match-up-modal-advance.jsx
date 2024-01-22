import React from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

import BalaiFinderLogo from "@/assets/Logo.svg"
import { Link } from "react-router-dom";
import AdvanceMatchingPrefFrom from "../match-up/forms/advance-matching-preference-form";

const MatchUpModalAdvance = ({ isOpen = false, onClose }) => {
    // const { modalState, modalKey, onClose } = useModalStore();

    // const isOpen = modalState && modalKey === "match-up";

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-h-[98vh] thin-scroll overflow-x-hidden overflow-y-scroll border-0 shadow-lg max-w-7xl rounded-3xl">
                <div className="px-16 py-8 space-y-8 bg-white ">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center mb-12 gap-x-2">
                            <img src={BalaiFinderLogo} className="h-24" />
                            <Link to={"/"} className="text-4xl font-medium">BALAIFINDER</Link>
                        </div>
                        <h1 className="text-4xl font-medium uppercase">
                            PLEASE SELECT YOUR ADVANCE PREFERENCE
                        </h1>
                    </div>
                    <AdvanceMatchingPrefFrom />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default MatchUpModalAdvance;
