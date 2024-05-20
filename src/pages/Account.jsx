import React from 'react';
import Menu from '../components/Menu';
import TransactionTable from '../components/TransactionTable';
import AccountCard from '../components/AccountCard';
import CarouselAccount from '../components/CarouselAccount';

const Account = () => {
    return (
        <>
              <section>
        <Menu />
      </section>
      <main className='bg-black-200 w-full min-h-[20vh] lg:flex lg:flex-col lg:items-center'>
        <section className='p-3'>
          <h2 className='text-xl text-center font-bold'>YOUR SELECTED ACCOUNT</h2>
        </section>
        <section className=' lg:w-full xl:w-[69vw] xl:ml-auto xl:mr-auto'> 
        <CarouselAccount/>
        </section>
        {/* ACCOUNT */}
        <AccountCard/>
        <section className='mt-8 flex justify-center flex-col items-center'>
        <h3 className='text-[19px] pl-2 text-center font-bold'>Transactions Resume:</h3>
        <TransactionTable/>
        </section>
      </main>
        </>
    );
};

export default Account;