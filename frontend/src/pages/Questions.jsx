import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import QuestionsList from '../components/QuestionsList';
import '../styles/questions.css';

export default class Questions extends React.Component {
  state = {
    data: [
      { id: 1, question: 'blah blah' },
      { id: 2, question: 'blah blah' },
      { id: 3, question: 'blah blah' },
    ],
    max: 0,
    selected: 0,
  };

  async componentDidMount() {
    this.setState({ max: this.state.data.length - 1 });
  }

  handleChangeQuestion = async (e) => {
    if (e >= this.state.max)
      return await this.setState({ selected: this.state.max });
    else if (e <= 0) return await this.setState({ selected: 0 });
    await this.setState({ selected: e });
  };

  render() {
    return (
      <AwesomeSlider
        buttons={false}
        bullets={false}
        // infinite={false}
        selected={this.state.selected}
        animation='open-animation'>
        {this.state.data.map((data, i) => {
          return (
            <div key={i}>
              <QuestionsList
                id={data.id}
                question={data.question}
                selected={i}
                max={this.state.data.length}
                handleChangeQuestion={this.handleChangeQuestion}
              />
            </div>
          );
        })}
      </AwesomeSlider>
    );
  }
}
