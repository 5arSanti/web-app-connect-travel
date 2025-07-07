import React, { useState } from 'react';
import { WrapperContainer2 } from '../WrapperContainers';
import { ButtonCard } from '../ButtonCard';
import { useAuth } from '../../../Context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SidebarFooterInfo = () => {
    const { logout, user } = useAuth();
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleSubmit = async () => {

        try {
            setLoading(true);
            const result = await logout();

            if (result.success) {
                toast.success('¡Sesión cerrada exitosamente!');
                navigate("/home");
            } else {
                toast.error(result.error);
            }
        } catch (error) {
            toast.error('Error al cerrar sesión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <WrapperContainer2
            justifyContent='center'
            alignItems='center'
            padding={16}
        >

            <div style={{ fontWeight: 'bold' }}>{user?.user_metadata?.name}</div>
            <div style={{ fontWeight: 'bold' }}>{user?.user_metadata?.email}</div>

            <ButtonCard
                className='menu-item'
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? 'Cerrando sesión...' : 'Cerrar sesión'}
            </ButtonCard>
        </WrapperContainer2>
    );
};

export default SidebarFooterInfo;