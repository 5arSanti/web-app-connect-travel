import React, { Dispatch, SetStateAction } from 'react';
import SidebarLayout from '../../components/Sidebar/SidebarLayout';
import { getMenuItems } from '../../utils/menu-item.utils';
import { MenuItem } from '../../../interfaces/menu-items';

const AdminDashScreen = () => {

    return (
        <SidebarLayout
            menuItems={getMenuItems()}
        />
    )
}

export { AdminDashScreen }