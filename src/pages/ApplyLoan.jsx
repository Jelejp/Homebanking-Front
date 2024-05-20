import React from 'react';
import Menu from '../components/Menu';
import LoanForm from '../components/LoanForm';

const ApplyLoan = () => {
    return (
        <>
            <section>
                <Menu />
            </section>
            <section >
                <h1 className='text-xl text-center font-bold mt-4'>APPLY FOR A LOAN</h1>
            </section>
            <section className=' flex justify-center lg:justify-around'>
                <LoanForm />
                <div className='hidden lg:block lg:w-[450px] '>
                    <img src="src\assets\loan.png" alt="" />
                </div>
            </section>


        </>
    );
};

export default ApplyLoan;