import React from 'react';

const AccountCard = () => {
    return (
        <>
    <section className=' mt-2 flex justify-center items-center h-[200px] lg:mt-8'>
        <div className='bg-red-600 w-[225px] ml-5 h-[125px] p-2 pl-2 rounded-md lg:w-[280px] lg:h-[180px] lg:p-8 lg:pl-4'>
              <p className='text-[15px] text-white'>Number of Account VIN-00001</p>
              <p className='text-[15px] text-white'>Amount:</p>
              <p className='font-bold text-center text-white'>$250.000,00</p>
              <p className='text-[15px] text-white'>Data of create: 15/05/2024</p>
            </div> 
    </section>
        
        </>
    );
};

export default AccountCard;