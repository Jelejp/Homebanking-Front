import React from 'react';
import Menu from '../components/Menu';
import StructureCardCredit from '../components/StructureCardCredit';
import StructureCardDebit from '../components/StructureCardDebit';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';


const Cards = () => {
    return (
        <>
            <section>
                <Menu />
            </section>
            <h1 className='text-xl text-center pt-3 font-bold'>YOUR CARDS</h1>
            <section className='p-3 md:flex md:justify-center md:flex-col md:items-center'>
            <div className='bg-white rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] md:w-[600px]'>
                    <h2 className='font-bold ml-3'>Credit</h2>
                <div className='mt-1 flex flex-wrap gap-4 justify-center items-center'>
                    <StructureCardCredit/>
                  
                </div>
            </div>
                <div className='bg-white shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] mt-8 rounded-md md:w-[600px] '>
                    <h2 className='font-bold ml-3'>Debit</h2>
                    <div className='mt-1 flex flex-wrap gap-4 justify-center items-center'>
                        <StructureCardDebit/>
                    </div>
                </div>
            </section>
            <section className='flex justify-center mt-7'>
                <Link to= '/apply-card'>
                <Button color={'teal'}>APPLY FOR A NEW CARD</Button>
                </Link>
            </section>

        </>

    );
};

export default Cards;