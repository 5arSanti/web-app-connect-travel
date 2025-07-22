import React, { useContext } from 'react';
import { WrapperContainer2 } from '../../../components/WrapperContainers';
import { TextCard } from '../../../components/TextComponents';
import { SubTitle } from '../../../components/SubTitle';
import { getMenuItems } from '../../../utils/menu-item.utils';
import { ButtonCard } from '../../../components/ButtonCard';
import { MenuItem } from '../../../../config/interfaces/menu-items';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { AppContext } from '../../../../Context';
import { FadeWrapper } from '../../../components/FadeWrapper';

const AdminHome = () => {
    const navigate = useNavigate();
    const { setSelectedItem }: { setSelectedItem: (item: MenuItem) => void } = useContext(AppContext);

    const menuItems = getMenuItems();

    return (
        <WrapperContainer2
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            gap={24}
            width="100%"
            className="admin-container"
        >
            <FadeWrapper
                width="100%"
                delay={0}
            >
                <SubTitle>
                    ¡Bienvenido al Panel de Administración!"
                </SubTitle>
                <TextCard fontSize={14} textAlign="start" width="100%">
                    Desde aquí puedes gestionar y configurar los principales servicios de la plataforma. <br />
                    Utiliza el menú lateral para navegar entre las diferentes secciones.
                </TextCard>
                <WrapperContainer2
                    height="auto"
                    className='shadow-style'
                    flexDirection="column"
                    justifyContent="start"
                    alignItems="start"
                    gap={10}
                    width="100%"
                >
                    {menuItems.map((item: MenuItem, index: number) => (
                        <ButtonCard
                            className='nav-buttons-admin-home'
                            borderWidth={0}
                            key={index}
                            padding={5}
                            onClick={() => {
                                if (item.path) { navigate(item.path); }
                                setSelectedItem && setSelectedItem(item);
                            }}
                        >
                            {item.icon} {item.label} &gt;
                            <TextCard fontSize={12} textAlign="start" width="100%">{item.description}</TextCard>
                        </ButtonCard>
                    ))}
                </WrapperContainer2>
            </FadeWrapper>
        </WrapperContainer2>
    )
}

export { AdminHome };