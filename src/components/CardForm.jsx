import React, { useState } from 'react';

const CardForm = () => {
  const [cardType, setCardType] = useState('');
  const [cardMembership, setCardMembership] = useState('');

  const handleApply = () => {
    alert('Your card was successfully requested');
  };

  const handleCancel = () => {
    alert('Your request was canceled');
  };

  return (
    <form onSubmit={(event) => event.preventDefault()} className="flex flex-col p-6 bg-white rounded-lg shadow-md mt-10 lg:lg:h-[265px]">
      <div className="mb-4">
        <label htmlFor="cardType" className="block text-gray-700 mb-2">Select Card Type</label>
        <select
          id="cardType"
          value={cardType}
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
          onClick={handleApply}
          className="w-1/2 mr-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Apply
        </button>
        <button
          onClick={handleCancel}
          className="w-1/2 ml-2 p-2 bg-red-500 text-white rounded hover:bg-gray-700"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CardForm;
