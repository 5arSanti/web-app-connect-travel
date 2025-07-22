import React, { useContext, useState } from 'react';
import { MainContent } from './MainContent';
import { MenuItem } from '../../../config/interfaces/menu-items';
import { SidebarCard } from './SidebarCard';
import { AppContext } from '../../../Context';

interface SidebarLayoutProps {
    menuItems: MenuItem[];
}

const SidebarLayout = ({ menuItems }: SidebarLayoutProps) => {

    const { windowWidth } = useContext(AppContext);

    const { selectedItem }: { selectedItem: MenuItem | null } = useContext(AppContext);
    const [collapsed, setCollapsed] = useState<boolean>(false);

    React.useEffect(() => {
        if (windowWidth < 768) {
            setCollapsed(true);
        }
    }, [windowWidth]);

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <SidebarCard collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} menuItems={menuItems} />

            <MainContent collapsed={collapsed} setCollapsed={setCollapsed} title={selectedItem?.label} description={selectedItem?.description}>
                {selectedItem?.children}
            </MainContent>
        </div>
    );
};

export default SidebarLayout; 