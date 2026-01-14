import React, { useState, useRef } from "react";
import { ImageType } from "../../../../../services/image_type/interfaces/image_type";
import { ImageRecord } from "../../../../../services/image-record/interfaces/image-record";
import { ImageGalleryCard } from "../ImageGalleryCard";
import { FadeWrapper } from "../../../FadeWrapper";
import { TextCard } from "../../../TextComponents";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import "./styles.css";

interface ImageTypeContentProps {
  selectedType: ImageType | null;
  imageRecords: ImageRecord[];
  loading: boolean;
}

const ImageTypeContent = ({
  selectedType,
  imageRecords,
  loading,
}: ImageTypeContentProps) => {
  const [zoomedImage, setZoomedImage] = useState<ImageRecord | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
    setZoomLevel(1);
  };

  if (!selectedType) {
    return (
      <div className="content-empty">
        <FadeWrapper>
          <div className="empty-state">
            <span className="empty-icon">📷</span>
            <h3 className="empty-title">Selecciona una categoría</h3>
            <p className="empty-text">
              Elige una categoría del menú para ver las imágenes disponibles
            </p>
          </div>
        </FadeWrapper>
      </div>
    );
  }

  return (
    <div className="image-type-content">
      {/* Banner Section */}
      <FadeWrapper>
        <div className="content-banner">
          {selectedType.image_url && (
            <img
              src={selectedType.image_url}
              alt={selectedType.name}
              className="banner-image"
            />
          )}
          <div className="banner-overlay">
            <h2 className="banner-title">{selectedType.name}</h2>
          </div>
        </div>
      </FadeWrapper>

      {/* Images Grid */}
      <div className="content-grid-wrapper">
        {loading ? (
          <div className="loading-state">
            <TextCard textAlign="center">Cargando imágenes...</TextCard>
          </div>
        ) : imageRecords.length === 0 ? (
          <div className="no-images-state">
            <FadeWrapper>
              <TextCard textAlign="center">
                No hay imágenes disponibles en esta categoría
              </TextCard>
            </FadeWrapper>
          </div>
        ) : (
          <div className="content-grid">
            {imageRecords.map((record) => (
              <ImageGalleryCard
                key={record.id}
                imageRecord={record}
                onImageClick={(img) => setZoomedImage(img)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Zoom Overlay */}
      {zoomedImage && (
        <div className="zoom-overlay" onClick={handleCloseZoom}>
          <div className="zoom-controls">
            <button
              className="zoom-control-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleZoomIn();
              }}
              title="Acercar"
            >
              <FaPlus />
            </button>
            <button
              className="zoom-control-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleZoomOut();
              }}
              title="Alejar"
            >
              <FaMinus />
            </button>
            <button
              className="zoom-control-btn close-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleCloseZoom();
              }}
              title="Cerrar"
            >
              <FaTimes />
            </button>
          </div>
          <div
            className="zoom-image-container"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              ref={imageRef}
              src={zoomedImage.image_url}
              alt={zoomedImage.name}
              className="zoom-image"
              style={{ transform: `scale(${zoomLevel})` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export { ImageTypeContent };
