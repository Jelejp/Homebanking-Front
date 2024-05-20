import React from 'react';
import Menu from '../components/Menu';
import TransactionForm from '../components/TransactionForm';

const Transactions = () => {
    return (
        <>
            <section>
                <Menu />
            </section>
            <section className=''>
                <h1 className='text-xl text-center font-bold mt-4'>MAKE A TRANSACTION</h1>
            </section>
            <section className=' flex justify-center lg:justify-around  lg:w-[950px] lg:m-auto lg:rounded-md'>
                <TransactionForm />
                <div className='hidden lg:block lg:w-[400px] lg:items-center '>
                    <img src="src\assets\transaction.png" alt="Card" className='' />
                </div>
            </section>
        </>
    );
};

export default Transactions;