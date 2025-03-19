import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function AppNavbar({ className = '' }) {
  return (
    <nav
      className={cn(
        className,
        'w-full relative pb-6 h-40 rounded-none flex items-center justify-between gap-3 px-10 lg:px-40'
      )}
    >
      {/* <Image
        src={BgPatternHeader}
        alt="Header Background Pattern"
        className="hidden sm:block absolute rounded-bl-[80px] top-0 left-0 w-full h-full object-cover -z-10"
        priority
      />
      <Image
        src={BgPatternHeaderMobile}
        alt="Header Background Pattern"
        className="block sm:hidden absolute top-0 left-0 w-full h-full object-cover -z-10"
        priority
      /> */}
      <Link href="/">
        <Image src={logo} alt="Devjobs Logo" />
      </Link>
    </nav>
  );
}
