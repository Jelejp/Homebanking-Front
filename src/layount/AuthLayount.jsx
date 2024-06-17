import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AuthLayount = (props) => {

    return (
        <>
            <Header />
            <main className=' flex min-h-[83vh] w-full flex-col'>
                {props.children}
            </main>
            <Footer />
        </>
    );
};

export default AuthLayount;