import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TransactionTable = () => {
    const { id } = useParams();
    const [account, setAccount] = useState(null);

    const colourType = (type) => {
        if (type === 'CREDIT') {
            return 'text-green-500';
        } else if (type === 'DEBIT') {
            return 'text-red-500';
        }
        return '';
    };

    const getDataTransaction = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8080/api/clients/current/accounts/${id}`, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
            // console.log(response.data.transactions);
            setAccount(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getDataTransaction();
      }, [id]);

      if(!account) return <div>Loading...</div>

    return (
        <div className="mt-4 p-4">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr key={account.transactions.id}>
                        <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 sm:px-6">TYPE</th>
                        <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 sm:px-6">AMOUNT</th>
                        <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 sm:px-6">DATE</th>
                        <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 sm:px-6">DESCRIPTION</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {
                        account.transactions && account.transactions.length > 0 ? ( account.transactions .map(transaction => (
                            <tr key={transaction.id}>
                                <td className={`${colourType(transaction.type)} px-2 py-4 sm:px-6`}>{transaction.type}</td>
                                <td className="px-2 py-4  sm:px-6">${transaction.amount}</td>
                                <td className="px-2 py-4  sm:px-6">{transaction.date}</td>
                                <td className="px-2 py-4  sm:px-6">{transaction.description}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className=" text-center px-2 py-4 sm:px-6">No transactions found</td>
                        </tr>
                    )
                    }
                </tbody> 
            </table>
        </div>
    );
};

export default TransactionTable;
