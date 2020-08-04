import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Stepper.scss';

const Stepper = (props) => {
  const [steps, setSteps] = useState([]);
  const { stepsData, currentStep, direction } = props;

  useEffect(() => {
    const currSteps = stepsData.map((step, idx) => ({
      description: step, // description text
      past: idx < currentStep - 1, // past are completed steps
      current: idx === currentStep - 1, // current step
    }));

    setSteps(currSteps);
  }, [stepsData, currentStep]);

  const stepsJSX = steps.map(({ current, past, description }, idx) => {
    return (
      <div className='step-cont' key={idx}>
        <div className='step'>
          <div
            className={`step__number ${
              current || past ? 'step__number-selected' : null
            }`}
          >
            {past ? <span>&#10003;</span> : idx + 1}
          </div>
          <div
            className={`step__description ${
              current && 'step__description-active'
            }`}
          >
            {description}
          </div>
        </div>
        {idx !== steps.length - 1 && (
          <div className={`spacer sp-${direction}`}></div>
        )}
      </div>
    );
  });

  return <div className={`container ${direction}`}>{stepsJSX}</div>;
};

export default Stepper;

Stepper.propTypes = {
  direction: PropTypes.string.isRequired,
  currentStep: PropTypes.number.isRequired,
  stepsData: PropTypes.array.isRequired,
};
