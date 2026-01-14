import React, { useEffect } from "react";
import { useState } from "react";
import { SubTitle } from "../../../components/SubTitle";
import { WrapperContainer2 } from "../../../components/WrapperContainers";
import { toast } from "react-toastify";
import { imageRecordService } from "../../../../services/image-record/image-record.service";
import {
  DeleteImageRecord,
  ImageRecord,
} from "../../../../services/image-record/interfaces/image-record";
import { GridContainer } from "../../../components/GridContainer";
import { ImageRecordForm } from "../../../components/ImageRecordForm";
import { UploadFileFormValues } from "../../../../services/image-record/interfaces/image-record";
import { ImageRecordCard } from "../../../components/ImageRecordCard";
import { ScrollableWrapper } from "../../../components/ScrollableWrapper";
import { ButtonCard } from "../../../components/ButtonCard";
import { imageTypeService } from "../../../../services/image_type/image_type.service";
import { ImageType } from "../../../../services/image_type/interfaces/image_type";

import "./styles.css";

const ImagesRecordScreen = () => {
  const [imageRecords, setImageRecords] = useState<ImageRecord[]>([]);
  const [imageTypes, setImageTypes] = useState<ImageType[]>([]);
  const [selectedFilterIds, setSelectedFilterIds] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchImageRecord();
    fetchImageTypes();
  }, []);

  useEffect(() => {
    fetchImageRecord();
  }, [selectedFilterIds]);

  const fetchImageTypes = async () => {
    try {
      const types = await imageTypeService.getImageTypes();
      setImageTypes(types);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Error al cargar los tipos de imágenes"
      );
    }
  };

  const fetchImageRecord = async () => {
    try {
      setLoading(true);
      const imageRecords = await imageRecordService.getImageRecords(
        selectedFilterIds.length > 0 ? selectedFilterIds : undefined
      );
      setImageRecords(imageRecords);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Error al cargar las imagenes"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    values: UploadFileFormValues
  ) => {
    try {
      event.preventDefault();

      const formData = new FormData();

      for (let i = 0; i < values.files.length; i++) {
        formData.append("image_type_id", values.image_type_id || "");
        formData.append("description", values.description || "");
        formData.append("file", values.files[i]);
      }

      const { success, message } = await imageRecordService.createImageRecord(
        formData
      );
      if (success) {
        await fetchImageRecord();
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Error al cargar el archivo"
      );
    } finally {
      setLoading(false);
    }
  };

  const onUpdateImageRecord = async (id: string, is_active: boolean) => {
    try {
      setLoading(true);
      const { success, message } = await imageRecordService.updateImageRecord(
        id,
        is_active
      );
      if (success) {
        toast.success(message);
        await fetchImageRecord();
      } else {
        toast.error(message);
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Error al actualizar la imagen"
      );
    } finally {
      setLoading(false);
    }
  };

  const onDeleteImageRecord = async ({ id, name }: DeleteImageRecord) => {
    try {
      setLoading(true);
      const { success, message } = await imageRecordService.deleteImageRecord({
        id,
        name,
      });
      if (success) {
        toast.success(message);
        await fetchImageRecord();
      } else {
        toast.error(message);
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Error al eliminar la imagen"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <WrapperContainer2
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
      gap={15}
      width="100%"
      className="admin-container"
    >
      <SubTitle>Carga de imagenes</SubTitle>

      <GridContainer
        className="grid-075-125"
        justifyContent="start"
        alignItems="start"
      >
        <ImageRecordForm
          handleSubmit={handleSubmit}
          loading={loading}
          imageTypes={imageTypes}
        />

        <WrapperContainer2
          flexDirection="column"
          gap={10}
          padding={0}
          width="100%"
        >
          <WrapperContainer2
            height="auto"
            flexDirection="row"
            gap={10}
            padding={0}
            width="100%"
            justifyContent="start"
            alignItems="start"
            className="image-record-card-filter-container"
          >
            <ButtonCard
              padding={"5px 20px" as unknown as number}
              title="Listar todas las imagenes"
              className="shadow-style"
              borderRadius={20}
              backgroundColor={
                selectedFilterIds.length === 0
                  ? "var(--pallete-2)"
                  : "transparent"
              }
              color={
                selectedFilterIds.length === 0
                  ? "var(--white)"
                  : "var(--text-color)"
              }
              onClick={() => {
                setSelectedFilterIds([]);
              }}
            >
              Todas
            </ButtonCard>
            {imageTypes.map((type) => {
              const isSelected = selectedFilterIds.includes(type.id);
              return (
                <ButtonCard
                  key={type.id}
                  padding={"5px 20px" as unknown as number}
                  title={`${
                    isSelected ? "Deseleccionar" : "Seleccionar"
                  } filtro ${type.name}`}
                  className="shadow-style"
                  borderRadius={20}
                  backgroundColor={
                    isSelected ? "var(--pallete-2)" : "transparent"
                  }
                  color={isSelected ? "var(--white)" : "var(--text-color)"}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedFilterIds(
                        selectedFilterIds.filter((id) => id !== type.id)
                      );
                    } else {
                      setSelectedFilterIds([...selectedFilterIds, type.id]);
                    }
                  }}
                >
                  {type.name}
                </ButtonCard>
              );
            })}
          </WrapperContainer2>
          <ScrollableWrapper
            height="70vh"
            justifyContent="start"
            alignItems="start"
            gap={10}
            padding={5}
          >
            {!loading &&
              imageRecords?.length > 0 &&
              imageRecords?.map((imageRecord) => (
                <ImageRecordCard
                  key={imageRecord.id}
                  imageRecord={imageRecord}
                  imageTypes={imageTypes}
                  onUpdateImageRecord={onUpdateImageRecord}
                  onDeleteImageRecord={onDeleteImageRecord}
                />
              ))}
          </ScrollableWrapper>
        </WrapperContainer2>
      </GridContainer>
    </WrapperContainer2>
  );
};

export { ImagesRecordScreen };
