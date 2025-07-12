import React from 'react';
import SidebarLayout from '../../components/Sidebar/SidebarLayout';
import { getMenuItems } from '../../utils/menu-item.utils';

const AdminDashScreen = () => {

    return (
        <SidebarLayout
            menuItems={getMenuItems()}
        />
    )
}

export { AdminDashScreen }