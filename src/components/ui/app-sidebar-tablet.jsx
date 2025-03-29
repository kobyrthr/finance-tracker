'use client';
import Link from 'next/link';
import { NavOverviewIcon } from '../icons/nav-overview-icon';
import { NavTransactionsIcon } from '../icons/nav-transactions-icon';
import { NavBudgetsIcon } from '../icons/nav-budgets-icon';
import { NavPotsIcon } from '../icons/nav-pots-icon';
import { NavRecurringBillsIcon } from '../icons/nav-recurring-bills-icon';
import { Typography } from './typography';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const AppSidebarTablet = () => {
  const pathname = usePathname();
  const items = [
    {
      title: 'Overview',
      url: '/overview',
      icon: NavOverviewIcon,
    },
    {
      title: 'Transactions',
      url: '/transactions',
      icon: NavTransactionsIcon,
    },
    {
      title: 'Budgets',
      url: '/budgets',
      icon: NavBudgetsIcon,
    },
    {
      title: 'Pots',
      url: '/pots',
      icon: NavPotsIcon,
    },
    {
      title: 'Recurring bills',
      url: '/recurring-bills',
      icon: NavRecurringBillsIcon,
    },
  ];

  return (
    <div className="fixed z-50 bottom-0 left-0 right-0 px-500 bg-grey-900 rounded-t-lg">
      <nav className="flex h-[72px] pt-2 items-center justify-between max-w-3xl mx-auto">
        {items.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            className={cn(
              'group flex h-full px-3.5 flex-col justify-center items-center gap-50 text-grey-300 hover:text-grey-100',
              {
                'text-grey-900 hover:text-grey-900 bg-beige-100 rounded-t-lg border-b-2 border-green':
                  pathname === item.url,
              }
            )}
          >
            {
              <item.icon
                className={cn({ 'text-green': pathname === item.url })}
              />
            }
            <Typography className="max-[480px]:hidden" type="preset-5-bold">
              {item.title}
            </Typography>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default AppSidebarTablet;
