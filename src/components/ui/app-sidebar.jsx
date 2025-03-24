import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Typography } from './typography';
import HomeIcon from '@/../public/assets/images/icon-nav-overview.svg';
import ArrowsUpDownIcon from '@/../public/assets/images/icon-nav-transactions.svg';
import ChartPieIcon from '@/../public/assets/images/icon-nav-budgets.svg';
import PotsIcon from '@/../public/assets/images/icon-nav-pots.svg';
import WalletIcon from '@/../public/assets/images/icon-nav-recurring-bills.svg';
import MinimizeMenuicon from '@/../public/assets/images/icon-minimize-menu.svg';

export function AppSidebar({ className = '' }) {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar
      className={cn(
        'overflow-hidden! w-[300px] rounded-r-[20px] border-none bg-grey-900 text-grey-300',
        className
      )}
      collapsible="icon"
    >
      <SidebarHeader className="p-6">
        <Typography type="preset-2" className="text-white">
          finance
        </Typography>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="p-0">
          <nav className="flex flex-col">
            <Link
              href="/overview"
              className="flex items-center gap-3 py-200 px-400 hover:text-white"
            >
              <Image src={HomeIcon} alt="Home icon" width={20} height={20} />
              <Typography type="preset-3">Overview</Typography>
            </Link>
            <Link
              href="/transactions"
              className="flex items-center gap-3 py-200 px-400 hover:text-white"
            >
              <Image
                src={ArrowsUpDownIcon}
                alt="Transactions icon"
                width={20}
                height={20}
              />
              <Typography type="preset-3">Transactions</Typography>
            </Link>
            <Link
              href="/budgets"
              className="flex items-center gap-3 py-200 px-400 hover:text-white"
            >
              <Image
                src={ChartPieIcon}
                alt="Chart pie icon"
                width={20}
                height={20}
              />
              <Typography type="preset-3">Budgets</Typography>
            </Link>
            <Link
              href="/pots"
              className="flex items-center gap-3 py-200 px-400 hover:text-white"
            >
              <Image src={PotsIcon} alt="Pots icon" width={20} height={20} />
              <Typography type="preset-3">Pots</Typography>
            </Link>
            <Link
              href="/recurring-bills"
              className="flex items-center gap-3 py-200 px-400 hover:text-white"
            >
              <Image
                src={WalletIcon}
                alt="Wallet icon"
                width={20}
                height={20}
              />
              <Typography type="preset-3">Recurring bills</Typography>
            </Link>
          </nav>
        </SidebarGroup>

        <div className="mt-auto px-6 pb-6">
          <button
            onClick={toggleSidebar}
            className="flex items-center gap-3 text-gray-400 hover:text-white"
          >
            <Image
              src={MinimizeMenuicon}
              alt="Minimize Menu icon"
              width={20}
              height={20}
            />
            <Typography type="preset-4">Minimize Menu</Typography>
          </button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
