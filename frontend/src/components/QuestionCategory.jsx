import React from 'react';
import QuestionsList from '../components/QuestionsList';
import AwesomeSlider from 'react-awesome-slider';

export default class QuestionCategory extends React.Component {
  state = {
    background_color: null,
  };

  render() {
    return (
      <div>
        <h2>{this.props.category}</h2>
        <AwesomeSlider>
          {this.props.questions.map((question, i) => {
            return (
              <div key={i}>
                <QuestionsList listquestions={this.props.questions[i]} />
              </div>
            );
          })}
        </AwesomeSlider>
      </div>
    );
  }
}
