import React, { useState } from 'react';
import LogoSvg from '@/../public/assets/images/logo.svg';
import Image from 'next/image';
import { Typography } from './typography';
import FormCard from './form-card';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [selectedUnit, setSelectedUnit] = useState('metric');

  return (
    <section className="flex flex-col items-center justify-center w-full relative">
      <div className="absolute max-h-[640px] xl:max-h-[737px] right-0 xl:right-2/6 z-0 inset-0  bg-linear-to-r from-white to-gradient-2 rounded-b-[35px]"></div>
      <div
        className={cn(
          'w-full px-6 sm:px-10 xl:max-w-[1160px] py-8 xl:py-[88px] z-10 pb-[121px]'
        )}
      >
        <Image
          src={LogoSvg}
          alt="logo"
          className="mx-auto xl:mx-0 xl:self-start mb-10 xl:mb-6"
        />
        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-10 xl:gap-8">
          <div
            className={cn(
              'flex flex-col w-full max-w-[686px] xl:max-w-[564px] xl:py-[72px] gap-8'
            )}
          >
            <Typography
              type="preset-1"
              className="text-blue-900 text-center xl:text-start xl:pr-12"
            >
              Body Mass <br /> Index Calculator
            </Typography>
            <Typography
              type="preset-6"
              className="text-grey-500 font-normal xl:pr-24 text-center xl:text-start"
            >
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </Typography>
          </div>
          <FormCard
            selectedUnit={selectedUnit}
            setSelectedUnit={setSelectedUnit}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
