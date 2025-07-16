import React, { useState } from 'react';
import { WrapperContainer2 } from '../WrapperContainers';
import { ButtonCard } from '../ButtonCard';
import { useAuth } from '../../../Context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem } from 'react-pro-sidebar';
import { FaSignOutAlt } from 'react-icons/fa';

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
        <Menu>
            {user && (
                <MenuItem style={{
                    padding: '0px 15px',
                    margin: '5px 0px',
                    borderRadius: '5px',
                    color: 'var(--pallete-2)',
                    fontSize: '10px',
                    height: 'auto',
                }}>
                    <div style={{ fontWeight: 'bold' }}>{user?.user_metadata?.name}</div>
                    <div style={{ fontWeight: 'bold' }}>{user?.user_metadata?.email}</div>
                </MenuItem>
            )}

            <MenuItem
                icon={<FaSignOutAlt />}
                style={{
                    padding: '0px 15px',
                    margin: '5px 0px',
                    borderRadius: '5px',
                    color: 'var(--pallete-2)',
                    fontSize: '10px',
                    height: 'auto',
                }}
                className='menu-item'
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? 'Cerrando sesión...' : 'Cerrar sesión'}
            </MenuItem>
        </Menu>
    );
};

export default SidebarFooterInfo;