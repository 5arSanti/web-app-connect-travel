export interface MenuItem {
    icon: React.ReactNode;
    label: string;
    children: React.ReactNode;
    description: string;
    path?: string;
}