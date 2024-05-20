import React from 'react';
import Menu from '../components/Menu';
import AccountForm from '../components/AccountForm';

const CreateAccount = () => {
    return (
        <>
            <section>
                <Menu />
            </section>
            <section className=''>
                <h1 className='text-xl text-center font-bold mt-4'>REQUEST ACCOUNT</h1>
            </section>
            <section className=' flex justify-center lg:bg-white lg:justify-around lg:h-[325px] lg:w-[950px] lg:m-auto lg:rounded-md'>
                <AccountForm />
                <div className='hidden lg:block lg:w-[400px] lg:items-center '>
                    <img src="src\assets\createAccount.png" alt="Card" className='' />
                </div>
            </section>
        </>
    );
};

export default CreateAccount;