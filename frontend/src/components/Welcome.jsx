import React from 'react';
import Button from '../components/common/Button';
import '../styles/welcome.css'
export default class Welcome extends React.Component {
  render() {
    return (
      <div className='welcome'>
        <h1 className='welcome__title'>Bienvenido al Cambio</h1>
        <p className='welcome__subtitle'>
          Unete a UQUE, calcula tu huella ambiental y comprométete con el cambio
        </p>
        <Button title='Hacer prueba' route='/questions' />
      </div>
    );
  }
}
