import React from "react";
import { ImageType } from "../../../../../services/image_type/interfaces/image_type";
import { FadeWrapper } from "../../../FadeWrapper";
import "./styles.css";

interface ImageTypeSidebarProps {
  imageTypes: ImageType[];
  selectedType: ImageType | null;
  onSelectType: (type: ImageType) => void;
}

const ImageTypeSidebar = ({
  imageTypes,
  selectedType,
  onSelectType,
}: ImageTypeSidebarProps) => {
  return (
    <div className="image-type-sidebar">
      <div className="sidebar-header">
        <h3 className="sidebar-title">Categorías</h3>
      </div>
      <nav className="sidebar-nav">
        {imageTypes.map((type, index) => (
          <FadeWrapper key={type.id} delay={100 * (index + 1)}>
            <button
              className={`sidebar-item ${
                selectedType?.id === type.id ? "active" : ""
              }`}
              onClick={() => onSelectType(type)}
            >
              <span className="sidebar-item-indicator" />
              <span className="sidebar-item-text">{type.name}</span>
            </button>
          </FadeWrapper>
        ))}
      </nav>
    </div>
  );
};

export { ImageTypeSidebar };
