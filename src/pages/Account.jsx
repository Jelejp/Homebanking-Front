import React from 'react';
import Menu from '../components/Menu';
import TransactionTable from '../components/TransactionTable';
import CarouselAccount from '../components/CarouselAccount';
import AccountDetails from '../components/AccountDetails';

const Account = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-[#000000] to-[#63edd8] min-h-screen'>
        <section className='md:hidden'>
          <Menu />
        </section>
        <main className='bg-black-200 w-full lg:flex lg:flex-col lg:items-center'>
          <section className='p-3'>
            <h2 className='text-xl text-center text-white font-bold'>YOUR SELECTED ACCOUNT</h2>
          </section>
          {/* <section className=' lg:w-full xl:w-[69vw] xl:ml-auto xl:mr-auto'>
            <CarouselAccount />
          </section> */}
          {/* ACCOUNT */}
          <AccountDetails />
          <section className='mt-8 flex justify-center flex-col items-center'>
            <h3 className='text-[19px] pl-2 text-white text-center font-bold'>Transactions Resume:</h3>
            <TransactionTable />
          </section>
        </main>
      </div>
    </>
  );
};

export default Account;
