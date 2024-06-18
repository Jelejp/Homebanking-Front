
import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import axios from 'axios';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Loans = () => {
    // DECLARO ESTADO
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para manejar la carga inicial

    // FUNCION PARA OBTENER LOS DATOS DE LOANS DESDE LA API
    async function getData() {
        try {
            const token = localStorage.getItem('token');
            let response = await axios.get('https://homebanking-3jjh.onrender.com/api/auth/current', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response.data);
            // SE ACTUALIZA EL ESTADO CON LOS DATOS OBTENIDOS
            setData(response.data.loans);
            setLoading(false); // Finaliza la carga una vez se obtienen los datos
        } catch (error) {
            console.log(error);
        }
    }

    // SE EJECUTA GETDATA AL MONTAR EL COMPONENTE
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='bg-gradient-to-b from-[#000000] to-[#63edd8] min-h-[85vh]'>
            <section className='md:hidden'>
                <Menu />
            </section>
            <section className=''>
                <h1 className='text-xl text-center text-white font-bold mt-4'>YOUR LOANS</h1>
            </section>
            <section className='mt-8 flex flex-wrap gap-5 justify-center items-center lg:mt-8 '>
                {loading ? (
                    <p className="text-white text-center">Loading...</p>
                ) : data.length === 0 ? (
                    <p className="text-white text-center">You currently have no loans.</p>
                ) : (
                    data.map((loan) => (
                        <div key={loan.id} className='bg-[#ffff] w-[235px] ml-5 h-[145px] p-2 pl-2 rounded-md lg:w-[280px] lg:h-[180px] lg:p-8 lg:pl-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                            <p className='text-[15px] '>{loan.name}</p>
                            <p className='text-[15px] '>Amount:</p>
                            <p className='font-bold text-center '> ${loan.amount}</p>
                            <p className='text-[15px] '>Number of Instalments: {loan.payments}</p>
                            <p className='text-[15px] '>Date of application: 20/05/2024</p>
                        </div>
                    ))
                )}
            </section>
            <section className='flex justify-center mt-10'>
                <Link to='/apply-loan'>
                    <Button color={'green'}>APPLY FOR A NEW LOAN</Button>
                </Link>
            </section>
        </div>
    );
};

export default Loans;