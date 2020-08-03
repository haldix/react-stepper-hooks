import React, { useState } from 'react';
import './App.scss';
import Stepper from './Stepper';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleClick = (clickType) => {
    let newStep = currentStep;
    clickType === 'next' ? newStep++ : newStep--;

    if (newStep > 0 && newStep <= stepsArray.length + 1) {
      setCurrentStep(newStep);
    }
  };

  return (
    <>
      <div className='stepper-container vertical'>
        <Stepper
          direction='horiz'
          currentStep={currentStep}
          stepsData={stepsArray}
        />
      </div>

      <Stepper
        direction='vert'
        currentStep={currentStep}
        stepsData={stepsArray}
      />

      <div className='buttons-container'>
        <button onClick={() => handleClick()}>Previous</button>
        <button onClick={() => handleClick('next')}>Next</button>
      </div>
    </>
  );
}

export default App;

const stepsArray = [
  'Create your account',
  'Add personal info',
  'Add payment details',
  'Complete registration',
  'Registration complete',
  'Login',
];
