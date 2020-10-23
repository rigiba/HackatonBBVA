import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import QuestionCategory from '../components/QuestionCategory';
import '../styles/questions.css';

export default class Questions extends React.Component {
  state = {
    questions: [
      {
        category: 'Transporte',
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
        color: '#3da9fc',
      },
      {
        category: 'Comida',
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
            question: 'En que país te encuentras',
          },
          {
            question: 'Con cuantas personas vives',
          },
        ],
        color: '#abd1c6',
      },
      {
        category: 'Energía',
        content: [
          {
            question: 'Selecciona los equipos que tienes',
            answers: [
              {
                energyModes: [
                  ['Calefacción eléctrica', 5],
                  ['Aire acondicionado', 0],
                  ['Ducha eléctrica', 3],
                  ['Calentador a gas', 0],
                  ['Estufa eléctrica', 0],
                  ['Horno eléctrico', 0],
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
        color: '#ef4565',
      },
      {
        category: 'Soluciones Ecológicas',
        content: [
          {
            question: 'Cuales de estas soluciones tienes instaladas en tu casa',
            answers: [
              {
                transportModes: [
                  ['Panel solar', 5],
                  ['Ahorro de agua', 0],
                  ['Bombillo ahorradores', 3],
                ],
              },
            ],
          },
        ],
        color: '#fff',
      },
    ],

    data: [],

    selected: 0,
  };

  handleChangeCategory = async (e) => {
    console.log(e);

    // if (e >= 3) return await this.setState({ selected: 3 });
    // else if (e <= 0) return await this.setState({ selected: 0 });
    // else await this.setState({ selected: e });
    await this.setState({ selected: this.state.selected + 1 });
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
                questions={Object.values(category.content)}
                color={category.color}
                selected={i}
                handleChangeCategory={this.handleChangeCategory}
              />
            </div>
          );
        })}
      </AwesomeSlider>
    );
  }
}
