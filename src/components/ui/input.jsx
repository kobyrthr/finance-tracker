import * as React from 'react';

import { cn } from '@/lib/utils';
import { Eye, EyeClosed } from '@phosphor-icons/react';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className="relative">
      <input
        type={type ?? 'text'}
        className={cn(
          'flex h-[45px] w-full rounded-[var(--spacing-100)] bg-white px-5 py-3 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-beige-500 placeholder:text-beige-500 disabled:cursor-not-allowed disabled:opacity-50  text-grey-900 border border-grey-500 hover:border-grey-900 focus:border-grey-900 focus-visible:outline-none font-normal text-[14px] leading-[150%] tracking-[0px]',
          { 'pr-8': type === 'password' },
          className
        )}
        ref={ref}
        {...props}
      />
      {type === 'password' ? (
        <div
          role="button"
          onClick={() => {
            setShowPassword((value) => !value);
          }}
          className="cursor-pointer absolute right-5 top-1/2 -translate-y-1/2"
        >
          {!showPassword ? (
            <Eye weight="fill" className=" text-grey-900" />
          ) : (
            <EyeClosed className=" text-grey-900" />
          )}
        </div>
      ) : null}
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
