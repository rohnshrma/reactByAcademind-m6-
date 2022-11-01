import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';


const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

// to manage events , if the input is blank
  const [isValid , setIsValid] = useState(true)


  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // prevent to add blank data . stops the futher execution
    if(enteredValue.trim().length === 0){
      setIsValid(false)
      return;
    }
    // will not be executed if the length == 0
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles["form-control"]} ${!isValid && styles.invalid }`}>
        <label >{!isValid ? "Nothing to Add!" : "Make Some Goal"}</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
