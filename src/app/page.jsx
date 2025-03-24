'use client';
import { CompanyContext } from '@/context/company-context';
import { useContext, useState } from 'react';
import { Typography } from '@/components/ui/typography';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AppSidebar } from '@/components/ui/app-sidebar';

export default function Home() {
  const router = useRouter();
  const { searchValue, companies, setCompany, selectedStatuses } =
    useContext(CompanyContext);
  const [itemsToShow, setItemsToShow] = useState(9);
  const filteredData = companies.filter((company) => {
    const matchesStatus = selectedStatuses
      ? selectedStatuses.includes(company?.contract)
      : true;

    const matchesSearch = searchValue
      ? company.company.toLowerCase().includes(searchValue.toLowerCase())
      : true;

    return matchesStatus && matchesSearch;
  });

  const currentItems = filteredData.slice(0, itemsToShow);
  const hasMore = itemsToShow < filteredData.length;
  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 6);
  };

  const handleClick = (company) => {
    setCompany(company);
    router.push(`/jobs/${company.id}`);
  };

  return (
    <div className="flex flex-col border">
      <AppSidebar />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex flex-col flex-1 bg-gray">hello world</div>
      </div>
    </div>
  );
}
