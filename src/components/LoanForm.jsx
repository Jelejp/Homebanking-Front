import React, { useState } from 'react';

const LoanForm = () => {
  //DEFINO ESTADOS
  const [loanType, setLoanType] = useState('');
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentTerm, setPaymentTerm] = useState('');
  const [maxAmount, setMaxAmount] = useState(0);
  const [paymentOptions, setPaymentOptions] = useState([]);

  //FUNCION PARA CAMBIAR EL ESTADO DE LOANTYPE
  const handleLoanTypeChange = (event) => {
    const selectedLoan = event.target.value;
    setLoanType(selectedLoan);

    //CONDICINAL DE CASOS 
    switch (selectedLoan) {
      case 'Mortgage':
        setMaxAmount(500000);
        setPaymentOptions([12, 24, 36, 48, 60]);
        break;
      case 'Personal':
        setMaxAmount(100000);
        setPaymentOptions([6, 12, 24]);
        break;
      case 'Automotive':
        setMaxAmount(300000);
        setPaymentOptions([6, 12, 24]);
        break;
      default:
        setMaxAmount(0);
        setPaymentOptions([]);
    }
  };

  //FUNCION PARA MOSTRAR LA ALERTA AL ENVIAR FORM
  const handleSubmit = () => {
    alert('Your request was successfully sent');
  };

  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-md mt-5 w-[350px] lg:h-[525px]" >
      <h2 className="text-2xl font-bold mb-4">Select Loan</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="loanType" className="block text-gray-700 mb-2">Loan Type</label>
          <select
            id="loanType"
            value={loanType}
            onChange={handleLoanTypeChange}
            className="block w-full p-2 border border-gray-300 rounded"
          >
            <option value="" disabled>Select a loan type</option>
            <option value="Mortgage">Mortgage</option>
            <option value="Personal">Personal</option>
            <option value="Automotive">Automotive</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="account" className="block text-gray-700 mb-2">Source account</label>
          <select
            id="account"
            value={account}
            onChange={(event) => setAccount(event.target.value)}
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
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              max={maxAmount}
              className="block w-full pl-7 p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="h-6">
            {loanType && (
              <p className="text-sm text-gray-500">Max amount for {loanType} loan is ${maxAmount}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="paymentTerm" className="block text-gray-700 mb-2">Payment</label>
          <select
            id="paymentTerm"
            value={paymentTerm}
            onChange={(event) => setPaymentTerm(event.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          >
            <option value= "" disabled>Select a payment term</option>
            {/* MAPEO PLAZO */}
            {paymentOptions.map((term) => (
              <option key={term} value={term}>{term} months</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Request
        </button>
      </form>
    </div>
  );
};

export default LoanForm;