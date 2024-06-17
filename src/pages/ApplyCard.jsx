import React from 'react';
import CardForm from '../components/CardForm';
import Menu from '../components/Menu';

const ApplyCard = () => {
    return (
        <>
        <div className='bg-gradient-to-b from-[#000000] to-[#63edd8] min-h-[86vh] flex flex-col '>
            <section className='md:hidden'>
                <Menu />
            </section>
            <section className=''>
                <h1 className='text-xl text-center text-white font-bold mt-4'>APPLY FOR A CARD</h1>
            </section>
            <section className=' flex justify-center  lg:bg-white lg:justify-around lg:h-[325px] lg:w-[950px] mt-[100px] ml-auto mr-auto lg:rounded-md'>
                <CardForm />
                <div className='hidden lg:block lg:w-[400px] lg:items-center '>
                    <img src="src\assets\applyCard.png" alt="Card" className='' />
                </div>
            </section>

        </div>
        </>
    );
};

export default ApplyCard;