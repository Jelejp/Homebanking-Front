
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AccountDetails = () => {
  const { id } = useParams();
  const [account, setAccount] = useState(null);

  const getAccountDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8080/api/clients/current/accounts/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setAccount(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAccountDetails();
  }, [id]);

  if (!account) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mt-2 flex flex-col items-center lg:mt-8'>
      <div className='bg-white w-[280px] mb-5 h-[180px] p-8 pl-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <p className='text-[15px] '>Number of Account {account.number}</p>
              <p className='text-[15px] '>Amount:</p>
              <p className='font-bold text-center '>${account.balance}</p>
              <p className='text-[15px] '>Data of create: {account.createdDate}</p>
      </div>
    </div>
  );
};

export default AccountDetails;