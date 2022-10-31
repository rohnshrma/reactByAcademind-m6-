import React from 'react';

// import './Button.css';

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

import styled from 'styled-components';

const Button = styled.button`

  font: inherit;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  border: 1px solid #182747;
  color: white;
  background: #182747;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;


&:focus {
  outline: none;
}

&:hover,
&:active {
  background: #183757;
  border-color: #183757;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}

`

export default Button;
