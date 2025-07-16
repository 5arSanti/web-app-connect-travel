import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { LogoCard } from '../../LogoCard';
import SidebarFooterInfo from '../SidebarFooter';
import SidebarMenu from '../SidebarMenu';
import './styles.css';
import { MenuItem as MenuItemType } from '../../../../config/interfaces/menu-items';

interface SidebarCardProps {
    collapsed: boolean;
    onToggle: () => void;
    menuItems: MenuItemType[];
}

const SidebarCard = ({ collapsed, onToggle, menuItems }: SidebarCardProps) => {

    return (
        <Sidebar
            collapsed={collapsed}
            onToggle={onToggle}
            className="sidebar"
            transitionDuration={200}
        >
            <Menu style={{ backgroundColor: "var(--lines-color)" }}>
                <LogoCard containerWidth="100%" imageWidth="35%" />
            </Menu>
            <Menu>
                <SidebarMenu menuItems={menuItems} />
            </Menu>
            <Menu>
                <SidebarFooterInfo />
            </Menu>
        </Sidebar>
    );
};

export { SidebarCard }; 