import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import logo from '@/../public/logo.svg';
import ImageAvatar from '@/../public/image-avatar.jpg';
import { cn } from '@/lib/utils';

export function AppSidebar({ className = '' }) {
  return (
    <Sidebar
      className={cn('overflow-hidden !rounded-r-[20px] border-none', className)}
    >
      <SidebarHeader className="p-0">
        <Image src={logo} alt="Invoice App Logo" width={103} height={103} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />

        <Image
          src="/icon-moon.svg"
          className="mx-auto mt-auto py-8"
          alt="Moon Icon"
          width={20}
          height={20}
        />
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-foreground flex items-center justify-center px-8 py-6">
        <Image
          className="rounded-full"
          src={ImageAvatar}
          alt="Avatar"
          width={40}
          height={40}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
