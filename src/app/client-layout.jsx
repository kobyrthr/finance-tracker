'use client';
import { useState } from 'react';
import { TransactionsContext } from '@/context/transactions-context';
import DATA from '@/../public/data.json';

export default function ClientLayout({ children }) {
  const [selectedStatuses, setSelectedStatuses] = useState(['all']);
  const [transaction, setTransaction] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [transactions, setTransactions] = useState(DATA?.transactions ?? []);

  const updateTransaction = (inv) => {
    const newCompany = { ...invoice, ...inv };

    setTransaction(newInvoice);
    setTransactions(
      transactions.map((comp) => (comp.id === comp.id ? newCompany : comp))
    );
  };

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        transaction,
        setTransaction,
        setTransactions,
        selectedStatuses,
        setSelectedStatuses,
        updateTransaction,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
