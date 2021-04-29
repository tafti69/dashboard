import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const Bar = styled.div`
  width: 100vw;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111;
  padding: 0 24px;
  color: #fff;
`;

const Circle = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111;
  padding: 6px;
  border: 1px solid #fff;
  background: #292929;
  color: #fff;
  border-radius: 50%;
  margin-right: 16px;
  cursor: pointer;
  font-size: 15px;
  &.active {
    border: 1px solid #fff;
  }
  &.active-two {
    border: 1px solid #ac796b;
  }
  &.disabled {
    border: 1px solid #696969;
    background: #292929;
    color: #696969;
  }
  &:disabled {
    border: 1px solid #696969;
    background: #292929;
    color: #696969;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const Continue = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  outline: none;
  background: #fff;
  color: #000;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-transform: uppercase;
  margin-right: 48px;
  &:hover {
    opacity: 0.8;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin: 0 32px;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const P = styled.p`
  font-size: 15px;
  color: #fff;
  &.active {
    color: #ac796b;
  }
  &.active-two {
    color: #fff;
  }
  &.disabled {
    color: #696969;
  }
`;

const MyProgressBar = ({ steps, currentStepNumber, handleClick }) => {
  const [stepsArr, setStepsArr] = useState([]);

  useEffect(() => {
    const stepsState = steps.map((step, index) => {
      const stepObj = {};
      stepObj.name = step;
      stepObj.completed = false;
      stepObj.highlighted = index === 0 ? true : false;
      stepObj.selected = index === 0 ? true : false;
      return stepObj;
    });

    const currentSteps = updateStep(currentStepNumber - 1, stepsState);

    setStepsArr(currentSteps);
  }, [currentStepNumber, steps]);

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let stepCounter = 0;
    while (stepCounter < newSteps.length) {
      if (stepCounter === stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: true,
          selected: true,
          completed: false,
        };
        stepCounter++;
      } else if (stepCounter < stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: true,
          completed: true,
        };
        stepCounter++;
      } else {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: false,
          completed: false,
        };
        stepCounter++;
      }
    }
    return newSteps;
  };

  return (
    <Bar>
      <FlexWrapper>
        {stepsArr.map((step, index) => (
          <Flex key={index}>
            <Circle
              className={
                step.completed
                  ? "active-two"
                  : step.selected
                  ? "active"
                  : "disabled"
              }
              disabled={step.selected ? "" : "active"}
              onClick={() => handleClick()}
            >
              {step.completed ? (
                <CheckIcon style={{ color: "#ac796b" }} />
              ) : (
                index + 1
              )}
            </Circle>
            <P
              className={
                step.completed
                  ? "active"
                  : step.highlighted
                  ? "active-two"
                  : "disabled"
              }
            >
              {step.name}
            </P>
          </Flex>
        ))}
      </FlexWrapper>
      <Continue onClick={() => handleClick("next")}>
        {currentStepNumber === steps.length
          ? "Publish Post"
          : currentStepNumber === 5
          ? "Reset"
          : "Continue"}
        {currentStepNumber === steps.length ? (
          ""
        ) : currentStepNumber === 5 ? (
          ""
        ) : (
          <ArrowRightAltIcon />
        )}
      </Continue>
    </Bar>
  );
};

export default MyProgressBar;
