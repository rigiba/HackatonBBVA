import React from 'react';
import Button from '../components/common/Button';

export default class QuestionsList extends React.Component {
  handleClickQuestion = (e) => {
    e.preventDefault();
    const { handleChangeQuestion, selectedQuestion } = this.props;
    e.target.value === 'next'
      ? handleChangeQuestion(selectedQuestion + 1)
      : handleChangeQuestion(selectedQuestion - 1);
  };

  handleClickCategory = (e) => {
    e.preventDefault();
    const { handleChangeCategory, selectedCategory } = this.props;
    e.target.value === 'next'
      ? handleChangeCategory(selectedCategory)
      : handleChangeCategory(selectedCategory);
  };

  render() {
    const { question, selectedQuestion } = this.props;
    return (
      <div>
        <span>{selectedQuestion + 1}</span>
        <h2 className='slider_pregunta'>{question.question}?</h2>
        <div className='contenedor-buttons'>
          <Button
            title={'back'}
            route='/question'
            onClick={
              selectedQuestion === 0
                ? this.handleClickCategory
                : this.handleClickQuestion
            }
          />
          <Button
            title={'next'}
            route='/question'
            onClick={
              selectedQuestion === this.props.max
                ? this.handleClickCategory
                : this.handleClickQuestion
            }
          />
        </div>
      </div>
    );
  }
}

// Primer y ultima pregunta necesitan botón para cambiar de categoría
