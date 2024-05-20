import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#3089E4]  shadow-sm  p-3 flex justify-center items-center mt-3'>
        <p> &copy;  All rights reserved 2024.</p>
        <div className='flex ml-4 justify-end items-end'>
        <a href="https://twitter.com/home"><img src="src\assets\icons-twitterx.png" alt="twitter" /></a>
        <a href="https://www.facebook.com/facebook/"><img src="src\assets\icons-facebook.png" alt="facebook" /></a>
        <a href="https://www.instagram.com"><img src="src\assets\icons-instagram.png" alt="instagram" /></a>
        <a href="https://web.whatsapp.com"><img src="src\assets\icons-whatsapp.png" alt="whatsapp" /></a>
        </div>
      </footer>
    );
};

export default Footer;