import React from 'react';
import Image from 'next/image';
import ManEating from '@/../public/assets/images/image-man-eating.webp';
import LineLeft from '@/../public/assets/images/pattern-curved-line-left.svg';
import { Typography } from '@/components/ui/typography';

const BMIResultSection = () => {
  return (
    <section className="pt-0 xl:pt-40 xl:pb-22">
      <div className="gap-6 sm:gap-18 sm:pr-11 xl:pr-0 xl:mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center w-full mx-auto max-w-[841px] xl:max-w-[1160px] relative">
        <Image
          src={LineLeft}
          alt="line-left"
          height={200}
          width={85}
          className="absolute hidden xl:block right-24 -top-40"
        />
        <Image
          src={ManEating}
          width={564}
          height={533}
          alt="man-eating"
          className="self-start w-full sm:w-[361px] sm:h-[411px] object-contain xl:h-[533px] xl:w-[564px] sm:-ml-10.5 xl:ml-0"
        />
        <div className="flex flex-col px-10 sm:px-0 sm:max-w-[465px] gap-8 relative self-center sm:self-end pb-11">
          <Typography type="preset-2" className="text-blue-900">
            What your BMI result means
          </Typography>
          <Typography type="preset-6" className="font-normal">
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default BMIResultSection;
