import React from 'react';
import Button from '../components/common/Button';
import '../styles/welcome.css'
export default class Welcome extends React.Component {
  render() {
    return (
      <div className='welcome'>
        <h1 className="welcome__title">Bienvenido al Cambio</h1>
        <p className="welcome__subtitle">
          Design a tiny budgeting app that works for mobile, web, and the
          desktop.
        </p>
        <Button title='Hacer prueba' route='/questions' />
      </div>
    );
  }
}
