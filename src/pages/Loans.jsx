import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import axios from 'axios';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Loans = () => {
    //DECLARO ESTADO
    const [data, setData] = useState([]);
    //FUNCION PARA OBTENER LOS DATOS DE LOANS DESDE LA API
    async function getData() {
      try {
        let response = await axios.get('http://localhost:8080/api/clients/1')
        //SE ACTUALIZA EL ESTADO CON LOS DATOS OBTENIDOS
         setData(response.data.loans); 
      } catch (error) {
        console.log(error);
      }
    }

    //SE EJECUTA GETDATA AL MONTAR COMP
    useEffect(() => {
      getData();
    },[])  //PARA EJECUTAR UNA SOLA VEZ
    
    return (
        <>
        <section>
            <Menu />
        </section>
        <section className=''>
            <h1 className='text-xl text-center font-bold mt-4'>YOUR LOANS</h1>
            </section>
            <section  className='mt-8 flex flex-wrap gap-5 justify-center items-center  lg:mt-8 '>
        
        {
          data.map(loan => 

            <div key={loan.id} className='bg-orange-500 w-[235px] ml-5 h-[145px] p-2 pl-2 rounded-md lg:w-[280px] lg:h-[180px] lg:p-8 lg:pl-4'>
            <p className='text-[15px] text-white'>{loan.name}</p>
            <p className='text-[15px] text-white'>Amount:</p>
            <p className='font-bold text-center text-white'>{loan.amount}</p>
            <p className='text-[15px] text-white'>Number of Instalments: {loan.payments}</p>
            <p className='text-[15px] text-white'>Date of application: 20/05/2024</p>
          </div>
          )
        }
        </section>
        <section className='flex justify-center mt-10'>
          <Link to='/apply-loan'>
          <Button  color={'green'}>APPLY FOR A NEW LOAN</Button>
          </Link>
        </section>
        </>
    );
};

export default Loans;