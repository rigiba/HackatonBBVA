import React, { Fragment } from 'react';
import Header from '../components/Header';
import Welcome from '../components/Welcome';

export default class Home extends React.Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Header />
        <Welcome />
      </Fragment>
    );
  }
}
