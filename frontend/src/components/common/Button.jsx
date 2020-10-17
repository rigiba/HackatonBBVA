import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ title, route, onClick }) => {
  return (
    <Link to={route}>
      <input type='button' value={title} onClick={onClick} />
    </Link>
  );
};

export default Button;
