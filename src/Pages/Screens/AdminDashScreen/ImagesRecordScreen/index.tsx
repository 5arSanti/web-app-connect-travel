import React, { useEffect } from "react";
import { useState } from "react";
import { SubTitle } from "../../../components/SubTitle";
import { WrapperContainer2 } from "../../../components/WrapperContainers";
import { toast } from "react-toastify";
import { imageRecordService } from "../../../../services/image-record/image-record.service";
import { ImageRecord } from "../../../../services/image-record/interfaces/image-record";
import { GridContainer } from "../../../components/GridContainer";
import { ImageRecordForm } from "../../../components/ImageRecordForm";
import { UploadFileFormValues } from "../../../../services/image-record/interfaces/image-record";
import { ImageRecordCard } from "../../../components/ImageRecordCard";

const ImagesRecordScreen = () => {

    const [imageRecords, setImageRecords] = useState<ImageRecord[]>([]);
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
            console.log(success, message);
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
                <ImageRecordForm handleSubmit={handleSubmit} />

                {!loading && imageRecords?.map((imageRecord) => (
                    <ImageRecordCard key={imageRecord.id} imageRecord={imageRecord} />
                ))}
            </GridContainer>
        </WrapperContainer2>
    );
};

export { ImagesRecordScreen };