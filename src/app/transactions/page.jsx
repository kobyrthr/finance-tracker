'use client';
import { TransactionsContext } from '@/context/transactions-context';
import { useContext, useEffect, useState } from 'react';
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
import {
  CaretLeft,
  CaretRight,
  Funnel,
  MagnifyingGlass,
  SortAscending,
} from '@phosphor-icons/react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { isUserAuth } from './actions';

export default function Home() {
  const router = useRouter();

  const {
    searchValue,
    setSearchValue,
    transactions,
    selectedStatuses,
    setSelectedStatuses,
  } = useContext(TransactionsContext);
  const [sortBy, setSortBy] = useState('latest');
  const isMobile = useIsMobile('small');

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
    let pageNumbers = [1, 2, '...'];

    if (!isMobile) {
      pageNumbers = [];
      // For desktop, keep existing pagination logic
      const maxVisiblePages = 10;
      let startPage = Math.max(
        1,
        currentPage - Math.floor(maxVisiblePages / 2)
      );
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
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

  useEffect(() => {
    isUserAuth();
  }, []);

  return (
    <div className="max-h-screen overflow-y size-full flex flex-row">
      <AppSidebar />
      <div
        className={cn(
          'flex flex-col flex-1 overflow-y-auto p-200 md:p-500 transition'
        )}
      >
        <Typography type="preset-1" className="mb-300" asChild>
          <h1>Transactions</h1>
        </Typography>
        <Card>
          <CardContent className="p-5 sm:p-300">
            <div className="flex items-center justify-between mb-300">
              <div className="relative">
                <Input
                  placeholder="Search transaction"
                  className="min-w-[170px] max-w-[300px] mr-4"
                  onChange={handleSearch}
                />
                <MagnifyingGlass
                  size={16}
                  className="text-grey-900 absolute right-5 top-1/2 -translate-y-1/2"
                />
              </div>
              <div className="flex gap-100 pl-100 md:gap-300">
                <div className="flex items-center gap-100 w-fit">
                  <Typography
                    type="preset-4"
                    className="whitespace-nowrap max-sm:hidden lg:max-xl:hidden"
                  >
                    Sort by
                  </Typography>
                  <Select onValueChange={handleSort} defaultValue="latest">
                    {isMobile ? (
                      <SelectTrigger
                        hideCaret={true}
                        className="max-w-[114px] border-0 sm:hidden p-2"
                      >
                        <SelectValue>
                          <SortAscending weight="fill" size={16} />
                          <div className="relative"></div>{' '}
                        </SelectValue>
                      </SelectTrigger>
                    ) : (
                      <SelectTrigger className="w-[114px] max-sm:hidden">
                        <SelectValue />
                      </SelectTrigger>
                    )}
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
                  <Typography
                    type="preset-4"
                    className="max-sm:hidden lg:max-xl:hidden"
                  >
                    Category
                  </Typography>
                  <Select onValueChange={handleStatusChange} defaultValue="all">
                    {isMobile ? (
                      <SelectTrigger
                        hideCaret={true}
                        className="max-w-[114px] border-0 sm:hidden p-2"
                      >
                        <SelectValue>
                          <Funnel weight="fill" size={16} />
                          <div className="relative"></div>{' '}
                        </SelectValue>
                      </SelectTrigger>
                    ) : (
                      <SelectTrigger className="w-[140px] md:w-[177px] max-sm:hidden">
                        <SelectValue />
                      </SelectTrigger>
                    )}
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="all">
                          <Typography
                            type="preset-4"
                            className="hidden md:block"
                          >
                            All Transactions
                          </Typography>
                          <Typography type="preset-4" className="md:hidden">
                            Transactions
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
              <Table containerClassName="px-0 sm:px-4 py-0">
                <TableHeader>
                  <TableRow className="border-b-grey-100 max-sm:hidden">
                    <TableHead className="min-w-64">
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
                    <TableRow className="" key={transaction.name + index}>
                      <TableCell className="p-0 sm:pl-2 py-4 h-fit">
                        <div className="flex items-center gap-100 sm:gap-200">
                          <div className="w-[40px] h-[40px] rounded-full bg-grey-100">
                            <Image
                              src={transaction.avatar}
                              alt={transaction.name}
                              width={40}
                              height={40}
                              className="rounded-full max-sm:size-8"
                              unoptimized
                            />
                          </div>
                          <div className="flex flex-col">
                            <Typography type="preset-4-bold">
                              {transaction.name}
                            </Typography>
                            <Typography
                              type="preset-5"
                              className="sm:hidden text-grey-500"
                            >
                              {transaction.category}
                            </Typography>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-grey-500 pl-0 max-sm:hidden">
                        <Typography type="preset-4">
                          {transaction.category}
                        </Typography>
                      </TableCell>
                      <TableCell className="text-grey-500 max-sm:hidden pl-0">
                        <Typography
                          type="preset-4"
                          className="whitespace-nowrap"
                        >
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
                      <TableCell className="text-right text-grey-500 pr-0">
                        <div className="flex flex-col">
                          <Typography
                            type="preset-4-bold"
                            className={
                              transaction.amount > 0
                                ? 'text-green'
                                : 'text-grey-900'
                            }
                          >
                            {transaction.amount > 0 ? '+' : ''}
                            {transaction.amount < 0 ? '-' : ''}$
                            {Math.abs(transaction.amount).toFixed(2)}
                          </Typography>

                          <Typography
                            type="preset-5"
                            className="sm:hidden text-grey-500 whitespace-nowrap"
                          >
                            {new Date(transaction.date).toLocaleDateString(
                              'en-GB',
                              {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              }
                            )}
                          </Typography>
                        </div>
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
                  className="group-hover:text-white text-grey-900 max-sm:hidden"
                >
                  Prev
                </Typography>
              </Button>
              <div className="flex gap-2">
                {getPageNumbers().map((page, index) => (
                  <Button
                    key={page + `${index}`}
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
                  className="group-hover:text-white text-grey-900 max-sm:hidden"
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
