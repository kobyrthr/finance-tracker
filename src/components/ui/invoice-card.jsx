import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Typography } from './typography';
import { Badge } from './badge';
import IconArrowRight from '@/../public/icon-arrow-right.svg';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/use-mobile';
import { CompanyContext } from '@/context/transactions-context';

const InvoiceCard = ({ invoice }) => {
  const router = useRouter();
  const { setInvoice } = useContext(CompanyContext);
  const { id, paymentDue, clientName, total, status } = invoice;
  const isMobile = useIsMobile('small');

  const handleClick = () => {
    setInvoice(invoice);
    setTimeout(() => {
      router.push(`/${id}`, {
        shallow: true,
      });
    }, 100);
  };

  return (
    <Card onClick={handleClick}>
      <CardContent className="grid max-sm:gap-6 cursor-pointer sm:flex items-center size-full sm:justify-between">
        {isMobile ? (
          <>
            <div className="w-full flex items-center justify-between">
              <Typography asChild type="heading-s-variant" className="">
                <span>
                  <span className="text-color-07">#</span>
                  {id}
                </span>
              </Typography>
              <Typography
                asChild
                type="heading-s-variant"
                className="max-sm:text-[13px] font-medium text-color-07"
              >
                <span>{clientName}</span>
              </Typography>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <Typography
                  asChild
                  type="heading-s-variant"
                  className="max-sm:text-[13px] font-medium text-color-07"
                >
                  <span>
                    Due{' '}
                    {new Date(paymentDue).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </Typography>

                <Typography asChild type="heading-s" className="">
                  <span>£ {total.toFixed(2)}</span>
                </Typography>
              </div>

              <div className="flex gap-5 items-center">
                <Badge variant={status}> {status}</Badge>
                <Image
                  className="hidden sm:block"
                  src={IconArrowRight}
                  alt="arrow-right"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <Typography asChild type="heading-s-variant" className="">
              <span>
                <span className="text-color-07">#</span>
                {id}
              </span>
            </Typography>

            <Typography
              asChild
              type="heading-s-variant"
              className="max-sm:text-[13px] font-medium text-color-07"
            >
              <span>
                Due{' '}
                {new Date(paymentDue).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })}
              </span>
            </Typography>

            <Typography
              asChild
              type="heading-s-variant"
              className="max-sm:text-[13px] font-medium text-color-07"
            >
              <span>{clientName}</span>
            </Typography>

            <Typography asChild type="heading-s" className="">
              <span>£ {total.toFixed(2)}</span>
            </Typography>

            <div className="flex gap-5 items-center">
              <Badge variant={status}> {status}</Badge>
              <Image src={IconArrowRight} alt="arrow-right" />
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default InvoiceCard;
