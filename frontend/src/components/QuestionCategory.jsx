import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import QuestionsList from '../components/QuestionsList';

export default class QuestionCategory extends React.Component {
  state = {
    selectedQuestion: 0,
    selectedCategory: this.props.selected,
    max: this.props.questions.length - 1,
    color: this.props.color,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      const { category, color } = this.props;
      switch (category) {
        case 'Transporte':
          this.setState({ color: color });
          break;
        case 'Comida':
          this.setState({ color: color });
          break;
        case 'Energía':
          this.setState({ color: color });
          break;
        case 'Soluciones Ecológicas':
          this.setState({ color: color });
          break;
        default:
          this.setState({ color: 'red' });
          break;
      }
    }
  }

  handleChangeQuestion = async (e) => {
    if (e >= this.state.max)
      return await this.setState({ selectedQuestion: this.state.max });
    else if (e <= 0) return await this.setState({ selectedQuestion: 0 });
    else await this.setState({ selectedQuestion: e });
  };

  handleChangeCategory = async (e) => {
    const { handleChangeCategory } = this.props;
    handleChangeCategory(e);
  };

  render() {
    const { category, questions } = this.props;

    return (
      <div>
        <h2 style={{ color: this.state.color }}>{category}</h2>
        <AwesomeSlider
          buttons={false}
          bullets={false}
          selected={this.state.selectedQuestion}>
          {questions.map((question, i) => {
            return (
              <div key={i}>
                <QuestionsList
                  question={questions[i]}
                  max={this.state.max}
                  selectedQuestion={i}
                  handleChangeQuestion={this.handleChangeQuestion}
                  selectedCategory={this.state.selectedCategory}
                  handleChangeCategory={this.handleChangeCategory}
                />
              </div>
            );
          })}
        </AwesomeSlider>
      </div>
    );
  }
}
