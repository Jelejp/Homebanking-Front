import React from 'react';
import Menu from '../components/Menu';
import StructureCardCredit from '../components/StructureCardCredit';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';


const Cards = () => {
    return (
        <>
            <div className='bg-gradient-to-b from-[#000000] to-[#63edd8] min-h-[84vh]'>
                <section className='md:hidden'>
                    <Menu />
                </section>
                <section className='m-auto'>
                    <h1 className='text-xl text-center text-white pt-3 font-bold'>YOUR CARDS</h1>
                    <section className='p-3 md:flex md:justify-center md:flex-col md:items-center'>
                        <div className=' rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] md:w-[600px]'>
                            <h2 className='text-white font-bold ml-3'>Cards</h2>
                            <div className='mt-1 flex flex-wrap gap-4 justify-center items-center'>
                                <StructureCardCredit />

                            </div>
                        </div>
                    </section>
                </section>
                <section className='flex justify-center mt-7'>
                    <Link to='/apply-card'>
                        <Button color={'teal'}>APPLY FOR A NEW CARD</Button>
                    </Link>
                </section>
            </div>
        </>

    );
};

export default Cards;