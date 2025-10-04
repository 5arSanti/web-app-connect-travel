import React from "react";
import { WrapperContainer2 } from "../../../WrapperContainers";
import { ImageRecord } from "../../../../../services/image-record/interfaces/image-record";
import { FadeWrapper } from "../../../FadeWrapper";

interface ImageRecordCardProps {
  currentTravelWeek: ImageRecord;
  onHoverChange?: (hover: boolean) => void;
  onImageClick?: () => void;
}

const ImageRecordCard = ({
  currentTravelWeek,
  onHoverChange,
  onImageClick,
}: ImageRecordCardProps) => {
  return (
    <FadeWrapper delay={300} className="image-record-card">
      <WrapperContainer2
        padding={0}
        justifyContent="center"
        alignItems="center"
      >
        <WrapperContainer2
          padding={0}
          justifyContent="center"
          alignItems="center"
        >
          <div
            className="image-wrapper"
            onMouseEnter={() => onHoverChange?.(true)}
            onMouseLeave={() => onHoverChange?.(false)}
            onClick={onImageClick}
          >
            <img
              src={currentTravelWeek?.image_url}
              alt={currentTravelWeek?.name}
              className="travel-week-image fade-in"
            />
          </div>
        </WrapperContainer2>
      </WrapperContainer2>
    </FadeWrapper>
  );
};

export { ImageRecordCard };
