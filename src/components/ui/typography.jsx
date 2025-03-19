import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

export const typography = cva('text-blue-900', {
  variants: {
    type: {
      'preset-1': 'font-semibold text-[64px] leading-[110%] -tracking-[5%]',
      'preset-2': 'font-semibold text-[48px] leading-[110%] tracking-[-5%]',
      'preset-3': 'font-semibold text-[32px] leading-[110%] tracking-[-5%]',
      'preset-4': 'font-semibold text-[24px] leading-[120%] tracking-[-5%]',
      'preset-5': 'font-semibold text-[20px] leading-[120%] tracking-[-5%]',
      'preset-6':
        'text-grey-500 font-semibold text-[16px] leading-[150%] tracking-[-0%]',
      'preset-7': 'font-normal text-[14px] leading-[150%] tracking-[-0%]',
    },
  },
  defaultVariants: {
    type: 'preset-7',
  },
});

export const Typography = ({
  children,
  type,
  className,
  asChild,
  ...props
}) => {
  const Comp = asChild ? Slot : 'p';
  return (
    <Comp className={cn(typography({ type, className }))} {...props}>
      {children}
    </Comp>
  );
};
