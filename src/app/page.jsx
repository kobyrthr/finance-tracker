'use client';
import { TransactionsContext } from '@/context/transactions-context';
import { useContext, useState } from 'react';
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
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

export default function Home() {
  const {
    searchValue,
    setSearchValue,
    transactions,
    selectedStatuses,
    setSelectedStatuses,
  } = useContext(TransactionsContext);
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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 10;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const handlePageChange = (page) => {
    // Ensure page is within valid range
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);

      // Scroll to top of table when changing pages
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSort = (value) => {
    setSortBy(value);
  };

  const handleStatusChange = (status) => {
    if (!selectedStatuses?.includes(status)) {
      setSelectedStatuses([status]);
    }
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    setCurrentPage(1);
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
                onChange={handleSearch}
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
                  {getCurrentPageData().map((transaction, index) => (
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

            <div className="w-full flex justify-between gap-100 mt-300">
              <Button
                onClick={handlePrevPage}
                variant="outline"
                className="group px-4 py-2.5 gap-4"
              >
                <CaretLeft
                  weight="fill"
                  className="text-beige-500 group-hover:text-white"
                  size={16}
                />{' '}
                <Typography
                  type="preset-4"
                  className="group-hover:text-white text-grey-900"
                >
                  Prev
                </Typography>
              </Button>
              <div className="flex gap-2">
                {getPageNumbers().map((page) => (
                  <Button
                    key={page}
                    variant={page === currentPage ? 'primary' : 'outline'}
                    className="group px-4 py-2.5 gap-4"
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </Button>
                ))}
              </div>
              <Button
                onClick={handleNextPage}
                variant="outline"
                className="group px-4 py-2.5 gap-4"
              >
                <CaretRight
                  weight="fill"
                  className="text-beige-500 group-hover:text-white"
                  size={16}
                />{' '}
                <Typography
                  type="preset-4"
                  className="group-hover:text-white text-grey-900"
                >
                  Next
                </Typography>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
