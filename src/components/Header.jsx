
import React from 'react';
import Link from './Link';
import { links } from '../utils/listaLinks';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';
import { Link as LinkR } from 'react-router-dom';

const Header = () => {

    const dispatch = useDispatch();

    // Función para manejar el cierre de sesión
    const handleLogout = () => {
     dispatch(logout()); // Dispara la acción de cerrar sesión
     localStorage.removeItem('token'); // Limpia token u otra información en localStorage
     //return <Navigate to="/" replace />;
    return <LinkR to="/"/>
    }

    return (
        <header className="bg-[#000000] py-6 flex justify-center">
            <h1 className="text-white hover:text-[#8EFBEB] text-2xl font-bold">
                Flex<span className="text-[#8EFBEB]">Bank</span>
            </h1>
            <nav className="ml-4 pl-10 hidden md:flex items-center space-x-4"> {/* Mostrar en pantallas medianas y más grandes */}
                {links.map(link => (
                    <Link key={link.name} name={link.name} route={link.route} icon={link.icon} colour={link.colour} />
                ))}
            {/* Opción de cerrar sesión */}
          <button onClick={handleLogout} className="text-red-500 hover:text-red-700 mt-[6px]">
           Logout
           </button>
            </nav>
        </header>
    );
};

export default Header;