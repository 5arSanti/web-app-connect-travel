import React from "react";
import { WrapperContainer2 } from "../../../../components/WrapperContainers";
import { InputCard, UploadFileCard } from "../../../../components/InputsCards";
import { handleInputChange } from "../../../../utils/handleInputChange";
import { GridContainer } from "../../../../components/GridContainer";
import { FaImage, FaPlus, FaTimes } from "react-icons/fa";
import { handleFileChange } from "../../../../utils/handleFileChange";
import { ACCEPTED_EXTENSIONS } from "../../../../../config/constants/accepted-extensions.constant";
import { ButtonCard } from "../../../../components/ButtonCard";
import { ImageTypeFormValues } from "../../../../../services/image_type/interfaces/image_type";
import { FormStatus } from "../../../../../config/enum/form-status.enum";
import { TextCard } from "../../../../components/TextComponents";

interface ImageTypeFormProps {
  values: ImageTypeFormValues;
  setValues: React.Dispatch<React.SetStateAction<ImageTypeFormValues>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  status: FormStatus;
}

const ImageTypeForm = ({
  values,
  setValues,
  setOpen,
  loading,
  status,
}: ImageTypeFormProps) => {
  return (
    <WrapperContainer2
      flexDirection="column"
      gap={10}
      width="100%"
      padding={20}
    >
      <GridContainer className="grid-125-075" gap={15}>
        <WrapperContainer2 flexDirection="column" gap={15} padding={0}>
          <InputCard
            id="name"
            label="Nombre del tipo de imagen"
            placeholder="Ingresa el nombre del tipo de imagen"
            type="text"
            onChange={(e) => handleInputChange(e, setValues)}
            defaultValue={values.name}
            required={true}
          />
        </WrapperContainer2>

        <WrapperContainer2 flexDirection="column" gap={15} padding={0}>
          <TextCard fontSize={16} className="bold" textAlign="center">
            <FaImage /> Cargar imagen del tipo
          </TextCard>
          <UploadFileCard
            id="image_url"
            label="Imagen"
            onChange={(event) =>
              handleFileChange(event, ACCEPTED_EXTENSIONS, setValues, values)
            }
            accept={ACCEPTED_EXTENSIONS.join(", ")}
            filesArray={values?.files}
            info={`Archivos permitidos: ${ACCEPTED_EXTENSIONS.join(", ")}`}
          />
        </WrapperContainer2>
      </GridContainer>

      <GridContainer className="grid-1-1" gap={15}>
        <ButtonCard
          type="button"
          onClick={() => setOpen(false)}
          padding={12}
          borderRadius={8}
          backgroundColor="var(--pallete-4)"
        >
          <FaTimes /> Cancelar
        </ButtonCard>

        <ButtonCard
          type="submit"
          disabled={
            loading ||
            !values.name ||
            (status === FormStatus.CREATING &&
              (!values.files || values.files.length === 0)) ||
            (status === FormStatus.EDITING &&
              (!values.files || values.files.length === 0) &&
              !values.image_url)
          }
          padding={12}
          borderRadius={8}
          backgroundColor="var(--pallete-4)"
        >
          <FaPlus />{" "}
          {loading
            ? "Procesando..."
            : `${
                status === FormStatus.CREATING ? "Crear" : "Actualizar"
              } Tipo de Imagen`}
        </ButtonCard>
      </GridContainer>
    </WrapperContainer2>
  );
};

export { ImageTypeForm };
