import React, { useState,useRef } from 'react'
import Step1 from '../forms/register/Step1'
import Step2 from '../forms/register/Step2'
import Step3 from '../forms/register/Step3'
import Step4 from '../forms/register/Step4'
import { ArrowLeft, LucideCurrency } from 'lucide-react'
import { MoveRight } from 'lucide-react'
import { useFormContext } from 'react-hook-form';



function Stepper() {
  
  const [currentStep, setCurrentStep] = useState(1);
  const { trigger } = useFormContext();
  const stepData={
    1: ['firstName', 'lastName', 'email', 'phoneNumber'],
    2: ['address', 'city', 'country'],
    3: ['password']
  }

  const handleNext = async () => {
    let isValid = false;
    switch (currentStep) {
      case 1:
        isValid = await trigger(stepData[1]);
        break;
      case 2:
        isValid = await trigger(stepData[2]);
        break;
      case 3:
        isValid = await trigger(stepData[3]);
        break;
      default:
        isValid = true;
    }
    if (isValid && currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const steps = [
    { id: 1, component: <Step1 /> },
    { id: 2, component: <Step2 /> },
    { id: 3, component: <Step3 /> },
    { id: 4, component: <Step4 /> },
  ];

  

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handleBack}
          type="button"
          disabled={currentStep === 1}
          className="text-gray-500 disabled:opacity-50"
        >
          <ArrowLeft />
        </button>
        <div className="flex items-center">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`h-4 w-4 rounded-full cursor-pointer transition-colors duration-300 ${
                  currentStep >= step.id ? 'bg-[#1E7B82]' : 'bg-gray-200'
                }`}
                onClick={() => {(step.id<=currentStep)?setCurrentStep(step.id):handleNext()}}
              ></div>
              {index < steps.length - 1 && (
                <div className={`w-12 h-1  ${
                  currentStep > step.id ? 'bg-[#1E7B82]' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-700">STEP {currentStep} OF {steps.length}</p>
        </div>
      </div>
      <div className="flex-1 overflow-auto px-2 py-1">
        {steps[currentStep - 1].component}
      </div>
      <div className="flex justify-end mt-4">
        {currentStep < steps.length && (
          <button
            onClick={handleNext}
            type="button"
            className="bg-[#1E7B82] text-white px-6 py-2 rounded-md shadow-md transition-all duration-300 hover:bg-[#155A5E]"
          >
            Continue <MoveRight className="inline ml-2 h-4 w-4" />
          </button>
        )}  {currentStep===steps.length && (
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md shadow-md transition-all duration-300 hover:bg-green-700"
          >
            Submit Form
          </button>
        )}
      </div>
    </div>
  );
}

export default Stepper