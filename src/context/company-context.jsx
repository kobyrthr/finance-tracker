'use client';
import { createContext } from 'react';

export const CompanyContext = createContext({
  searchValue: '',
  setSearchValue: () => {},
  companies: [],
  company: null,
  setCompany: () => {},
  setCompanies: () => {},
  selectedStatuses: [],
  statuses: [],
  selectedStatuses: [],
  setSelectedStatuses: () => {},
  updateCompany: (invoice) => {},
});
