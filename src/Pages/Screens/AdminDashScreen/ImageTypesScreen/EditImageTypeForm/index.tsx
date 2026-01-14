import React, { useState } from "react";
import { WrapperContainer2 } from "../../../../components/WrapperContainers";
import { ImageTypeForm } from "../ImageTypeForm";
import { FormStatus } from "../../../../../config/enum/form-status.enum";
import {
  ImageType,
  ImageTypeFormValues,
} from "../../../../../services/image_type/interfaces/image_type";

interface EditImageTypeFormProps {
  imageType: ImageType;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    values: Partial<ImageTypeFormValues>
  ) => Promise<void>;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  status: FormStatus;
}

const EditImageTypeForm = ({
  imageType,
  handleSubmit,
  setIsEditing,
  loading,
  status,
}: EditImageTypeFormProps) => {
  const [values, setValues] = useState<ImageTypeFormValues>({
    id: imageType.id,
    name: imageType.name,
    image_url: imageType.image_url,
    files: [],
  });

  return (
    <WrapperContainer2
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
      gap={24}
      width="100%"
      className="edit-image-type-form-container"
    >
      <form onSubmit={(e) => handleSubmit(e, values)} className="form-style">
        <ImageTypeForm
          values={values}
          setValues={setValues}
          setOpen={setIsEditing}
          loading={loading}
          status={status}
        />
      </form>
    </WrapperContainer2>
  );
};

export { EditImageTypeForm };
