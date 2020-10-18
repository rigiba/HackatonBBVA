import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import QuestionCategory from '../components/QuestionCategory';
import '../styles/questions.css';

export default class Questions extends React.Component {
  state = {
    questions: [
      {
        
        transport: [
          {
            question:
              'Cuanto dias a la semana usas cada uno de estos transportes',
            answers: [
              {
                transportModes: [
                  ['bicicleta', 5],
                  ['moto', 0],
                  ['carro', 3],
                  ['tren', 0],
                ],
              },
            ],
          },
          {
            question: 'Cuantas horas al dia usas estos transportes',
          },
          {
            question: 'Cuantos viajes en avión haces en el año',
          },
        ],
      },
      {
        food: [],
      },
      {
        energy: [],
      },
      {
        solutionsEcological: [],
      },
    ],

    data: [],

    max: 0,
    selected: 0,
  };

  async componentDidMount() {
    this.setState({ max: this.state.questions.length - 1 });
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
        buttons={true}
        bullets={false}
        infinite={false}
        selected={this.state.selected}>
        {/* {this.state.questions.map((questions, i) => {
          return (
            <div key={i}>
              <QuestionsList
                id={questions.id}
                question={questions.question}
                selected={i}
                max={this.state.questions.length}
                handleChangeQuestion={this.handleChangeQuestion}
              />
            </div>
          );
        })} */}
        {this.state.questions.map((category, i) => {
          return (
            <div>
              <QuestionCategory
                key={i}
                category={Object.keys(category).join('')} questions={Object.values(category).flat(1)}/>
            </div>
          );
        })}
      </AwesomeSlider>
    );
  }
}
