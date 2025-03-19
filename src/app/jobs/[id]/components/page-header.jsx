import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export const PageHeader = ({ company, className = '' }) => {
  return (
    <div className={cn('rounded-lg bg-popover w-full', className)}>
      <div className="flex flex-col sm:flex-row items-center w-full">
        <div
          className={cn('relative min-w-[150px] size-[150px] hidden sm:block')}
          style={{ backgroundColor: company?.logoBackground }}
        >
          <Image
            src={`/${company?.logo}`}
            fill
            alt="logo"
            className="object-contain p-8"
          />
        </div>

        <Image
          src={`/${company?.logo}`}
          width={50}
          height={50}
          style={{ backgroundColor: company?.logoBackground }}
          alt="logo"
          className="object-scale-down rounded-lg absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 block sm:hidden p-2"
        />

        <div className="p-6 sm:p-12 flex flex-row max-sm:flex-col  justify-between w-full">
          <div className="flex flex-col items-center gap-4">
            <Typography type="heading-m" className="">
              {company?.company}
            </Typography>
            <Typography
              type="heading-s-variant"
              className="font-normal text-gray-500"
            >
              {company?.website}
            </Typography>
          </div>
          <Button
            variant="default"
            className="max-sm:w-fit max-sm:mx-auto max-sm:mt-6"
            asChild
          >
            <Link href={company?.website ?? ''} target="_blank">
              Visit Website
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
