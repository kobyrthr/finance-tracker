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
import { Card, CardContent } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  const {
    searchValue,
    setSearchValue,
    transactions,
    setTransaction,
    selectedStatuses,
    setSelectedStatuses,
  } = useContext(TransactionsContext);
  const [itemsToShow, setItemsToShow] = useState(9);
  const [sortBy, setSortBy] = useState('latest');

  const filteredData = transactions
    .filter((transaction) => {
      const matchesStatus =
        selectedStatuses.length > 0 && selectedStatuses[0] !== 'all'
          ? selectedStatuses.includes(transaction?.category)
          : true;

      const matchesSearch = searchValue
        ? transaction.name.toLowerCase().includes(searchValue.toLowerCase())
        : true;

      return matchesStatus && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'latest') {
        return new Date(b.date) - new Date(a.date);
      } else {
        return new Date(a.date) - new Date(b.date);
      }
    });

  const currentItems = filteredData.slice(0, itemsToShow);
  const hasMore = itemsToShow < filteredData.length;
  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 6);
  };

  const handleSort = (value) => {
    setSortBy(value);
  };

  const handleStatusChange = (status) => {
    if (!selectedStatuses?.includes(status)) {
      setSelectedStatuses([status]);
    }
  };

  return (
    <div className="flex flex-row border">
      <AppSidebar />
      <div className="sm:pl-[340px] flex flex-col flex-1 overflow-y-auto p-500">
        <Typography type="preset-1" className="mb-300" asChild>
          <h1>Transactions</h1>
        </Typography>
        <Card>
          <CardContent className="p-300">
            <div className="flex items-center justify-between mb-300">
              <Input
                placeholder="Search transaction"
                className="max-w-[300px]"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <div className="flex gap-300">
                <div className="flex items-center gap-100 w-fit">
                  <Typography type="preset-4" className="whitespace-nowrap">
                    Sort by
                  </Typography>
                  <Select onValueChange={handleSort} defaultValue="latest">
                    <SelectTrigger className="w-[114px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="latest">
                          <Typography type="preset-4">Latest</Typography>
                        </SelectItem>
                        <SelectItem value="oldest">
                          <Typography type="preset-4">Oldest</Typography>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-100">
                  <Typography type="preset-4">Category</Typography>
                  <Select onValueChange={handleStatusChange} defaultValue="all">
                    <SelectTrigger className="w-[177px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="all">
                          <Typography type="preset-4">
                            All Transactions
                          </Typography>
                        </SelectItem>
                        <SelectItem value="General">
                          <Typography type="preset-4">General</Typography>
                        </SelectItem>
                        <SelectItem value="Dining Out">
                          <Typography type="preset-4">Dining Out</Typography>
                        </SelectItem>
                        <SelectItem value="Groceries">
                          <Typography type="preset-4">Groceries</Typography>
                        </SelectItem>
                        <SelectItem value="Entertainment">
                          <Typography type="preset-4">Entertainment</Typography>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <Table containerClassName="px-4 py-0">
                <TableHeader>
                  <TableRow className="border-b-grey-100">
                    <TableHead className="">
                      <Typography type="preset-5">
                        Recipient / Sender
                      </Typography>
                    </TableHead>
                    <TableHead className="px-0 w-40">
                      <Typography type="preset-5">Category</Typography>
                    </TableHead>
                    <TableHead className="px-0 w-32">
                      <Typography type="preset-5">Transaction Date</Typography>
                    </TableHead>
                    <TableHead className="text-right w-48">
                      <Typography type="preset-5">Amount</Typography>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((transaction, index) => (
                    <TableRow className="py-4" key={transaction.name + index}>
                      <TableCell className="pl-2">
                        <div className="flex items-center gap-200">
                          <div className="w-[40px] h-[40px] rounded-full bg-grey-100">
                            <Image
                              src={transaction.avatar}
                              alt={transaction.name}
                              width={40}
                              height={40}
                              className="rounded-full"
                              unoptimized
                            />
                          </div>
                          <Typography type="preset-4-bold">
                            {transaction.name}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell className="text-grey-500 px-0">
                        <Typography type="preset-4">
                          {transaction.category}
                        </Typography>
                      </TableCell>
                      <TableCell className="text-grey-500">
                        <Typography type="preset-4">
                          {new Date(transaction.date).toLocaleDateString(
                            'en-GB',
                            {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            }
                          )}
                        </Typography>
                      </TableCell>
                      <TableCell className="text-right text-grey-500">
                        <Typography
                          type="preset-4-bold"
                          className={
                            transaction.amount > 0
                              ? 'text-green'
                              : 'text-grey-900'
                          }
                        >
                          {transaction.amount > 0 ? '+' : ''}
                          {transaction.amount}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="flex justify-center gap-100 mt-300">
              <Button variant="tertiary">Prev</Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 2 ? 'primary' : 'tertiary'}
                >
                  {page}
                </Button>
              ))}
              <Button variant="tertiary">Next</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
