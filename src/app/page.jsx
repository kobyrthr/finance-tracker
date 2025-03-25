'use client';
import { CompanyContext } from '@/context/company-context';
import { useContext, useState } from 'react';
import { Typography } from '@/components/ui/typography';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AppSidebar } from '@/components/ui/app-sidebar';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

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
    <div className="flex flex-row border">
      <AppSidebar />
      <div className="pl-[300px] flex flex-col flex-1 overflow-y-auto">
        <div className="">
          <Button variant="primary">Placeholder</Button>
          <Button variant="secondary">Placeholder</Button>
          <Button variant="tertiary">Placeholder</Button>
          <Button variant="destructive">Placeholder</Button>
        </div>

        <div className="">
          <Select>
            <SelectTrigger className="w-[320px] text-beige-500">
              <SelectValue placeholder="Placeholder" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="">
          <Input placeholder="Placeholder" />
        </div>
      </div>
    </div>
  );
}
