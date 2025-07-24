import React, { useState } from "react";
import { WrapperContainer2 } from "../../../../components/WrapperContainers";

import { FormStatus } from "../../../../../config/enum/form-status.enum";
import { ConnectServiceFormValues } from "../../../../../services/connect-services/interfaces/connect-services";
import { ServiceForm } from "../ServiceForm";

interface CreateConnectServiceFormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>, values: ConnectServiceFormValues) => Promise<void>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
}

const CreateServiceForm = ({ handleSubmit, setOpen, loading }: CreateConnectServiceFormProps) => {
    const [values, setValues] = useState<ConnectServiceFormValues>({
        name: "",
        description: "",
        icon_name: "",
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
                <ServiceForm
                    values={values}
                    setValues={setValues}
                    setOpen={setOpen}
                    loading={loading}
                    status={FormStatus.CREATING}
                />
            </form>
        </WrapperContainer2>
    )
}

export { CreateServiceForm }