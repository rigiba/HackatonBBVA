import React from 'react';
import QuestionsList from '../components/QuestionsList';
import AwesomeSlider from 'react-awesome-slider';

export default class QuestionCategory extends React.Component {
  state = {
    // background_color: null,
    max: this.props.questions.length,
    selected: 0,
  };

  handleChangeQuestion = async (e) => {
    if (e >= this.state.max)
      return await this.setState({ selected: this.state.max - 1 });
    else if (e <= 0) return await this.setState({ selected: 0 });
    await this.setState({ selected: e });
  };

  render() {
    return (
      <div>
        <h2>{this.props.category}</h2>
        <AwesomeSlider
          buttons={false}
          bullets={false}
          selected={this.state.selected}>
          {this.props.questions.map((question, i) => {
            return (
              <div key={i}>
                <QuestionsList
                  selected={i}
                  handleChangeQuestion={this.handleChangeQuestion}
                  question={this.props.questions[i]}
                />
              </div>
            );
          })}
        </AwesomeSlider>
      </div>
    );
  }
}
