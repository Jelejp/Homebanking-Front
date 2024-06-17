import React from 'react';
import { dataHeader } from '../utils/HeaderData';
import { Link } from 'react-router-dom';

const HeaderHome = () => {

  return (
    <>
        <header className="bg-[#000000] py-6 flex justify-center">
          <h1 className="text-white text-2xl font-bold">
            <Link to="/" className="hover:text-[#8EFBEB] transition-colors">
              Flex<span className="text-[#8EFBEB]">Bank</span>
            </Link>
          </h1>
          <nav className="ml-4 flex items-center space-x-4">
            {dataHeader.map(({ id, nameSection, idLink }) => (
              <div key={id}>
                <a href={idLink} className="text-white hover:text-[#8EFBEB] transition-colors">
                  {nameSection}
                </a>
              </div>
            ))}
          </nav>
        </header>
    </>
  );
};

export default HeaderHome;