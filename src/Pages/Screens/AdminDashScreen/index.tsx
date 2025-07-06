import React, { Dispatch, SetStateAction } from 'react';
import SidebarLayout from '../../components/Sidebar/SidebarLayout';
import { getMenuItems } from '../../utils/menu-item.utils';
import { MenuItem } from '../../../interfaces/menu-items';

interface AdminDashScreenProps {
    selectedItem: MenuItem | null;
    setSelectedItem: Dispatch<SetStateAction<MenuItem | null>>;
}

const AdminDashScreen = ({ selectedItem, setSelectedItem }: AdminDashScreenProps) => {

    return (
        <SidebarLayout
            menuItems={getMenuItems()}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
        />
    )
}

export { AdminDashScreen }