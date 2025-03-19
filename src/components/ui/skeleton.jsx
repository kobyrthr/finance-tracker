import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-color-07/20', className)}
      {...props}
    />
  );
}

export { Skeleton };
