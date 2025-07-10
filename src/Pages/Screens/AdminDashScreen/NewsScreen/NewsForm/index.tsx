import React from "react";
import { WrapperContainer2 } from "../../../../components/WrapperContainers";
import { InputCard, OptionInputCard, TextAreaCard, UploadFileCard } from "../../../../components/InputsCards";
import { handleInputChange, handleSelectChange, handleTextAreaChange } from "../../../../utils/handleInputChange";
import { GridContainer } from "../../../../components/GridContainer";
import { TextCard } from "../../../../components/TextComponents";
import { FaImage, FaPlus, FaTimes } from "react-icons/fa";
import { handleFileChange } from "../../../../utils/handleFileChange";
import { ACCEPTED_EXTENSIONS } from "../../../../../config/constants/accepted-extensions.constant";
import { ButtonCard } from "../../../../components/ButtonCard";
import { NewsFormValues } from "../../../../../services/news/interfaces/news";
import { NewsStatus } from "../../../../../services/news/enum/news.enum";

interface NewsFormProps {
    values: NewsFormValues;
    setValues: React.Dispatch<React.SetStateAction<NewsFormValues>>;
    categoriesOptions: { id: string, name: string }[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
    status: NewsStatus;
}

const NewsForm = ({ values, setValues, categoriesOptions, setOpen, loading, status }: NewsFormProps) => {
    return (
        <WrapperContainer2
            flexDirection="column"
            gap={10}
            width="100%"
            padding={0}
        >
            <GridContainer
                className="grid-125-075"
                gap={15}
            >
                <WrapperContainer2
                    flexDirection="column"
                    gap={15}
                    padding={0}
                >
                    <InputCard
                        id="title"
                        label="Título"
                        placeholder="Ingresa el título de la noticia"
                        type="text"
                        onChange={(e) => handleInputChange(e, setValues)}
                        defaultValue={values.title}
                        required={true}
                    />

                    <OptionInputCard
                        id="category_id"
                        label="Categoría"
                        array={categoriesOptions}
                        onChange={(e) => handleSelectChange(e, setValues)}
                        defaultValue={values.category_id}
                        none={true}
                        required={true}
                    />

                    <TextAreaCard
                        id="content"
                        label="Contenido de la noticia"
                        placeholder="Escribe el contenido de la noticia..."
                        onChange={(e) => handleTextAreaChange(e, setValues)}
                        defaultValue={values.content}
                        required={true}
                    />

                </WrapperContainer2>

                <WrapperContainer2
                    flexDirection="column"
                    gap={15}
                    padding={0}
                >
                    <TextCard fontSize={16} className="bold" textAlign="center">
                        <FaImage /> Cargar imagen de la noticia
                    </TextCard>
                    <UploadFileCard
                        id="image_url"
                        label="Imagen"
                        onChange={(event) => handleFileChange(event, ACCEPTED_EXTENSIONS, setValues, values)}
                        accept={ACCEPTED_EXTENSIONS.join(', ')}
                        filesArray={values?.files}
                        info={`Archivos permitidos: ${ACCEPTED_EXTENSIONS.join(', ')}`}
                    />
                </WrapperContainer2>
            </GridContainer>

            <GridContainer
                className="grid-1-1"
                gap={15}
            >
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
                    disabled={loading || !values.title || !values.content || !values.category_id}
                    padding={12}
                    borderRadius={8}
                    backgroundColor="var(--pallete-4)"
                >
                    <FaPlus /> {loading ? 'Creando...' : `${status === NewsStatus.CREATING ? 'Crear' : 'Actualizar'} Noticia`}
                </ButtonCard>

            </GridContainer>
        </WrapperContainer2>
    )
}

export { NewsForm };