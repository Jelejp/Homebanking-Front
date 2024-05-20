import React, { useState } from 'react';

const TransactionForm = () => {
  //DEFINO ESTADOS
  const [destinationType, setDestinationType] = useState('');
  const [originAccount, setOriginAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  //FUNCION PARA MOSTRAR LA ALERTA AL ENVIAR FORM
  const handleSubmit = () => {
    alert('Your transaction was successfully sent');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10 lg:mt-6 w-[360px]">
      <form onSubmit={handleSubmit}>
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
              <input
                type="radio"
                value="Others"
                checked={destinationType === 'Others'}
                onChange={() => setDestinationType('Others')}
                className="mr-2"
              />
              Others
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="originAccount" className="block text-gray-700 mb-2">Origin Account</label>
          <select
            id="originAccount"
            value={originAccount}
            onChange={(event) => setOriginAccount(event.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          >
            <option value="" disabled>Select an account</option>
            <option value="VIN0001">VIN0001</option>
            <option value="VIN0002">VIN0002</option>
          </select>
        </div>
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