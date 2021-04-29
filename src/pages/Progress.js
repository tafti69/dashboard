import React, { useState } from "react";
import MyProgressBar from "../components/ProgressBar";

const stepsArray = ["Post", "Audience", "Objectives", "Overview"];

const Progress = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleClick = (clickType) => {
    let newStep = activeStep;
    clickType === "next" ? newStep++ : newStep--;

    if (newStep > 0 && newStep <= 5) {
      setActiveStep(newStep);
      console.log(newStep);
    }
    if (newStep > 5) {
      setActiveStep(1);
    }
  };

  return (
    <div>
      <MyProgressBar
        steps={stepsArray}
        currentStepNumber={activeStep}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Progress;
