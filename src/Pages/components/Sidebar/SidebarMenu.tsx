import React, { Dispatch, SetStateAction } from 'react';
import { Menu, MenuItem } from 'react-pro-sidebar';
import { MenuItem as MenuItemType } from '../../../interfaces/menu-items';

interface SidebarMenuProps {
    menuItems: MenuItemType[];
    setSelectedItem: Dispatch<SetStateAction<MenuItemType | null>>;
}

const SidebarMenu = ({ menuItems, setSelectedItem }: SidebarMenuProps) => {

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