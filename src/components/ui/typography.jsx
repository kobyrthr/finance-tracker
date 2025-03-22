import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

export const typography = cva('text-blue-900', {
  variants: {
    type: {
      'preset-1': 'font-bold text-[32px] leading-[120%] tracking-[0px]',
      'preset-2': 'font-bold text-[20px] leading-[120%] tracking-[0px]',
      'preset-3': 'font-bold text-[16px] leading-[150%] tracking-[0px]',
      'preset-4': 'font-normal text-[14px] leading-[150%] tracking-[0px]',
      'preset-4-bold': 'font-bold text-[14px] leading-[150%] tracking-[0px]',
      'preset-5': 'font-normal text-[12px] leading-[150%] tracking-[0px]',
      'preset-5-bold': 'font-bold text-[12px] leading-[150%] tracking-[0px]',
    },
  },
  defaultVariants: {
    type: 'preset-5',
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
