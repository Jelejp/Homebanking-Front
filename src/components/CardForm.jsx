import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const CardForm = () => {
  //DEFINO ESTADOS
  const [cardType, setCardType] = useState('');
  const [cardMembership, setCardMembership] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState('');

  //FUNCION PARA ENVIAR LOS DATOS DEL FORMULARIO A LA API
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('https://homebanking-1ir2.onrender.com/api/clients/current/cards', {
        type: cardType,
        color: cardMembership
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      // Mostrar mensaje de éxito y resetear formulario
      // alert('Your card was successfully requested');
      toast.success('Your card was successfully requested', {
        position: 'top-center'
      });
      setCardType('');
      setCardMembership('');
    } catch (error) {
      console.error(error);
      // alert('There was an error requesting your card');
      toast.error('There was an error requesting your card', {
        position: 'top-center'
      });
    }
  };

  // //FUNCION PARA MOSTRAR LA ALERTA AL CANCELAR
  // const handleCancel = () => {
  //   alert('Your request was canceled');
  // };

  return (
    <form className="flex flex-col p-6 bg-white rounded-lg shadow-md mt-10 lg:lg:h-[265px]">
      <div className="mb-4">
        <label htmlFor="cardType" className="block text-gray-700 mb-2">Select Card Type</label>
        <select
          id="cardType"
          value={cardType}
          //cuando ocurra un cambio
          onChange={(event) => setCardType(event.target.value)}
          className="block w-full p-2 border border-gray-300 rounded"
        >
          <option value="" disabled>Select a card type</option>
          <option value="Debit">Debit</option>
          <option value="Credit">Credit</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="cardMembership" className="block text-gray-700 mb-2">Select Card Membership (Colour)</label>
        <select
          id="cardMembership"
          value={cardMembership}
          //cuando ocurra un cambio
          onChange={(event) => setCardMembership(event.target.value)}
          className="block w-full p-2 border border-gray-300 rounded"
        >
          <option value="" disabled>Select a card membership</option>
          <option value="Gold">Gold</option>
          <option value="Titanium">Titanium</option>
          <option value="Silver">Silver</option>
        </select>
      </div>
      <div className="flex justify-between">
        <button
          //cuando se haga click
          onClick={handleSubmit}
          className="w-1/2 flex justify-center p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Apply
        </button>
        {/* <button
          onClick={handleCancel}
          className="w-1/2 ml-2 p-2 bg-red-500 text-white rounded hover:bg-gray-700"
        >
          Cancel
        </button> */}
      </div>
    </form>
  );
};

export default CardForm;