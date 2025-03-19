import React from 'react';
import Image from 'next/image';
import IconGender from '@/../public/assets/images/icon-gender.svg';
import IconAge from '@/../public/assets/images/icon-age.svg';
import IconMuscle from '@/../public/assets/images/icon-muscle.svg';
import IconPregnancy from '@/../public/assets/images/icon-pregnancy.svg';
import IconRace from '@/../public/assets/images/icon-race.svg';
import { Typography } from './typography';
import { Card, CardContent } from './card';
import parse from 'html-react-parser';

const LimitCard = ({ item }) => {
  const { icon, title, description } = item;
  return (
    <Card className="max-w-[365px]">
      <CardContent className="max-[376px]:p-4 p-8">
        <div className="flex items-center gap-4">
          <Image src={icon} alt={title} height={32} weight={32} />
          <Typography type="preset-5">{title}</Typography>
        </div>
        <Typography
          preset="preset-6"
          className="font-normal mt-4 max-w-[301px]"
        >
          {parse(description.replace(/\n/g, '<br>'))}
        </Typography>
      </CardContent>
    </Card>
  );
};

const LimitsSection = () => {
  const limits = [
    {
      icon: IconGender,
      title: 'Gender',
      description:
        "The development and body fat\n composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
    },
    {
      icon: IconAge,
      title: 'Age',
      description: `In aging individuals, increased body fat\n and muscle loss may cause BMI to underestimate body fat content.`,
    },
    {
      icon: IconMuscle,
      title: 'Muscle',
      description:
        "BMI may misclassify muscular\n individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
    },
    {
      icon: IconPregnancy,
      title: 'Pregnancy',
      description:
        'Expectant mothers experience weight gain\n due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.',
    },
    {
      icon: IconRace,
      title: 'Race',
      description:
        'Certain health concerns may affect\n individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.',
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full relative py-[99px] xl:py-[115px] px-[40px] min-[1440px]:px-[140px] ">
      <div className="relative w-full max-w-[1160px] xl:min-h-[704px] h-full">
        <div className="xl:max-w-[564px] mx-auto xl:mx-0 xl:absolute left-0">
          <Typography
            type="preset-2"
            className="text-center xl:text-start hidden sm:block"
          >
            Limitations of BMI
          </Typography>
          <Typography
            type="preset-3"
            className="text-center xl:text-start block sm:hidden"
          >
            Limitations of BMI
          </Typography>
          <Typography
            type="preset-6"
            className="font-normal mt-8 max-w-[616px] mx-auto text-center xl:text-start xl:max-w-full"
          >
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </Typography>
        </div>

        <div className="hidden xl:flex mx-auto xl:mx-0 xl:absolute right-0 w-full max-w-[961px] h-full flex-col items-end gap-8">
          <div className="self-end mr-48">
            <LimitCard item={limits[0]} />
          </div>
          <div className="flex flex-row gap-8">
            <LimitCard item={limits[1]} />
            <LimitCard item={limits[2]} />
          </div>
          <div className="flex flex-row gap-8 self-start">
            <LimitCard item={limits[3]} />
            <LimitCard item={limits[4]} />
          </div>
        </div>

        <div className="flex xl:hidden mx-auto xl:mx-0 xl:absolute right-0 w-full max-w-[961px] h-full flex-row flex-wrap justify-center gap-4 sm:gap-8 mt-14">
          <LimitCard item={limits[0]} />
          <LimitCard item={limits[1]} />
          <LimitCard item={limits[2]} />
          <LimitCard item={limits[3]} />
          <LimitCard item={limits[4]} />
        </div>
      </div>
    </section>
  );
};

export default LimitsSection;
