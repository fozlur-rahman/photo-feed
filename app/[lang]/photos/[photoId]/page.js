import PhotoDetails from "@/app/components/PhotoDetails";
import React from "react";

const page = ({ params: { photoId, lang } }) => {
    return (
        <>
            <PhotoDetails id={photoId} lang={lang} />
        </>
    );
};

export default page;
