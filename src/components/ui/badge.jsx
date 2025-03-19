import * as React from 'react';
import { cva } from 'class-variance-authority';
import { Circle } from '@phosphor-icons/react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'max-[376px]:text-[13px] max-[376px]:w-[80px] w-[104px] inline-flex justify-center items-center max-[376px]:gap-1 gap-2 rounded-lg text-regular font-bold capitalize max-[376px]:py-2 py-3',
  {
    variants: {
      variant: {
        paid: 'bg-success/5 text-success',
        pending: 'bg-warning/5 text-warning',
        draft: 'bg-color-06-base/5 text-color-06-base',
      },
    },
    defaultVariants: {
      variant: 'draft',
    },
  }
);

function Badge({ className, variant, children, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      <Circle className="min-w-2" size={8} weight="fill" />
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
