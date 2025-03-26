'use client';
import { TransactionsContext } from '@/context/transactions-context';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppSidebar } from '@/components/ui/app-sidebar';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

export default function Home() {
  const router = useRouter();
  const { searchValue, transactions, setTransaction, selectedStatuses } =
    useContext(TransactionsContext);
  const [itemsToShow, setItemsToShow] = useState(9);
  const filteredData = transactions.filter((transaction) => {
    const matchesStatus = selectedStatuses
      ? selectedStatuses.includes(transaction?.contract)
      : true;

    const matchesSearch = true;
    // ? transaction.company.toLowerCase().includes(searchValue.toLowerCase())
    // : true;

    return matchesStatus && matchesSearch;
  });

  const currentItems = filteredData.slice(0, itemsToShow);
  const hasMore = itemsToShow < filteredData.length;
  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 6);
  };

  const handleClick = (transaction) => {
    setCompany(transaction);
    router.push(`/transaction/${transaction.id}`);
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
