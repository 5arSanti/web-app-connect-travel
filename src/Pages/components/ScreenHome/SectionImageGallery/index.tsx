import React, { useState, useEffect } from "react";
import { imageTypeService } from "../../../../services/image_type/image_type.service";
import { imageRecordService } from "../../../../services/image-record/image-record.service";
import { ImageType } from "../../../../services/image_type/interfaces/image_type";
import { ImageRecord } from "../../../../services/image-record/interfaces/image-record";
import { ImageTypeSidebar } from "./ImageTypeSidebar";
import { ImageTypeContent } from "./ImageTypeContent";
import { SectionWrapper } from "../../SectionWrapper";
import { FadeWrapper } from "../../FadeWrapper";
import { Title } from "../../Title";
import "./styles.css";
import { WrapperContainer2 } from "../../WrapperContainers";

const SectionImageGallery = () => {
  const [imageTypes, setImageTypes] = useState<ImageType[]>([]);
  const [selectedType, setSelectedType] = useState<ImageType | null>(null);
  const [imageRecords, setImageRecords] = useState<ImageRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchImageTypes();
  }, []);

  useEffect(() => {
    if (selectedType) {
      fetchImageRecords(selectedType.id);
    }
  }, [selectedType]);

  const fetchImageTypes = async () => {
    try {
      setInitialLoading(true);
      const types = await imageTypeService.getImageTypes();
      setImageTypes(types);
      if (types.length > 0) {
        setSelectedType(types[0]);
      }
    } catch (error) {
      console.error("Error loading image types:", error);
    } finally {
      setInitialLoading(false);
    }
  };

  const fetchImageRecords = async (typeId: string) => {
    try {
      setLoading(true);
      const records = await imageRecordService.getActiveImageRecords([typeId]);
      setImageRecords(records);
    } catch (error) {
      console.error("Error loading image records:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectType = (type: ImageType) => {
    setSelectedType(type);
  };

  if (initialLoading) {
    return null;
  }

  if (imageTypes.length === 0) {
    return null;
  }

  return (
    <SectionWrapper
      id="galeria"
      padding={60}
      innerPadding={0}
      className="section-image-gallery"
    >
      <FadeWrapper>
        <WrapperContainer2 flexDirection="column" gap={20}>
          <Title
            fontSize={38}
            textAlign="center"
            padding={0}
            className="gallery-main-title"
          >
            Explora Nuestras Ofertas
          </Title>
        </WrapperContainer2>
      </FadeWrapper>

      <div className="gallery-container">
        <ImageTypeSidebar
          imageTypes={imageTypes}
          selectedType={selectedType}
          onSelectType={handleSelectType}
        />
        <ImageTypeContent
          selectedType={selectedType}
          imageRecords={imageRecords}
          loading={loading}
        />
      </div>
    </SectionWrapper>
  );
};

export { SectionImageGallery };
