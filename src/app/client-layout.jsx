'use client';
import { useState } from 'react';
import { CompanyContext } from '@/context/company-context';
import DATA from '@/../public/data.json';

export default function ClientLayout({ children }) {
  const statuses = ['Full Time', 'Part Time', 'Freelance'];
  const [selectedStatuses, setSelectedStatuses] = useState([
    'Full Time',
    'Part Time',
    'Freelance',
  ]);
  const [company, setCompany] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [companies, setCompanies] = useState(DATA);

  const updateCompany = (inv) => {
    const newCompany = { ...invoice, ...inv };

    setCompany(newInvoice);
    setCompanies(
      companies.map((comp) => (comp.id === comp.id ? newCompany : comp))
    );
  };

  return (
    <CompanyContext.Provider
      value={{
        companies,
        company,
        setCompany,
        setCompanies,
        statuses,
        selectedStatuses,
        setSelectedStatuses,
        updateCompany,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
}
