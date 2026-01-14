import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { WrapperContainer2 } from "../../../components/WrapperContainers";
import { SubTitle } from "../../../components/SubTitle";
import { ButtonCard } from "../../../components/ButtonCard";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ExpandableCard } from "../../../components/ExpandableCard";
import { CreateImageTypeForm } from "./CreateImageTypeForm";
import { imageTypeService } from "../../../../services/image_type/image_type.service";
import {
  ImageType,
  ImageTypeFormValues,
} from "../../../../services/image_type/interfaces/image_type";
import { ImageTypeCard } from "../../../components/ImageTypeCard";

const ImageTypesScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [imageTypes, setImageTypes] = useState<ImageType[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchImageTypes();
  }, []);

  const fetchImageTypes = async () => {
    try {
      setLoading(true);
      const imageTypes = await imageTypeService.getImageTypes();
      setImageTypes(imageTypes);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Error al cargar los tipos de imágenes"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (
    e: React.FormEvent<HTMLFormElement>,
    values: ImageTypeFormValues
  ) => {
    e.preventDefault();
    try {
      setLoading(true);
      setOpen(false);
      const response = await imageTypeService.createImageType(values);

      if (response.success) {
        toast.success(response.message);
        await fetchImageTypes();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Error al crear el tipo de imagen"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (
    e: React.FormEvent<HTMLFormElement>,
    values: Partial<ImageTypeFormValues>
  ) => {
    e.preventDefault();
    try {
      setLoading(true);
      setOpen(false);

      if (!values.id) {
        throw new Error("ID de tipo de imagen no encontrado");
      }

      const response = await imageTypeService.updateImageType(
        values.id,
        values
      );

      if (response.success) {
        toast.success(response.message);
        await fetchImageTypes();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Error al actualizar el tipo de imagen"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setLoading(true);
      setOpen(false);

      // Find the imageType to get the image_url for deletion
      const imageType = imageTypes.find((it) => it.id === id);
      const response = await imageTypeService.deleteImageType(
        id,
        imageType?.image_url
      );

      if (response.success) {
        toast.success(response.message);
        await fetchImageTypes();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Error al eliminar el tipo de imagen"
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
      gap={24}
      width="100%"
      className="admin-container"
    >
      <SubTitle>Gestión de Tipos de Imágenes</SubTitle>

      <ButtonCard
        title="Agregar tipo de imagen"
        onClick={() => {
          setOpen(!open);
        }}
        type="button"
        padding={10}
        borderWidth={0}
        borderRadius={10}
        backgroundColor="var(--pallete-4)"
      >
        {open ? <FaMinus /> : <FaPlus />}{" "}
        {open ? "Cerrar" : "Crear nuevo tipo de imagen"}
      </ButtonCard>

      {!loading && (
        <ExpandableCard open={open}>
          <CreateImageTypeForm
            handleSubmit={handleCreate}
            setOpen={setOpen}
            loading={loading}
          />
        </ExpandableCard>
      )}

      <WrapperContainer2
        flexDirection="column"
        justifyContent="start"
        alignItems="start"
        gap={10}
        width="100%"
        padding={0}
      >
        {!loading &&
          imageTypes?.map((imageType, index) => (
            <ImageTypeCard
              key={index}
              imageType={imageType}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              loading={loading}
            />
          ))}
      </WrapperContainer2>
    </WrapperContainer2>
  );
};

export default ImageTypesScreen;
