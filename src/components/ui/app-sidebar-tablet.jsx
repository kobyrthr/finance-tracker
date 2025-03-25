import Link from 'next/link';
import { NavOverviewIcon } from '../icons/nav-overview-icon';
import { NavTransactionsIcon } from '../icons/nav-transactions-icon';
import { NavBudgetsIcon } from '../icons/nav-budgets-icon';
import { NavPotsIcon } from '../icons/nav-pots-icon';
import { NavRecurringBillsIcon } from '../icons/nav-recurring-bills-icon';
import { Typography } from './typography';

const AppSidebarTablet = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex h-[72px] items-center justify-between bg-grey-900 px-300 rounded-t-lg">
      <Link
        href="/overview"
        className="group flex flex-col items-center gap-50 text-grey-300 hover:text-grey-100"
      >
        <NavOverviewIcon className="" />
        <Typography className="max-[480px]:hidden" type="preset-5-bold">
          Overview
        </Typography>
      </Link>

      <Link
        href="/transactions"
        className="flex flex-col items-center gap-50 text-grey-300 hover:text-grey-100"
      >
        <NavTransactionsIcon className="" />
        <Typography className="max-[480px]:hidden" type="preset-5-bold">
          Transactions
        </Typography>
      </Link>

      <Link
        href="/budgets"
        className="flex flex-col items-center gap-50 text-grey-300 hover:text-grey-100"
      >
        <NavBudgetsIcon className="" />
        <Typography className="max-[480px]:hidden" type="preset-5-bold">
          Budgets
        </Typography>
      </Link>

      <Link
        href="/pots"
        className="flex flex-col items-center gap-50 text-grey-300 hover:text-grey-100"
      >
        <NavPotsIcon />
        <Typography className="max-[480px]:hidden" type="preset-5-bold">
          Pots
        </Typography>
      </Link>

      <Link
        href="/recurring-bills"
        className="flex flex-col items-center gap-50 text-grey-300 hover:text-grey-100"
      >
        <NavRecurringBillsIcon />
        <Typography className="max-[480px]:hidden" type="preset-5-bold">
          Recurring bills
        </Typography>
      </Link>
    </nav>
  );
};

export default AppSidebarTablet;
