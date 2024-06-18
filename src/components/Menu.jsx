import React, { useState } from 'react';
import Link from './Link';
import { links } from '../utils/listaLinks';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';
import { Link as LinkR } from 'react-router-dom';

const Menu = () => {
  const dispatch = useDispatch();
  //DECLARO ESTADO PARA VER SI EL MENU ESTA ABIERTO O NO
  const [menuAbierto, setMenuAbierto] = useState(false);

    // Función para manejar el cierre de sesión
    const handleLogout = () => {
      dispatch(logout()); // Dispara la acción de cerrar sesión
      localStorage.removeItem('token'); // Limpia token u otra información en localStorage
      //return <Navigate to="/" replace />;
      return <LinkR to="/"/>
  };

  //FUNCION PARA CAMBIAR EL ESTADO
  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div className='mt-2 ml-2'>
      <button
        className="block lg:hidden "
        onClick={toggleMenu}
      >
        <div>
          <img className='w-[25px]' src="src\assets\icons8-menu-50.png" alt="icon menu" />
        </div>
      </button>

      {/* SI EL MENU ESTA ABIERTO MUESTRO EL MENU */}
      {menuAbierto && (
        <div className="lg:hidden">
          <nav className="mt-2 space-y-2">
            {/* PARA CADA LINK SE CREA UN LINK */}
            {
              links.map(link => <Link key={link.name} name={link.name} route={link.route} />)
            }

          {/* Opción de cerrar sesión */}
          <button onClick={handleLogout} className="text-red-500 hover:text-red-700">
           Logout
           </button>
          </nav>
        </div>
      )}
    </div>
  );
};
export default Menu;