'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar,
  SidebarMenuItem,
  SidebarMenu,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Typography } from './typography';
import LogoSmallIcon from '@/../public/assets/images/logo-small.svg';
import LogoLargeIcon from '@/../public/assets/images/logo-large.svg';
import { Button } from './button';
import { useIsMobile } from '@/hooks/use-mobile';
import AppSidebarTablet from './app-sidebar-tablet';
import { NavOverviewIcon } from '../icons/nav-overview-icon';
import { NavTransactionsIcon } from '../icons/nav-transactions-icon';
import { NavBudgetsIcon } from '../icons/nav-budgets-icon';
import { NavPotsIcon } from '../icons/nav-pots-icon';
import { NavRecurringBillsIcon } from '../icons/nav-recurring-bills-icon';
import { NavMinimizeMenu } from '../icons/nav-minimize-menu';
import { usePathname } from 'next/navigation';

export function AppSidebar({ className = '' }) {
  const { toggleSidebar, state } = useSidebar();
  const isMobile = useIsMobile();
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

  return isMobile ? (
    <AppSidebarTablet />
  ) : (
    <Sidebar
      className={cn(
        'overflow-hidden! h-full relative border-none bg-grey-900 text-grey-300 transition-all',
        { 'w-[300px] rounded-r-[20px]': state === 'expanded' },
        className
      )}
      collapsible="icon"
    >
      <SidebarHeader className="p-10 px-8 items-center justify-center transition-all">
        <Image
          src={LogoLargeIcon}
          alt={`logo large icon`}
          width={122}
          height={22}
          className={cn(' self-start', { hidden: state === 'collapsed' })}
          unoptimized
        />
        <Image
          src={LogoSmallIcon}
          alt={`logo small icon`}
          width={13}
          height={22}
          className={cn({ hidden: state === 'expanded' })}
          unoptimized
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="p-0">
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem
                key={item.title}
                className={cn({ 'pr-8': state === 'expanded' })}
              >
                <SidebarMenuButton
                  asChild
                  variant="ghost"
                  className={cn('relative', {
                    'mx-auto': state === 'collapsed',
                    '!rounded-xl': state === 'collapsed',
                  })}
                  isActive={item.url === pathname}
                >
                  <a
                    href={item.url}
                    className={cn({
                      'text-grey-900 hover:text-grey-500 border-l-4 !pl-7 border-green':
                        item.url === pathname,
                      'border-l-0':
                        state === 'collapsed' && item.url === pathname,
                    })}
                  >
                    <item.icon
                      className={cn({
                        'text-green': item.url === pathname,
                      })}
                    />
                    <Typography asChild type="preset-3">
                      <span>{item.title}</span>
                    </Typography>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarFooter className="mt-auto pb-6">
          <SidebarMenu>
            <SidebarMenuItem className="flex">
              <SidebarMenuButton asChild variant="ghost">
                <Button
                  onClick={toggleSidebar}
                  variant="ghost"
                  className={cn(
                    'flex items-center justify-start cursor-pointer gap-3 !py-2',
                    {
                      'mx-auto': state === 'collapsed',
                    }
                  )}
                >
                  <NavMinimizeMenu
                    className={cn({ 'rotate-180': state === 'collapsed' })}
                  />
                  <Typography asChild type="preset-3">
                    <span>Minimize Menu</span>
                  </Typography>
                </Button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
