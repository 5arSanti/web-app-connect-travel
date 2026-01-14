import React, { useState } from "react";
import { WrapperContainer2 } from "../../../../components/WrapperContainers";
import { FormStatus } from "../../../../../config/enum/form-status.enum";
import { ImageTypeFormValues } from "../../../../../services/image_type/interfaces/image_type";
import { ImageTypeForm } from "../ImageTypeForm";

interface CreateImageTypeFormProps {
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    values: ImageTypeFormValues
  ) => Promise<void>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}

const CreateImageTypeForm = ({
  handleSubmit,
  setOpen,
  loading,
}: CreateImageTypeFormProps) => {
  const [values, setValues] = useState<ImageTypeFormValues>({
    name: "",
    files: [],
  });

  return (
    <WrapperContainer2
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
      gap={0}
      width="100%"
      padding={0}
    >
      <form onSubmit={(e) => handleSubmit(e, values)} className="form-style">
        <ImageTypeForm
          values={values}
          setValues={setValues}
          setOpen={setOpen}
          loading={loading}
          status={FormStatus.CREATING}
        />
      </form>
    </WrapperContainer2>
  );
};

export { CreateImageTypeForm };
