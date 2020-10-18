import React from 'react';
import Button from '../components/common/Button';

export default class QuestionsList extends React.Component {
  // handleClick = (e) => {
  //   e.preventDefault();
  //   const { handleChangeQuestion, selected } = this.props;
  //   e.target.value === 'next'
  //     ? handleChangeQuestion(selected + 1)
  //     : handleChangeQuestion(selected - 1);
  // };

  render() {
    const { listquestions } = this.props;
    return (
      <div key={{}}>
        <h1>{listquestions.question}</h1>
        <Button title={`back`} route='/question' onClick={this.handleClick} />
        <Button title={`next`} route='/question' onClick={this.handleClick} />
      </div>
    );
  }
}
