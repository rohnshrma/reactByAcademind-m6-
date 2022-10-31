import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
// import './CourseInput.css';

import styled from 'styled-components';

const FormControl = styled.div`

  margin: 0.5rem 0;


& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color : ${props => props.invalid ? "red" : "black"}
}

& input {
  display: block;
  width: 100%;
  border-radius: 30px;
  border: 1px solid ${props=>props.invalid ? "red" : "black"};
  box-shadow: ${props => props.invalid ? "0px 0px 20px 0px rgb(245, 131, 131)" : "" };
  font: inherit;
  line-height: 1.5rem;
  padding: 5px 20px;
}

& input:focus {
  outline: none;
  background: #EEEEEE;
  border-color: #06283D;
}

`;

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
      <FormControl invalid={!isValid}>
        <label >{!isValid ? "Nothing to Add!" : "Make Some Goal"}</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
