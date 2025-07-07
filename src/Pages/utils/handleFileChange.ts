import { toast } from "react-toastify";
import { UploadFileFormValues } from "../../services/image-record/enum/image-record.enum";

const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    extensions: string[],
    setState: React.Dispatch<React.SetStateAction<UploadFileFormValues>>,
    values: UploadFileFormValues
) => {
    let files = [...event.target.files || []];

    if (!files) {
        return toast.error("Por favor, seleccione un archivo");
    }

    files.map((item) => {
        const fileExtension = item.name.slice(((item.name.lastIndexOf(".") - 1) >>> 0) + 2);

        if (!extensions.includes(`.${fileExtension}`)) {
            files = [];
            setState({ ...values, files: [] });
            event.target.value = "";
            return toast.error(`Por favor, seleccione un archivo .xlsx o .pdf válido. ${item.name}`);
        }
    })

    setState({ ...values, files: files });
};

export { handleFileChange };