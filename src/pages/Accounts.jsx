import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import axios from 'axios';
import CarouselAccount from '../components/CarouselAccount';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Accounts = () => {
  //DECLARO ESTADO
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Hook de navegación

  //FUNCION PARA OBTENER LOS DATOS DESDE LA API
  async function getData() {
    try {
      const token = localStorage.getItem('token');
      let response = await axios.get('http://localhost:8080/api/auth/current', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(response.data);
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


  const handleDetailsClick = (accountId) => {
    navigate(`/account/${accountId}`); // Navega a la página de detalles de la cuenta
  };

  const createAccount = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8080/api/clients/current/accounts', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log( response.data);
      //alert('Account created successfully');
      toast.success('Account created successfully', {
        position: 'top-center'
      });
      // Actualiza el estado con la nueva cuenta
      setData(prevData => ({
            ...prevData, // Copia todas las propiedades del estado anterior
            accounts: [...prevData.accounts, response.data] // Añade la nueva cuenta al array de cuentas
            }));
    } catch (error) {
      console.error('Error creating account:', error.response.data);
      // alert('Error creating account:', error.response.data);
      toast.error('Error creating account:', error.response.data, {
        position: 'top-center'
      });
    }
  };

  return (
    <>
<div className='bg-gradient-to-b from-[#000000] to-[#63edd8] min-h-screen'>
      <section className=' md:hidden'>
        <Menu />
      </section>
      <main className=' w-full lg:flex lg:flex-col lg:items-center'>
        <section className='p-3'>
           <h2 className='text-xl text-center  text-white font-bold uppercase'>WELCOME, {data.firstName} </h2> 
        </section>
        <section className=' lg:w-full xl:w-[69vw] xl:ml-auto xl:mr-auto'> 
          <CarouselAccount/>
        </section>
        <section className='flex justify-center flex-wrap gap-3 mt-8'>
        {
          data.accounts && data.accounts.map(account => (
            <div key={account.id} className='bg-[#ffff] w-[280px] ml-5 h-[180px] p-8 pl-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
              <p className='text-[15px] '>Number of Account {account.number}</p>
              <p className='text-[15px] '>Amount:</p>
              <p className='font-bold text-center '>${account.balance}</p>
              <p className='text-[15px] '>Data of create: {account.createdDate}</p>

                     <Button className='ml-auto mr-auto mt-2' color={'red'} onClick={() => handleDetailsClick(account.id)}>Details</Button>
            </div>
          ))
        }
        </section>
        <section className='flex justify-center mt-8'>
          {/* <Link to = '/create-account'> */}
          <Button color={'cyan'} onClick={createAccount}>CREATE NEW ACCOUNT</Button>
          {/* </Link> */}
        </section>
      </main>
  </div>      
    </>
  );
};
export default Accounts;