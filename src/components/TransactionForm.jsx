import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const TransactionForm = () => {
  // DEFINO ESTADOS
  const [destinationType, setDestinationType] = useState('');
  const [sourceAccount, setSourceAccount] = useState('');
  const [destinationAccount, setDestinationAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [accounts, setAccounts] = useState([]); 

  // FUNCION PARA ENVIAR FORM
  const handleSubmit = async (event) => {
    event.preventDefault();

    const fullSourceAccount = `VIN-${sourceAccount}`;
    const fullDestinationAccount = `VIN-${destinationAccount}`;

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // alert('No token found. Please login again.');
        toast.error('No token found. Please login again.', {
          position: 'top-center'
        });
        return;
      }

      const response = await axios.post('https://homebanking-1ir2.onrender.com/api/transactions/', { 
        amount: parseFloat(amount), 
        description, 
        sourceAccount: fullSourceAccount, 
        destinationAccount: fullDestinationAccount
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      console.log(response.data);
      // alert('Your transaction was successfully sent');
      toast.success('Your transaction was successfully sent', {
        position: 'top-center'
      });
      
    } catch (error) {
      console.log('Error al realizar la transferencia', error);
      if (error.response && error.response.status === 403) {
        alert('You do not have permission to perform this transaction.');
      } else {
        // alert('Error to transaction');
        toast.error(error.response.data, {
          position: 'top-center'
        });
      }
    }
  };

  // FUNCION PARA OBTENER ACCOUNTS
  const getAccounts = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('No token found. Please login again.');
        return;
      }

      const response = await axios.get('https://homebanking-1ir2.onrender.com/api/clients/current/accounts', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      console.log(response.data);
      setAccounts(response.data); // Almacena las cuentas en el estado
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10 lg:mt-6 w-[360px]">
      <form onSubmit={handleSubmit}>
        {/* DESTINATION TYPE */}
        <div className="mb-4">
          <label htmlFor="destinationType" className="block text-gray-700 mb-2">Destination Type</label>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                value="Own"
                checked={destinationType === 'Own'}
                onChange={() => setDestinationType('Own')}
                className="mr-2"
              />
              Own
            </label>
            <label className="inline-flex items-center">
              <input type="radio"
                value="Others"
                checked={destinationType === 'Others'}
                onChange={() => setDestinationType('Others')}
                className="mr-2"
              />
              Others
            </label>
          </div>
        </div>
        {/* DESTINATION ACCOUNT */}
        <div className="mb-4">
          <label htmlFor="destinationAccount" className="block text-gray-700 mb-2">Destination Account</label>
          <div className="flex">
            <span className="flex items-center px-3 bg-gray-200 border border-r-0 border-gray-300 rounded-l">
              VIN-
            </span>
            <input
              type="text"
              id="destinationAccount"
              value={destinationAccount}
              onChange={(event) => setDestinationAccount(event.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-r"
            />
          </div>
        </div>
        {/* SOURCE ACCOUNT */}
        <div className="mb-4">
          <label htmlFor="sourceAccount" className="block text-gray-700 mb-2">Origin Account</label>
          <select
            id="sourceAccount"
            value={sourceAccount}
            onChange={(event) => setSourceAccount(event.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          >
            <option value="" disabled>Select an account</option>
            {
              accounts.map((account) => (
                <option key={account.id} value={account.number.replace('VIN-', '')}>
                  {account.number}
                </option>
              ))
            }
          </select>
        </div>
        {/* AMOUNT */}
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 mb-2">Amount</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-700">$</span>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className="block w-full p-2 pl-8 border border-gray-300 rounded"
            />
          </div>
        </div>
        {/* DESCRIPTION */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 mb-2">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* BUTTON */}
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;