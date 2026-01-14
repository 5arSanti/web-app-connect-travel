import React from "react";
import { WrapperContainer2 } from "../WrapperContainers";
import { ButtonCard } from "../ButtonCard";
import { OptionInputCard, TextAreaCard, UploadFileCard } from "../InputsCards";
import { handleFileChange } from "../../utils/handleFileChange";
import {
  handleSelectChange,
  handleTextAreaChange,
} from "../../utils/handleInputChange";
import { UploadFileFormValues } from "../../../services/image-record/interfaces/image-record";
import { ACCEPTED_EXTENSIONS } from "../../../config/constants/accepted-extensions.constant";
import { ImageType } from "../../../services/image_type/interfaces/image_type";

interface UploadFileProps {
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    formData: UploadFileFormValues
  ) => void;
  loading: boolean;
  imageTypes: ImageType[];
}

const ImageRecordForm = ({
  handleSubmit,
  loading,
  imageTypes,
}: UploadFileProps) => {
  const [values, setValues] = React.useState<UploadFileFormValues>({
    files: [],
    image_type_id: null,
    description: "",
  });

  const imageTypesOptions = imageTypes.map((type) => ({
    id: type.id,
    name: type.name,
  }));

  return (
    <form
      encType="multipart/form-data"
      onSubmit={(e) => handleSubmit(e, values)}
    >
      <WrapperContainer2
        flexDirection="column"
        gap={10}
        padding={10}
        width="100%"
      >
        <UploadFileCard
          id={"file"}
          onChange={(event) =>
            handleFileChange(event, ACCEPTED_EXTENSIONS, setValues, values)
          }
          accept={ACCEPTED_EXTENSIONS.join(", ")}
          filesArray={values?.files}
          info={`Archivos permitidos: ${ACCEPTED_EXTENSIONS.join(", ")}`}
        />

        <OptionInputCard
          id={"image_type_id"}
          label={"Seleccione el tipo de imagen"}
          array={imageTypesOptions}
          onChange={(event) => handleSelectChange(event, setValues)}
          defaultValue={values?.image_type_id || ""}
          none={true}
        />

        <TextAreaCard
          id={"description"}
          label={"Descripción"}
          onChange={(event) => handleTextAreaChange(event, setValues)}
          defaultValue={values?.description || ""}
          placeholder="Descripción de la imagen"
        />

        <ButtonCard
          width="100%"
          type="submit"
          title="Cargar archivo"
          disabled={loading}
          className="shadow-style"
          borderRadius={10}
        >
          {loading ? "Cargando..." : "Cargar Archivo"}
        </ButtonCard>
      </WrapperContainer2>
    </form>
  );
};

export { ImageRecordForm };
