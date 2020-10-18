import React from 'react';
import QuestionsList from '../components/QuestionsList';

export default class QuestionCategory extends React.Component {
  state = {
    background_color: null,
  };

  render() {
    return (
      <div>
        <h2>{this.props.category}</h2>
        <QuestionsList />
      </div>
    );
  }
}
