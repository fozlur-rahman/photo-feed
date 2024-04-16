import Modal from "@/app/components/Modal";
import PhotoDetails from "@/app/components/PhotoDetails";
import React from "react";

const PhotoModal = ({ params: { lang, photoId } }) => {
    return (
        <Modal>
            <PhotoDetails lang={lang} id={photoId} />
        </Modal>
    );
};

export default PhotoModal;
