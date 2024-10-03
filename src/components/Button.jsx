import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ( props) => {
  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(props.route);

  // };

  return (
    <button className={`text-black fs-5 fs-bold ${props.btnStyle} px-5 p-2`} onClick={props.handleClick}>
      {props.text}
    </button>
  );
};

export default Button;
