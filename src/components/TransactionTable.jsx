import React from 'react';

const TransactionTable = () => {
    return (
        <div className="mt-4 p-4">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 sm:px-6">TYPE</th>
                        <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 sm:px-6">AMOUNT</th>
                        <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 sm:px-6">DATE</th>
                        <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 sm:px-6">DESCRIPTION</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-2 py-4 text-green-600 sm:px-6">Credit</td>
                        <td className="px-2 py-4  sm:px-6">$25,000.0</td>
                        <td className="px-2 py-4  sm:px-6">24/04/24</td>
                        <td className="px-2 py-4  sm:px-6">Test credit</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-4 text-red-600 sm:px-6">Debit</td>
                        <td className="px-2 py-4  sm:px-6">$5,000.0</td>
                        <td className="px-2 py-4  sm:px-6">25/05/24</td>
                        <td className="px-2 py-4  sm:px-6">Test debit</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-4 text-green-600 sm:px-6">Credit</td>
                        <td className="px-2 py-4  sm:px-6">$200.0</td>
                        <td className="px-2 py-4  sm:px-6">30/05/24</td>
                        <td className="px-2 py-4  sm:px-6">Coffee. VIN0859985</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TransactionTable;
