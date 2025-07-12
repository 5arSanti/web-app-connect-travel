import React, { useState } from "react";
import { WrapperContainer2 } from "../../../../components/WrapperContainers";
import { ServiceForm } from "../ServiceForm";
import { FormStatus } from "../../../../../config/enum/form-status.enum";
import { ConnectService, ConnectServiceFormValues } from "../../../../../services/connect-services/interfaces/connect-services";

interface EditNewFormProps {
    connectService: ConnectService;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>, values: Partial<ConnectServiceFormValues>) => void;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
    status: FormStatus;
}

const EditServiceForm = ({ connectService, handleSubmit, setIsEditing, loading, status }: EditNewFormProps) => {
    const [values, setValues] = useState<ConnectServiceFormValues>({
        id: connectService.id,
        name: connectService.name,
        description: connectService.description,
        icon_name: connectService.icon_name,
    });

    return (
        <WrapperContainer2
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            gap={24}
            width="100%"
        >
            <form onSubmit={(e) => handleSubmit(e, values)} className="form-style">
                <ServiceForm
                    values={values}
                    setValues={setValues}
                    setOpen={setIsEditing}
                    loading={loading}
                    status={status}
                />
            </form>
        </WrapperContainer2>
    )
}

export { EditServiceForm } 