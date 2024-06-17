import React from 'react';
import Menu from '../components/Menu';
import AccountForm from '../components/AccountForm';

const CreateAccount = () => {
    return (
        <>
            <div className='bg-gradient-to-b from-[#000000] to-[#63edd8] min-h-[87vh]'>

                <section>
                    <Menu />
                </section>
                <section className=''>
                    <h1 className='text-xl text-center text-white font-bold mt-[50px]'>REQUEST ACCOUNT</h1>
                </section>
                <section className=' flex justify-center lg:bg-white lg:justify-around lg:h-[465px] lg:w-[950px] lg:ml-auto lg:mr-auto mt-[150px] lg:rounded-md'>
                    <AccountForm />
                    <div className='hidden lg:block lg:w-[400px] lg:items-center '>
                        <img src="src\assets\createAccount.png" alt="Card" className='' />
                    </div>
                </section>
            </div>
        </>
    );
};

export default CreateAccount;