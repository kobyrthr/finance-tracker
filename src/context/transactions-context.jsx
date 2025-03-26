'use client';
import { createContext } from 'react';

export const TransactionsContext = createContext({
  searchValue: '',
  setSearchValue: () => {},
  transactions: [],
  transaction: null,
  setTransaction: () => {},
  setTransactions: () => {},
  selectedStatuses: [],
  statuses: [],
  selectedStatuses: [],
  setSelectedStatuses: () => {},
  updateTransaction: (invoice) => {},
});
