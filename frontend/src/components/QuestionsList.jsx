import React from 'react';
import Button from '../components/common/Button';

export default class QuestionsList extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    const { handleChangeQuestion, selected } = this.props;
    e.target.value === 'next'
      ? handleChangeQuestion(selected + 1)
      : handleChangeQuestion(selected - 1);
  };

  render() {
    const { question, selected } = this.props;
    return (
      <div>
        <span>{selected + 1}</span>
        <h2>{question.question}?</h2>
        <Button title={`back`} route='/question' onClick={this.handleClick} />
        <Button title={`next`} route='/question' onClick={this.handleClick} />
      </div>
    );
  }
}

// Primer y ultima pregunta necesitan botón para cambiar de categoría
