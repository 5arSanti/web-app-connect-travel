import React, { Dispatch, SetStateAction, useState } from 'react';
import { MainContent } from './MainContent';
import { MenuItem } from '../../../interfaces/menu-items';
import { SidebarCard } from './SidebarCard';

interface SidebarLayoutProps {
    menuItems: MenuItem[];
    selectedItem: MenuItem | null;
    setSelectedItem: Dispatch<SetStateAction<MenuItem | null>>;
}

const SidebarLayout = ({ menuItems, selectedItem, setSelectedItem }: SidebarLayoutProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <SidebarCard collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} menuItems={menuItems} setSelectedItem={setSelectedItem} />

            <MainContent collapsed={collapsed} setCollapsed={setCollapsed}>
                {selectedItem?.children}
            </MainContent>
        </div>
    );
};

export default SidebarLayout; 