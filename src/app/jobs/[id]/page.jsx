'use client';
import { Typography } from '@/components/ui/typography';
import { useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CompanyContext } from '@/context/company-context';
import { useParams, useRouter } from 'next/navigation';
import { PageHeader } from './components/page-header';
import { Button } from '@/components/ui/button';

const CompanyPage = () => {
  const { company, companies, setCompany } = useContext(CompanyContext);
  const params = useParams();
  const id = params.id;
  const router = useRouter();

  const handleApply = () => {};
  useEffect(() => {
    if (!company) {
      const val = companies.find((item) => {
        return item.id === parseInt(id);
      });
      if (!val) {
        router.push('/');
      } else {
        setCompany(val);
      }
    }
  }, []);

  return (
    <>
      <div className="-mt-10 flex flex-col items-center justify-items-center size-full !pt-0 max-[376px]:p-6 p-12 px-10 gap-6 sm:gap-8">
        <PageHeader company={company} className="w-full lg:max-w-[730px]" />
        <div className="rounded-lg p-12 max-sm:py-10 max-sm:px-6 bg-popover lg:max-w-[730px] w-full flex flex-col">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex flex-col">
              <div className="flex gap-3">
                <Typography
                  type="heading-s-variant"
                  className="font-normal text-gray-500"
                >
                  {company?.postedAt}
                </Typography>
                <Typography
                  type="heading-s-variant"
                  className="font-normal text-gray-500"
                >
                  {'• '}
                  {company?.contract}
                </Typography>
              </div>
              <Typography type="heading-m" className="mt-3">
                {company?.position}
              </Typography>
              <Typography
                type="heading-s-variant"
                className="mt-4 text-color-01 font-bold"
              >
                {company?.location}
              </Typography>
            </div>

            <Button
              variant="primary"
              className="w-full sm:w-fit max-sm:mt-12 px-7 py-4"
              asChild
            >
              <Link href={company?.apply ?? ''} target="_blank">
                Apply Now
              </Link>
            </Button>
          </div>

          <div className="flex flex-col gap-10 mt-10">
            <Typography type="heading-s" className=" text-gray-500">
              {company?.description}
            </Typography>

            <Typography
              type="heading-m"
              className="text-[20px] text-[hsla(219, 29%, 14%, 1)]"
            >
              Requirements
            </Typography>

            <div className="">
              <Typography type="heading-s" className=" text-gray-500">
                {company?.requirements.content}
              </Typography>

              <ul className="space-y-1 mt-6">
                {company?.requirements.items.map((item, index) => (
                  <li key={index} className="list-disc ml-2 pl-8">
                    <Typography type="heading-s" className=" text-gray-500">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>

            <Typography
              type="heading-m"
              className="text-[20px] text-[hsla(219, 29%, 14%, 1)]"
            >
              What You Will Do
            </Typography>
            <div className="">
              <Typography type="heading-s" className=" text-gray-500">
                {company?.role.content}
              </Typography>

              <ol className="space-y-2 mt-6 marker:text-color-01 list-none">
                {company?.role.items.map((item, index) => (
                  <li key={index} className="flex gap-7">
                    <Typography
                      type="heading-s"
                      className=" text-color-01 text-center w-2 font-bold"
                    >
                      {index + 1}
                    </Typography>{' '}
                    <Typography type="heading-s" className=" text-gray-500">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <footer className="max-sm:px-6 px-10 bg-popover w-full">
        <div className="lg:max-w-[730px] mx-auto py-6">
          <div className="flex justify-between items-center">
            <div className="max-sm:hidden">
              <Typography type="heading-m" className="">
                {company?.position}
              </Typography>
              <Typography type="heading-s" className="mt-3 text-gray-500">
                {company?.company}
              </Typography>
            </div>

            <Button
              variant="primary"
              className="max-sm:w-full w-fit px-7 py-4"
              asChild
            >
              <Link href={company?.apply ?? ''} target="_blank">
                Apply Now
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CompanyPage;
