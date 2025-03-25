import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-[15px] font-bold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-color-01 text-white hover:bg-color-02',
        default: 'bg-color-05 text-color-01 hover:bg-color-05/50',
        secondary: 'bg-color-06-base text-color-06 hover:bg-color-06-hover',
        destructive: 'bg-color-09 text-white hover:bg-color-10',
        link: 'text-color-01 underline-offset-4 hover:underline',
        ghost: '',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-color-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9 gap-3 px-2 py-2 sm:gap-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(
  (
    { IconLeft, className, variant, size, asChild = false, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {IconLeft ? (
          <>
            <IconLeft /> {children}
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
