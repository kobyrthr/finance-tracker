import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type ?? 'text'}
      className={cn(
        'flex h-[61px] w-full  rounded-xl bg-white px-5 py-3.5 text-[24px] font-bold tracking-[-0.25px] shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-grey-500 text-blue-900 border border-grey-500 focus-visible:!border-color-02 focus-visible:outline-none font-semibold leading-[120%] tracking-[-5%]',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
