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

  // const stepsJSX = steps.map(({ current, past, description }, idx) => {
  //   return (
  //     <div className='step-wrapper' key={idx}>
  //       <div
  //         className={`step-number ${
  //           current || past ? 'step-number-selected' : 'step-number-disabled'
  //         }`}
  //       >
  //         {past ? <span>&#10003;</span> : idx + 1}
  //       </div>
  //       <div
  //         className={`step-description ${current && 'step-description-active'}`}
  //       >
  //         {description}
  //       </div>
  //       {idx !== steps.length - 1 && (
  //         <div className={`divider-line divider-line-${steps.length}`} />
  //       )}
  //     </div>
  //   );
  // });

  const stepsJSX = steps.map(({ current, past, description }, idx) => {
    return (
      <>
        <div class='step' key={idx}>
          <div
            className={`step__number ${
              current || past
                ? 'step__number-selected'
                : 'step__number-disabled'
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
        {idx !== steps.length - 1 && <div class='spacer sp-horiz'></div>}
      </>
    );
  });

  return (
    <div className={`container ${direction}`}>
      <div className='steps-cont'>{stepsJSX}</div>
    </div>
  );

  //return <div className={`stepper-wrapper-${direction}`}>{stepsJSX}</div>;
};

export default Stepper;

Stepper.propTypes = {
  direction: PropTypes.string.isRequired,
  currentStep: PropTypes.number.isRequired,
  stepsData: PropTypes.array.isRequired,
};
