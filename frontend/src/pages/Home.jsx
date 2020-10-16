import React, { Fragment } from 'react';
import Button from '../components/common/Button';

export default class Home extends React.Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Button title='Hacer prueba' route='/questions' />
      </Fragment>
    );
  }
}
