import React from 'react';
import Menu from '../components/Menu';
import TransactionForm from '../components/TransactionForm';

const Transactions = () => {
    return (
        <>
            <div className='bg-gradient-to-b from-[#000000] to-[#63edd8] min-h-[85vh] flex flex-col'>
                <section className='md:hidden'>
                    <Menu />
                </section>
                <section className=''>
                    <h1 className='text-xl text-center text-white font-bold mt-8'>MAKE A TRANSACTION</h1>
                </section>
                <section className=' flex justify-center lg:justify-around  lg:w-[950px] lg:mt-[100px] ml-auto mr-auto lg:rounded-md'>
                    <TransactionForm />
                    <div className='hidden lg:block lg:w-[400px] lg:items-center '>
                        <img src="public\transaction.png" alt="Card" className='' />
                    </div>
                </section>
            </div>

        </>
    );
};

export default Transactions;