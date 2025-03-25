import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'cursor-pointer p-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--spacing-100)] text-[15px] font-bold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-grey-900 text-white hover:bg-grey-500',
        secondary:
          'bg-beige-100 text-grey-900 hover:bg-white border border-transparent hover:border-beige-500',
        tertiary: 'bg-white text-grey-500 hover:text-grey-900',
        destructive: 'bg-red text-white hover:bg-red/80',
        link: 'text-color-01 underline-offset-4 hover:underline',
        ghost: '',
      },
      size: {
        default: 'min-h-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
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
