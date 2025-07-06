import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { LogoCard } from '../LogoCard';
import SidebarFooterInfo from './SidebarFooter';
import styles from './sidebar.module.css';
import SidebarMenu from './SidebarMenu';

const SidebarCard = ({ collapsed, onToggle, menuItems, selectedItem, setSelectedItem }) => {

    return (
        <Sidebar
            collapsed={collapsed}
            onToggle={onToggle}
            className={styles.sidebar}
            transitionDuration={200}
            transitionTimingFunction="ease-in-out"
        >
            <Menu style={{ backgroundColor: "var(--lines-color)" }}>
                <LogoCard containerWidth="100%" imageWidth="35%" />
            </Menu>
            <Menu>
                <SidebarMenu menuItems={menuItems} setSelectedItem={setSelectedItem} />
            </Menu>
            <Menu>
                <MenuItem>
                    <SidebarFooterInfo />
                </MenuItem>
            </Menu>
        </Sidebar>
    );
};

export { SidebarCard }; 