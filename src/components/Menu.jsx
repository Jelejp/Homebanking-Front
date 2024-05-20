import React, { useState } from 'react';
import Link from './Link';
import { links } from '../utils/listaLinks';

const Menu = () => {
  //DECLARO ESTADO PARA VER SI EL MENU ESTA ABIERTO O NO
  const [menuAbierto, setMenuAbierto] = useState(false);

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
          <img src="src\assets\icons-menu.png" alt="icon menu" />
        </div>
      </button>

      {/* SI EL MENU ESTA ABIERTO MUESTRO EL MENU */}
      {menuAbierto && (
        <div className="lg:hidden">
          <nav className="mt-2 space-y-2">
            {/* PARA CADA LINK SE CREA UN LINK */}
            {
              links.map(link => <Link key={link.name} name={link.name} route={link.route} icon={link.icon} colour={link.colour} />)
            }
          </nav>
        </div>
      )}
    </div>
  );
};

export default Menu;