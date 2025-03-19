import React from 'react';
import { Input } from './input';
import { Typography } from './typography';

const InputMetric = ({ unit = 'cm', ...props }) => {
  return (
    <div className="relative">
      <Input
        type="number"
        className="pr-16 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        {...props}
      />
      <span className="absolute top-1/2 -translate-y-1/2 right-4">
        <Typography type="preset-4" className="text-blue-500">
          {unit}
        </Typography>
      </span>
    </div>
  );
};

export default InputMetric;
