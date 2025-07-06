import React, { useContext, useState } from 'react';
import { MainContent } from './MainContent';
import { MenuItem } from '../../../interfaces/menu-items';
import { SidebarCard } from './SidebarCard';
import { AppContext } from '../../../Context';

interface SidebarLayoutProps {
    menuItems: MenuItem[];
}

const SidebarLayout = ({ menuItems }: SidebarLayoutProps) => {
    const { selectedItem }: { selectedItem: MenuItem | null } = useContext(AppContext);
    const [collapsed, setCollapsed] = useState<boolean>(false);

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <SidebarCard collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} menuItems={menuItems} />

            <MainContent collapsed={collapsed} setCollapsed={setCollapsed}>
                {selectedItem?.children}
            </MainContent>
        </div>
    );
};

export default SidebarLayout; 