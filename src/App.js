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
    <div className='main-cont'>
      <h1>Stepper Component in React</h1>
      <Stepper
        direction='horiz'
        currentStep={currentStep}
        stepsData={stepsArray}
      />

      <div className='buttons-container'>
        <button onClick={() => handleClick()}>
          <span className='chevron'>&lsaquo;</span>
        </button>
        <button onClick={() => handleClick('next')}>
          <span className='chevron'>&rsaquo;</span>
        </button>
      </div>

      <Stepper
        direction='vert'
        currentStep={currentStep}
        stepsData={stepsArray}
      />
    </div>
  );
}

export default App;

const stepsArray = [
  'Create your account',
  //'Add personal info',
  'Add payment details',
  'Complete registration',
  //'Registration complete',
  'Login',
];
