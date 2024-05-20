import React from 'react';
import CardForm from '../components/CardForm';
import Menu from '../components/Menu';

const ApplyCard = () => {
    return (
        <>
            <section>
                <Menu />
            </section>
            <section className=''>
                <h1 className='text-xl text-center font-bold mt-4'>APPLY FOR A CARD</h1>
            </section>
            <section className=' flex justify-center lg:bg-white lg:justify-around lg:h-[325px] lg:w-[950px] lg:m-auto lg:rounded-md'>
                <CardForm />
                <div className='hidden lg:block lg:w-[400px] lg:items-center '>
                    <img src="src\assets\applyCard.png" alt="Card" className='' />
                </div>
            </section>
        </>
    );
};

export default ApplyCard;