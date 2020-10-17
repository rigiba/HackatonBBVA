import React from 'react';
import Button from '../components/common/Button';

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>
          BIENVENIDA ASDASDASDS ASDASDAS A ASDASDASDASDASD ASDASD
          ASDASDASDASDASD
        </p>
        <Button title='Hacer prueba' route='/questions' />
      </div>
    );
  }
}
