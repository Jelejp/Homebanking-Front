import React from 'react';
import Link from './Link';
import { links } from '../utils/listaLinks';

const Header = () => {
    return (
        <header className="bg-[#3089E4]  shadow-sm  p-3 flex justify-around items-center ">
        <img src="src/assets/logo.png" alt="Logo" className='h-8' />
        <nav className="mt-2 items-center hidden lg:flex">
            {

            links.map(link => <Link  key = {link.name} name = {link.name} route = {link.route} icon = {link.icon} colour = {link.colour} />)

            }

          </nav>
      </header>
    );
};

export default Header;