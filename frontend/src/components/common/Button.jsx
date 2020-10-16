import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ title, route }) => (
  <Link to={route}>
    <button>{title}</button>
  </Link>
);

export default Button;
