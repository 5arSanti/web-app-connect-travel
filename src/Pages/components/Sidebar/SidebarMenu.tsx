import React, { useContext } from 'react';
import { Menu, MenuItem } from 'react-pro-sidebar';
import { MenuItem as MenuItemType } from '../../../interfaces/menu-items';
import { AppContext } from '../../../Context';

interface SidebarMenuProps {
    menuItems: MenuItemType[];
}

const SidebarMenu = ({ menuItems }: SidebarMenuProps) => {
    const { setSelectedItem }: { setSelectedItem: (item: MenuItemType) => void } = useContext(AppContext);

    return (
        <Menu>
            {menuItems.map((item: MenuItemType, index: number) => (
                <MenuItem key={index} icon={item.icon} onClick={() => setSelectedItem(item)}>
                    {item.label}
                </MenuItem>
            ))}
        </Menu>
    )
}

export default SidebarMenu; 