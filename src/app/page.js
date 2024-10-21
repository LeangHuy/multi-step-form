"use client";
import Stepper from "@/components/Stepper";
import StepperControl from "@/components/StepperControl";
import DatabaseType from "@/components/steps/DatabaseType";
import Finish from "@/components/steps/Finish";
import SetupConnection from "@/components/steps/SetupConnection";
import SetupProject from "@/components/steps/SetupProject";
import { StepperContext } from "@/contexts/StepperContext";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const steps = [
    "Setup Project",
    "Select Database type",
    "setup connection",
    "finished",
  ];
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <SetupProject />;
      case 2:
        return <DatabaseType />;
      case 3:
        return <SetupConnection />;
      case 4:
        return <Finish />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    //check of steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* stepper */}
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
      {/* Display Components */}
      <div className="my-10 p-10">
        <StepperContext.Provider
          value={{
            userData,
            setUserData,
            finalData,
            setFinalData,
          }}
        >
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>

      {/* navigation controls */}
      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
    </div>
  );
}
