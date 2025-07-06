import React from 'react';
import SidebarLayout from '../../components/Sidebar/SidebarLayout';
import { useState } from 'react';
import { getMenuItems } from '../../utils/menu-item.utils';
import { MenuItem } from '../../../interfaces/menu-items';

const AdminDashScreen = () => {
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(getMenuItems()[0]);

    return (
        <SidebarLayout
            menuItems={getMenuItems(setSelectedItem)}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
        />
    )
}

export { AdminDashScreen }