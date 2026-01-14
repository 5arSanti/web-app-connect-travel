import React, { useState } from "react";
import { ImageRecord } from "../../../../../services/image-record/interfaces/image-record";
import { FadeWrapper } from "../../../FadeWrapper";
import "./styles.css";

interface ImageGalleryCardProps {
  imageRecord: ImageRecord;
  onImageClick?: (imageRecord: ImageRecord) => void;
}

const ImageGalleryCard = ({
  imageRecord,
  onImageClick,
}: ImageGalleryCardProps) => {
  return (
    // <FadeWrapper delay={200} className="gallery-card-wrapper">
    <div className="gallery-card" onClick={() => onImageClick?.(imageRecord)}>
      <div className="gallery-card-image-container">
        <img
          src={imageRecord.image_url}
          alt={imageRecord.name}
          className="gallery-card-image"
        />
        <div className="gallery-card-overlay">
          <span className="gallery-card-zoom-icon">🔍</span>
        </div>
      </div>
    </div>
    // </FadeWrapper>
  );
};

export { ImageGalleryCard };
