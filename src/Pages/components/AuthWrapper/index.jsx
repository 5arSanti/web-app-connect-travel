import React from "react";

import { AppContext } from "../../../Context";
import { useNavigate } from "react-router-dom";

import { handleAuthRequest } from "../../utils/HandleAuth/handleAuthRequest";
import { handleAdmin } from "../../utils/HandleAuth/handleAdmin";

const AuthWrapper = ({children}) => {
    const context = React.useContext(AppContext);

    const navigate = useNavigate();

    React.useEffect(() => {
        handleAuthRequest(context, navigate)
    }, []);


    React.useEffect(() => {
        handleAdmin(context.user, context.setAdmin)
    }, [context.user])


    return (
        children
    );
}

export { AuthWrapper }