import React, { useContext } from 'react';
import { Menu, MenuItem } from 'react-pro-sidebar';
import { MenuItem as MenuItemType } from '../../../../config/interfaces/menu-items';
import { AppContext } from '../../../../Context';
import './styles.css';

interface SidebarMenuProps {
    menuItems: MenuItemType[];
}

const SidebarMenu = ({ menuItems }: SidebarMenuProps) => {
    const { setSelectedItem }: { setSelectedItem: (item: MenuItemType) => void } = useContext(AppContext);

    return (
        <Menu>
            {menuItems.map((item: MenuItemType, index: number) => (
                <MenuItem
                    style={{
                        padding: '0px 15px',
                        margin: '5px 0px',
                        borderRadius: '5px',
                        color: 'var(--pallete-2)',
                        fontSize: '10px',
                        height: 'auto',
                    }}
                    className='menu-item'
                    icon={item.icon}
                    key={index}
                    onClick={() => setSelectedItem(item)}
                    title={item.label}
                >
                    {item.label}
                </MenuItem>
            ))}
        </Menu>
    )
}

export default SidebarMenu; 