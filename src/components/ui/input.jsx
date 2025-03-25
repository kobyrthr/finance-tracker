import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type ?? 'text'}
      className={cn(
        'flex h-[45px] w-full rounded-[var(--spacing-100)] bg-white px-5 py-3 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-beige-500 placeholder:text-beige-500 disabled:cursor-not-allowed disabled:opacity-50  text-grey-900 border border-beige-500 focus-visible:outline-none font-normal text-[14px] leading-[150%] tracking-[0px]',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
