"use client";
import React from "react";
import submitIcon from "../../../public/submit_icon.svg";
import Image from "next/image";

import { useRouter } from "next/navigation";

interface SubmitModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SubmitModal: React.FC<SubmitModalProps> = ({ isOpen, onClose }) => {
    const router = useRouter();
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with blur */}
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* User's Styled Modal Content */}
            <div className="relative bg-white rounded-xl flex flex-col items-center justify-center pt-14 pb-8 px-6 max-w-sm w-full shadow-xl animate-in fade-in zoom-in duration-300">
                <div className="rounded-md mb-6">
                    <Image src={submitIcon} width={100} height={100} alt="submiticon" />
                </div>

                <div className="flex flex-col gap-4 items-center justify-center mb-8">
                    <p className="text-xl font-bold text-center text-[#1E293B]">Submission received</p>
                    <p className="text-sm text-[#64748B] text-center leading-relaxed">
                        Please allow 24 - 48 hours for your report to be prepared. You’ll be
                        redirected to your profile shortly.
                    </p>
                </div>

                <button
                    onClick={() => router.push("/my_claims")}
                    className="w-full py-3 bg-[#2563EB] text-white font-semibold rounded-[12px] hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-100"
                >
                    Go to my claims
                </button>
            </div>
        </div>
    );
};

export default SubmitModal;
