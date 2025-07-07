import React, { useState } from "react";
import { SubTitle } from "../SubTitle";
import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { ButtonCard } from "../ButtonCard";
import { OptionInputCard, TextAreaCard, UploadFileCard } from "../InputsCards";
import { ImageRecordType } from "../../../services/image-record/enum/image-record.enum";
import { toast } from "react-toastify";
import { handleFileChange } from "../../utils/handleFileChange";
import { handleInputChange, handleSelectChange, handleTextAreaChange } from "../../utils/handleInputChange";
import { UploadFileFormValues } from "../../../services/image-record/interfaces/image-record";
import { imageRecordService } from "../../../services/image-record/image-record.service";

const ACCEPTED_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

const IMAGE_RECORD_TYPES = [
    {
        label: "Travel Week",
        value: ImageRecordType.TRAVEL_WEEK,
    },
    {
        label: "Bloqueo",
        value: ImageRecordType.BLOCK,
    }
];

interface UploadFileProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>, formData: UploadFileFormValues) => void;
}

const ImageRecordForm = ({ handleSubmit }: UploadFileProps) => {
    const [loading, setLoading] = useState<boolean>(false);

    const [values, setValues] = React.useState<UploadFileFormValues>({
        files: [],
        image_type: null,
        description: "",
    });

    return (
        <form encType="multipart/form-data" onSubmit={(e) => handleSubmit(e, values)}>
            <WrapperContainer2 flexDirection="column" gap={10} padding={10} width="100%">
                <UploadFileCard
                    id={"file"}
                    onChange={(event) => handleFileChange(event, ACCEPTED_EXTENSIONS, setValues, values)}
                    accept={ACCEPTED_EXTENSIONS.join(', ')}
                    filesArray={values?.files}
                    info={`Archivos permitidos: ${ACCEPTED_EXTENSIONS.join(', ')}`}
                />

                <OptionInputCard
                    id={"image_type"}
                    label={"Seleccione el tipo de imagen"}
                    array={IMAGE_RECORD_TYPES}
                    onChange={(event) => handleSelectChange(event, setValues)}
                    defaultValue={values?.image_type || ""}
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
}

export { ImageRecordForm };