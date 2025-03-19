import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

export const LoaderSkeleton = ({ children, isLoading = true, className }) => {
  return isLoading ? (
    <Skeleton
      className={cn('w-full h-5 flex flex-row justify-between', className)}
    />
  ) : (
    children
  );
};
