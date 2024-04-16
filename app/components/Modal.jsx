"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
    const dialogRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, []);

    const onCloseModal = () => {
        dialogRef.current.close();
        router.back();
    };

    return createPortal(
        <dialog
            ref={dialogRef}
            className="shadow-teal-700 shadow-md border border-teal-600 flex p-6 rounded-md"
        >
            {children}

            <span
                onClick={onCloseModal}
                className="text-2xl border rounded-full px-3 mb-0 absolute top-0 right-0 h-10 cursor-pointer"
            >
                X
            </span>
        </dialog>,
        document.getElementById("portal-root-id")
    );
};

export default Modal;
