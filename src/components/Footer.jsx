import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#000000] shadow-sm  p-3 flex justify-center items-center mt-3'>
        <p className='text-white'> &copy;  2024 FlexBank. All rights reserved.</p>
        <div className='flex ml-4 justify-end items-end'>
        <a href="https://github.com/Jelejp"><img className='w-[35px]' src="..\assets\icons8-github-48.png" alt="github" /></a>
        <a href="https://ar.linkedin.com/"><img className='w-[35px]' src="..\assets\icons8-linkedin-48.png" alt="facebook" /></a>
        <a href="https://www.instagram.com"><img className='w-[35px]' src="..\assets\icons8-instagram-48.png" alt="instagram" /></a>
        </div>
      </footer>
    );
};
export default Footer;