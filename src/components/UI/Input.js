import React, { useId } from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef(({ label, input }, ref) => {
  const compId = useId();

  return (
    <div className={classes.input}>
      <label htmlFor={`${compId}input.id`}>{label}</label>
      <input {...input} id={`${compId}input.id`} ref={ref}></input>
    </div>
  );
});

export default Input;
