import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import QuestionCategory from '../components/QuestionCategory';
import '../styles/questions.css';

export default class Questions extends React.Component {
  state = {
    questions: [
      {
        category: 'transport',
        content: [
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
        category: 'food',
        content: [
          {
            question: 'Conque frecuencia consumes estos productos',
            answers: [
              {
                foodModes: [
                  ['carne', 5],
                  ['snack', 0],
                  ['enlatados', 3],
                  ['importados', 0],
                ],
              },
            ],
          },
          {
            question: 'En que pais te encuentras',
          },
          {
            question: 'Con cuantas personas vives',
          },
        ],
      },
      {
        category: 'energy',
        content: [
          {
            question: 'Selecciona los equipos que tienes',
            answers: [
              {
                energyModes: [
                  ['calefaccionElectrica', 5],
                  ['aireAcondicionado', 0],
                  ['duchaElectrica', 3],
                  ['calentadorAgas', 0],
                  ['estufaElectrica', 0],
                  ['hornoElectrico', 0],
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
        category: 'solutionsEcological',
        content: [
          {
            question:
              'Cuales de estas soluciones tienes instaladas en tu casa',
            answers: [
              {
                transportModes: [
                  ['panelsolar', 5],
                  ['ahorrodeagua', 0],
                  ['bombilloahorradores', 3],
                ],
              },
            ],
          },
        ],
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
        selected={this.state.selected}>
        {this.state.questions.map((category, i) => {
          return (
            <div key={i} className='slider'>
              <QuestionCategory
                category={category.category}
                questions={Object.values(category.content).flat(1)}
              />
            </div>
          );
        })}
      </AwesomeSlider>
    );
  }
}
