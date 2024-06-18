
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const LoanForm = () => {
  const [loanType, setLoanType] = useState('');
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentTerm, setPaymentTerm] = useState('');
  const [maxAmount, setMaxAmount] = useState(0);
  const [paymentOptions, setPaymentOptions] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [sourceAccount, setSourceAccount] = useState('');
  const [loans, setLoans] = useState([]);

  const handleLoanTypeChange = (event) => {
    const selectedLoanId = parseInt(event.target.value, 10);
    setLoanType(selectedLoanId);

    const selectedLoan = loans.find(loan => loan.id === selectedLoanId);
    console.log('Selected Loan:', selectedLoan);

    if (selectedLoan) {
      setMaxAmount(selectedLoan.maxAmount);
      setPaymentOptions(selectedLoan.availableIntallments || []);
    } else {
      setMaxAmount(0);
      setPaymentOptions([]);
    }
  };

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

      console.log('Accounts:', response.data);
      setAccounts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getLoans = async () => {
    try {
      const token = localStorage.getItem('token');
      let response = await axios.get('https://homebanking-1ir2.onrender.com/api/loans', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('Loans:', response.data);
      setLoans(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAccounts();
    getLoans();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const token = localStorage.getItem('token');
      const data = {
        loandId: parseInt(loanType, 10), // Convertir loanType a número
        destinationAccount: `VIN-${sourceAccount}`, 
        amount: parseFloat(amount), // Convertir amount a número
        installments: parseInt(paymentTerm, 10) // Convertir paymentTerm a número
      };

      console.log('Data to be sent:', data);

      if (data.destinationAccount <= 0 || data.installments <= 0) {
        // alert("Loan amount and installments must be greater than 0");
        toast.error('Loan amount and installments must be greater than 0', {
          position: 'top-center'
        });
        return;
      }

      let response = await axios.post('https://homebanking-1ir2.onrender.com/api/loans', data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);
      // alert('Your request was successfully sent');
      toast.success('Your request was successfully sent', {
        position: 'top-center'
      });
    } catch (error) {
      console.log(error);
      if (error.response) {
        console.log('Response data:', error.response.data);
        toast.error(error.response.data, {
          position: 'top-center'
        });
      }
    }
  };

  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-md mt-5 w-[350px] lg:h-[525px]">
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
            {loans.map((loan) => (
              <option key={loan.id} value={loan.id}>{loan.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="sourceAccount" className="block text-gray-700 mb-2">Source Account</label>
          <select
            id="sourceAccount"
            value={sourceAccount}
            onChange={(event) => setSourceAccount(event.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          >
            <option value="" disabled>Select an account</option>
            {accounts.map((account) => (
              <option key={account.id} value={account.number.replace('VIN-', '')}>
                {account.number}
              </option>
            ))}
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
              <p className="text-sm text-gray-500">Max amount for selected loan is ${maxAmount}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="paymentTerm" className="block text-gray-700 mb-2">Payment Term</label>
          <select
            id="paymentTerm"
            value={paymentTerm}
            onChange={(event) => setPaymentTerm(event.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          >
            <option value="" disabled>Select a payment term</option>
            {(paymentOptions || []).map((term) => (
              <option key={term} value={term}>{term} months</option>
            ))}
          </select>
        </div>
        <button type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Request
        </button>
      </form>
    </div>
  );
};

export default LoanForm;