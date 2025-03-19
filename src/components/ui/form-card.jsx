import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardTitle } from './card';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Label } from './label';
import InputMetric from './input-metric.jsx';
import { Typography } from './typography';
import InformationBar from './information-bar.jsx';

const FormCard = ({ selectedUnit, setSelectedUnit }) => {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [feet, setFeet] = useState(null);
  const [inches, setInches] = useState(null);
  const [stones, setStones] = useState(null);
  const [pounds, setPounds] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const calculateBMI = () => {
    setIsLoading(true);
    if (selectedUnit === 'metric') {
      if (height && weight) {
        // Convert height to meters and calculate BMI
        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(1));
      }
    } else {
      if (feet && stones) {
        // Convert imperial measurements to metric then calculate BMI
        const heightInInches = feet * 12 + Number(inches || 0);
        const heightInMeters = heightInInches * 0.0254;

        const weightInPounds = stones * 14 + Number(pounds || 0);
        const weightInKg = weightInPounds * 0.45359237;

        const bmiValue = weightInKg / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(1));
      }
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  const getIdealWeightRange = () => {
    if (!height && !feet) return 'No input provided.';

    // Calculate height in meters regardless of unit
    let heightInMeters;
    if (selectedUnit === 'metric') {
      heightInMeters = height / 100;
    } else {
      const heightInInches = feet * 12 + Number(inches || 0);
      heightInMeters = heightInInches * 0.0254;
    }

    // Calculate ideal weight range using BMI range of 18.5 - 24.9
    const minWeight = 18.5 * (heightInMeters * heightInMeters);
    const maxWeight = 24.9 * (heightInMeters * heightInMeters);

    if (selectedUnit === 'metric') {
      const bmiCategory =
        bmi < 18.5
          ? 'underweight'
          : bmi < 24.9
          ? 'a healthy weight'
          : bmi < 29.9
          ? 'overweight'
          : 'obese';
      return `Your BMI suggests you're ${bmiCategory}. Your ideal weight is between ${minWeight.toFixed(
        1
      )}kgs - ${maxWeight.toFixed(1)}kgs.`;
    } else {
      // Convert kg to stones and pounds
      const minStones = Math.floor((minWeight * 2.20462) / 14);
      const minPounds = Math.round((minWeight * 2.20462) % 14);
      const maxStones = Math.floor((maxWeight * 2.20462) / 14);
      const maxPounds = Math.round((maxWeight * 2.20462) % 14);
      const bmiCategory =
        bmi < 18.5
          ? 'underweight'
          : bmi < 24.9
          ? 'a healthy weight'
          : bmi < 29.9
          ? 'overweight'
          : 'obese';
      return `Your BMI suggests you're ${bmiCategory}. Your ideal weight is between ${minStones}st ${minPounds}lbs - ${maxStones}st ${maxPounds}lbs.`;
    }
  };

  useEffect(() => {
    const HAS_METRIC_EMPTY_FIELDS = [height, weight].some(
      (val) => val === null
    );

    const HAS_IMPERIAL_EMPTY_FIELDS = [feet, stones, inches, pounds].some(
      (val) => val === null
    );
    if (!HAS_METRIC_EMPTY_FIELDS && selectedUnit === 'metric') {
      calculateBMI();
    }
    if (!HAS_IMPERIAL_EMPTY_FIELDS && selectedUnit === 'imperial') {
      calculateBMI();
    }
  }, [selectedUnit, height, weight, feet, stones, inches, pounds]);

  return (
    <Card className="xl:max-w-[564px] h-fit mt-4">
      <CardContent className="flex flex-col gap-8  p-8">
        <CardTitle>
          <Typography type="preset-4">Enter your details below</Typography>
        </CardTitle>
        <RadioGroup
          defaultValue={selectedUnit}
          onValueChange={(value) => setSelectedUnit(value)}
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center space-x-2 w-1/2">
              <RadioGroupItem value="metric" id="metric" />
              <Label htmlFor="metric">Metric</Label>
            </div>
            <div className="flex items-center space-x-2 w-1/2">
              <RadioGroupItem value="imperial" id="imperial" />
              <Label htmlFor="imperial">Imperial</Label>
            </div>
          </div>
        </RadioGroup>
        {selectedUnit === 'metric' ? (
          <div className="flex flex-row justify-between gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="height" className="text-grey-500 ">
                <Typography type="preset-7" className="">
                  Height
                </Typography>
              </Label>
              <InputMetric
                id="height"
                label="Height"
                placeholder={0}
                unit="cm"
                onChange={(e) => setHeight(+e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 text-gre">
              <Label htmlFor="weight" className="text-grey-500">
                <Typography type="preset-7" className="">
                  Weight
                </Typography>
              </Label>
              <InputMetric
                id="weight"
                label="Weight"
                placeholder={0}
                unit="kg"
                onChange={(e) => setWeight(+e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="ft" className="text-grey-500 ">
                <Typography type="preset-7" className="">
                  Height
                </Typography>
              </Label>
              <div className="flex flex-row gap-6">
                <InputMetric
                  id="ft"
                  label="ft"
                  placeholder={0}
                  unit="ft"
                  onChange={(e) => setFeet(+e.target.value)}
                />
                <InputMetric
                  id="in"
                  label="in"
                  placeholder={0}
                  unit="in"
                  onChange={(e) => setInches(+e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 text-gre">
              <Label htmlFor="st" className="text-grey-500">
                <Typography type="preset-7" className="">
                  Weight
                </Typography>
              </Label>
              <div className="flex flex-row gap-6">
                <InputMetric
                  id="st"
                  label="st"
                  placeholder={0}
                  unit="st"
                  onChange={(e) => setStones(+e.target.value)}
                />
                <InputMetric
                  id="lbs"
                  label="lbs"
                  placeholder={0}
                  unit="lbs"
                  onChange={(e) => setPounds(+e.target.value)}
                />
              </div>
            </div>
          </div>
        )}
        <InformationBar
          variant="bmi"
          loading={isLoading}
          className="w-full max-w-full"
          bmi={bmi ?? 0}
          bmiMessage={getIdealWeightRange()}
        />
      </CardContent>
    </Card>
  );
};

export default FormCard;
