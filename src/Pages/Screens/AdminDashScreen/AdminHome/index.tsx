import React from 'react';
import { WrapperContainer2 } from '../../../components/WrapperContainers';
import { TextCard } from '../../../components/TextComponents';
import { SubTitle } from '../../../components/SubTitle';
import { getMenuItems } from '../../../utils/menu-item.utils';
import { ButtonCard } from '../../../components/ButtonCard';
import { MenuItem } from '../../../../interfaces/menu-items';
import { useNavigate } from 'react-router-dom';

const AdminHome = ({ setSelectedItem }: { setSelectedItem?: (item: MenuItem) => void }) => {
    const navigate = useNavigate();

    return (
        <WrapperContainer2
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            gap={24}
            width="100%"
        >
            <SubTitle>
                ¡Bienvenido al Panel de Administración!"
            </SubTitle>
            <TextCard fontSize={14} textAlign="start" width="100%">
                Desde aquí puedes gestionar y configurar los principales servicios de la plataforma. <br />
                Utiliza el menú lateral para navegar entre las diferentes secciones.
            </TextCard>

            {getMenuItems(setSelectedItem).map((item: MenuItem, index: number) => (
                <ButtonCard
                    key={index} onClick={() => {
                        if (item.path) { navigate(item.path); }

                        setSelectedItem && setSelectedItem(item);
                    }}>
                    {item.description}
                </ButtonCard>
            ))}
        </WrapperContainer2>
    )
}

export { AdminHome };