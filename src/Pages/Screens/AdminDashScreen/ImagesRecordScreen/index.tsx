import React, { useEffect } from "react";
import { useState } from "react";
import { SubTitle } from "../../../components/SubTitle";
import { WrapperContainer2 } from "../../../components/WrapperContainers";
import { toast } from "react-toastify";
import { imageRecordService } from "../../../../services/image-record/image-record.service";
import { DeleteImageRecord, ImageRecord } from "../../../../services/image-record/interfaces/image-record";
import { GridContainer } from "../../../components/GridContainer";
import { ImageRecordForm } from "../../../components/ImageRecordForm";
import { UploadFileFormValues } from "../../../../services/image-record/interfaces/image-record";
import { ImageRecordCard } from "../../../components/ImageRecordCard";
import { ScrollableWrapper } from "../../../components/ScrollableWrapper";
import { ButtonCard } from "../../../components/ButtonCard";
import { IMAGE_RECORD_TYPES } from "../../../../services/image-record/constant/image-record.constant";

const ImagesRecordScreen = () => {

    const [imageRecords, setImageRecords] = useState<ImageRecord[]>([]);
    const [filterType, setFilterType] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchImageRecord();
    }, []);

    const fetchImageRecord = async () => {
        try {
            setLoading(true);
            const imageRecords = await imageRecordService.getImageRecords();
            setImageRecords(imageRecords);
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Error al cargar las imagenes');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, values: UploadFileFormValues) => {
        try {
            event.preventDefault();

            const formData = new FormData();

            for (let i = 0; i < values.files.length; i++) {
                formData.append('image_type', values.image_type || '');
                formData.append('description', values.description || '');
                formData.append('file', values.files[i]);
            }

            const { success, message } = await imageRecordService.createImageRecord(formData);
            if (success) {
                await fetchImageRecord();
                toast.success(message);
            } else {
                toast.error(message);
            }
        }
        catch (err) {
            toast.error(err.message || 'Error al cargar el archivo');
        } finally {
            setLoading(false);
        }
    };

    const onUpdateImageRecord = async (id: string, is_active: boolean) => {
        try {
            setLoading(true);
            const { success, message } = await imageRecordService.updateImageRecord(id, is_active);
            if (success) {
                toast.success(message);
                await fetchImageRecord();
            } else {
                toast.error(message);
            }
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Error al actualizar la imagen');
        } finally {
            setLoading(false);
        }
    };

    const onDeleteImageRecord = async ({ id, name }: DeleteImageRecord) => {
        try {
            setLoading(true);
            const { success, message } = await imageRecordService.deleteImageRecord({ id, name });
            if (success) {
                toast.success(message);
                await fetchImageRecord();
            }
            else {
                toast.error(message);
            }
        }
        catch (error) {
            toast.error(error instanceof Error ? error.message : 'Error al eliminar la imagen');
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <WrapperContainer2
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            gap={15}
            width="100%"
        >
            <SubTitle>
                Carga de imagenes
            </SubTitle>

            <GridContainer className="grid-075-125" justifyContent="start" alignItems="start">
                <ImageRecordForm handleSubmit={handleSubmit} loading={loading} />

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
                    >
                        <ButtonCard
                            padding={"5px 20px" as unknown as number}
                            title="Listar todas las imagenes"
                            className="shadow-style"
                            borderRadius={20}
                            backgroundColor={filterType === "" ? "var(--pallete-2)" : "transparent"}
                            color={filterType === "" ? "var(--white)" : "var(--text-color)"}
                            onClick={() => {
                                setFilterType("");
                            }}
                        >
                            Todas
                        </ButtonCard>
                        {IMAGE_RECORD_TYPES.map((type, index) => (
                            <ButtonCard
                                key={index}
                                padding={"5px 20px" as unknown as number}
                                title={`Listar imagenes de tipo ${type.label}`}
                                className="shadow-style"
                                borderRadius={20}
                                backgroundColor={filterType === type.value ? "var(--pallete-2)" : "transparent"}
                                color={filterType === type.value ? "var(--white)" : "var(--text-color)"}
                                onClick={() => {
                                    setFilterType(type.value);
                                }}
                            >
                                {type.label}
                            </ButtonCard>
                        ))}
                    </WrapperContainer2>
                    <ScrollableWrapper height="70vh" justifyContent="start" alignItems="start" gap={10} padding={5}>
                        {!loading && imageRecords?.filter((imageRecord) => filterType === "" ? true : imageRecord.image_type === filterType)?.map((imageRecord) => (
                            <ImageRecordCard
                                key={imageRecord.id}
                                imageRecord={imageRecord}
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