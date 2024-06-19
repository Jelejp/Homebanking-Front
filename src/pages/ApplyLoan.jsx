import React from 'react';
import Menu from '../components/Menu';
import LoanForm from '../components/LoanForm';

const ApplyLoan = () => {
    return (
        <>
            <div className='bg-gradient-to-b from-[#000000] to-[#63edd8] min-h-screen'>
                <section className='md:hidden'>
                    <Menu />
                </section>
                <section >
                    <h1 className='text-xl text-center text-white font-bold mt-4'>APPLY FOR A LOAN</h1>
                </section>
                <section className=' flex justify-center lg:justify-around'>
                    <LoanForm />
                    <div className='hidden lg:block lg:w-[450px] '>
                        <img src="..\assets\loan.png" alt="" />
                    </div>
                </section>
            </div>

        </>
    );
};
export default ApplyLoan;