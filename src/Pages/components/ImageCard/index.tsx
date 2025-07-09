import React from "react";

interface ImageCardProps {
    imageUrl: string;
    alt: string;
}

const ImageCard = ({ imageUrl, alt }: ImageCardProps) => {
    return (
        <img src={imageUrl} alt={alt} style={{ width: "150px", height: "auto", objectFit: "contain", borderRadius: "10px" }} />

    )
}

export { ImageCard };