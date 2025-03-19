import React from 'react';
import IconEating from '@/../public/assets/images/icon-eating.svg';
import IconExercise from '@/../public/assets/images/icon-exercise.svg';
import IconSleep from '@/../public/assets/images/icon-sleep.svg';
import Image from 'next/image';
import { Typography } from './typography';

const TipsSection = () => {
  const tips = [
    {
      id: 1,
      icon: IconEating,
      title: 'Healthy eating',
      description:
        'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.',
    },
    {
      id: 2,
      icon: IconExercise,
      title: 'Regular exercise',
      description:
        'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.',
    },
    {
      id: 3,
      icon: IconSleep,
      title: 'Adequate sleep',
      description:
        'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.',
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full relative lg:px-10 sm:py-12.5 lg:py-2.5">
      <div className="flex flex-col lg:flex-row px-10 lg:px-4 py-14 sm:py-20.5 items-start lg:items-center justify-center gap-8 bg-gradient-2/25 lg:bg-linear-to-r lg:from-white lg:to-gradient-2/25 lg:rounded-r-[35px] w-full">
        {tips.map((item) => (
          <div key={item.id} className="max-w-full lg:max-w-[365px]">
            <Image src={item.icon} alt={item.title} height={64} width={64} />
            <Typography type="preset-4" className="mt-8 sm:mt-12">
              {item.title}
            </Typography>
            <Typography type="preset-6" className="font-normal mt-6">
              {item.description}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TipsSection;
