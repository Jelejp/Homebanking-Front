import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import axios from 'axios';
import CarouselAccount from '../components/CarouselAccount';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';


const Accounts = () => {
  //DECLARO ESTADO
  const [data, setData] = useState([]);

  //FUNCION PARA OBTENER LOS DATOS DESDE LA API
  async function getData() {
    try {
      let response = await axios.get('http://localhost:8080/api/clients/1')
      //SE ACTUALIZA EL ESTADO CON LOS DATOS OBTENIDOS
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  //SE EJECUTA GETDATA AL MONTAR COMP
  useEffect(() => {
    getData();
  },[]) //PARA EJECUTAR UNA SOLA VEZ

  return (
    <>
      <section>
        <Menu />
      </section>
      <main className='bg-black-200 w-full min-h-[20vh] lg:flex lg:flex-col lg:items-center'>
        <section className='p-3'>
          <h2 className='text-xl text-center font-bold uppercase'>WELCOME, {data.firsName} </h2>
        </section>
        <section className=' lg:w-full xl:w-[69vw] xl:ml-auto xl:mr-auto'> 
          <CarouselAccount/>
        </section>
        <section className='flex justify-center flex-wrap gap-3 mt-8'>
        {
          data.accounts && data.accounts.map(account => (
            <div key={account.id} className='bg-red-600 w-[280px] ml-5 h-[180px] p-8 pl-4 rounded-md'>
              <p className='text-[15px] text-white'>Number of Account {account.number}</p>
              <p className='text-[15px] text-white'>Amount:</p>
              <p className='font-bold text-center text-white'>${account.balance}</p>
              <p className='text-[15px] text-white'>Data of create: {account.createdDate}</p>
              <Button className='ml-auto mr-auto mt-2' color={'red'}>Details</Button>
            </div>
          ))
        }
        </section>
        <section className='flex justify-center mt-8'>
          <Link to = '/create-account'>
          <Button color={'cyan'}>CREATE NEW ACCOUNT</Button>
          </Link>
        </section>
      </main>
    </>
  );
};
export default Accounts;