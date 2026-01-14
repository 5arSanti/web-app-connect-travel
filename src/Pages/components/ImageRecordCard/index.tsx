import React, { useState } from "react";
import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { SpanCard, TextCard } from "../TextComponents";
import { FaCheck, FaTimes, FaTrash } from "react-icons/fa";
import { ButtonCard } from "../ButtonCard";
import { ImageRecord } from "../../../services/image-record/interfaces/image-record";
import "./styles.css";
import { SwitchCard } from "../SwitchCard";
import { ImageCard } from "../ImageCard";
import { ImageType } from "../../../services/image_type/interfaces/image_type";

interface ImageRecordCardProps {
  imageRecord: ImageRecord;
  imageTypes: ImageType[];
  onUpdateImageRecord: (id: string, is_active: boolean) => void;
  onDeleteImageRecord: ({ id, name }: { id: string; name: string }) => void;
}

const ImageRecordCard = ({
  imageRecord,
  imageTypes,
  onUpdateImageRecord,
  onDeleteImageRecord,
}: ImageRecordCardProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const imageType =
    imageTypes.find((type) => type.id === imageRecord.image_type_id)?.name ||
    "Sin tipo";

  return (
    <WrapperContainer2
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={0}
      width="100%"
      padding={0}
      height="auto"
    >
      <WrapperContainer1
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap={30}
        width="100%"
        padding={"20px 35px"}
        className="image-record-card-container"
      >
        <ImageCard imageUrl={imageRecord.image_url} alt={imageRecord.name} />

        <WrapperContainer2
          padding={0}
          width="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="start"
          gap={20}
        >
          <WrapperContainer1
            padding={"5px 15px"}
            width="auto"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            gap={10}
            backgroundColor={
              imageRecord.is_active ? "var(--pallete-3)" : "var(--pallete-7)"
            }
            borderRadius={5}
          >
            {imageRecord.is_active ? (
              <FaCheck className="icon-active" />
            ) : (
              <FaTimes className="icon-inactive" />
            )}
            <TextCard className="bold" white={true} width="auto" fontSize={14}>
              {imageRecord.is_active ? "Activa" : "Inactiva"}
            </TextCard>
          </WrapperContainer1>
          <TextCard width="auto" className="text-nowrap" fontSize={14}>
            <SpanCard className="text-nowrap" fontSize={14}>
              Tipo de imagen:
            </SpanCard>{" "}
            {imageType}
          </TextCard>
          <TextCard width="auto" fontSize={14}>
            <SpanCard fontSize={14}>Nombre original:</SpanCard>{" "}
            {imageRecord.name}
          </TextCard>
          <TextCard fontSize={12}>
            <SpanCard fontSize={12}>Descripción:</SpanCard>{" "}
            {imageRecord.description}
          </TextCard>
        </WrapperContainer2>

        <WrapperContainer2
          padding={0}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={10}
          width="auto"
          height="auto"
          className="image-record-card-buttons-container"
        >
          <SwitchCard
            checked={imageRecord.is_active}
            onChange={(checked) => {
              onUpdateImageRecord(imageRecord.id || "", checked);
            }}
          />

          <ButtonCard
            title="Eliminar"
            onClick={() => {
              onDeleteImageRecord({
                id: imageRecord.id || "",
                name: imageRecord.name,
              });
            }}
            type="button"
            padding={10}
            borderWidth={0}
            borderRadius={10}
            className="shadow-style"
            disabled={isLoading}
          >
            <FaTrash />
          </ButtonCard>
        </WrapperContainer2>
      </WrapperContainer1>
    </WrapperContainer2>
  );
};

export { ImageRecordCard };
