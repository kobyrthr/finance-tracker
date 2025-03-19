'use client';
import * as React from 'react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import IconArrowLeft from '@/../public/icon-arrow-left.svg';
import IconArrowRight from '@/../public/icon-arrow-right.svg';
import { format } from 'date-fns';

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  const formatters = {
    formatCaption: (date, options) => {
      return format(date, 'MMM yyyy', { locale: options?.locale });
    },
    formatMonthCaption: (date, options) => {
      return format(date, 'MMMM', { locale: options?.locale });
    },
    formatYearCaption: (date, options) => {
      return format(date, 'yyyy', { locale: options?.locale });
    },
  };
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      formatters={formatters}
      fixedWeeks
      className={cn('p-4 py-6', className)}
      hideHead
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-regular',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 hover:opacity-80'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: cn(
          'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-transparent [&:has([aria-selected].day-outside)]:bg-transparent [&:has([aria-selected].day-range-end)]:rounded-r-md',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md'
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'size-[30px] p-0 h-fit text-regular aria-selected:opacity-100 hover:text-color-01/80'
        ),
        day_range_start: 'day-range-start',
        day_range_end: 'day-range-end',
        day_selected: 'text-color-01 hover:text-color-08 focus:text-color-01',
        day_today: 'text-color-08',
        day_outside: 'day-outside text-color-08/10',
        day_disabled: 'text-color-08/10',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <Image
            src={IconArrowLeft}
            alt="arrow-left"
            className={cn(className)}
            {...props}
          />
        ),
        IconRight: ({ className, ...props }) => (
          <Image
            src={IconArrowRight}
            alt="arrow-right"
            className={cn(className)}
            {...props}
          />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
