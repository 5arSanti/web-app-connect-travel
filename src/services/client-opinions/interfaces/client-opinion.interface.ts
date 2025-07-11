export interface ClientOpinion {
    id: string;
    client_name: string;
    service_id: string;
    message: string;
    client_email: string;
    created_at: Date;
}

export interface ClientOpinionFormValues {
    client_name: string;
    service_id: string;
    message: string;
    client_email: string;
}